/**
 * GA4 event tracking.
 *
 * Every event the site sends is declared here rather than calling gtag()
 * inline at each site. That keeps the event names consistent — GA4 treats
 * `contact_submit` and `contact_submitted` as two unrelated events, and
 * once a typo is in the data it cannot be renamed retroactively.
 *
 * Naming follows GA4 convention: snake_case, under 40 characters, and
 * reserved prefixes (`google_`, `ga_`, `firebase_`) avoided.
 *
 * What is deliberately NOT sent: names, email addresses, phone numbers,
 * company names, free-text message bodies. Sending personal data to GA4
 * breaches Google's Measurement Protocol policy and can get the property
 * terminated. Budget is sent as the *bucket label* the user picked, never
 * a custom figure they typed, for the same reason.
 */

/** Events the site can send. Adding one here is what makes it trackable. */
export type AnalyticsEvent =
  // --- Lead generation: the funnel that produces business ---
  | "contact_form_start" // first field focused — measures intent
  | "contact_form_submit" // submitted and the API accepted it
  | "contact_form_error" // submitted but failed — a lost lead
  | "generate_lead" // GA4 recommended event, fires with contact_form_submit
  // --- Direct contact: people who skip the form ---
  | "email_click"
  | "phone_click"
  // --- Engagement: what people care about before converting ---
  | "cta_click"
  | "project_view"
  | "service_view"
  | "faq_open"
  | "social_click"
  | "scroll_depth"
  // --- Recruiting ---
  | "job_view"
  | "job_apply_start"
  | "job_apply_submit"
  | "job_apply_error";

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

/**
 * Sends an event to GA4.
 *
 * Safe to call anywhere: if the tag is absent — no measurement ID set, the
 * user blocks trackers, or this runs on the server — it does nothing rather
 * than throwing. Analytics must never be able to break a form submission.
 */
export function trackEvent(event: AnalyticsEvent, params: EventParams = {}) {
  if (typeof window === "undefined") return;

  // Drop undefined values so GA4 does not record empty parameters.
  const clean: EventParams = {};
  for (const [key, value] of Object.entries(params)) {
    if (value !== undefined && value !== "") clean[key] = value;
  }

  try {
    if (typeof window.gtag === "function") {
      window.gtag("event", event, clean);
      return;
    }

    // gtag.js is loaded lazily, so an early click can land before it arrives.
    // Pushing the same argument shape onto dataLayer queues the event; the
    // tag replays the queue on load, so nothing is dropped. Guarded because
    // the array only exists once some tag code has run.
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push(["event", event, clean]);
    }
  } catch {
    // Tracking is never worth breaking the page over.
  }
}

/**
 * Fires once per page load for a given key.
 *
 * Scroll depth and view events would otherwise fire repeatedly as the
 * observer re-triggers, inflating counts.
 */
const fired = new Set<string>();

export function trackOnce(
  event: AnalyticsEvent,
  params: EventParams = {},
  key?: string
) {
  const id = key ?? `${event}:${JSON.stringify(params)}`;
  if (fired.has(id)) return;
  fired.add(id);
  trackEvent(event, params);
}

/** Clears the once-per-page guard. Called on client-side route changes. */
export function resetOnceGuard() {
  fired.clear();
}

/**
 * Marks a lead's value so GA4 can rank inquiries by size.
 *
 * The figures are not revenue — they are the midpoint of each budget band,
 * used only so GA4 can sort and compare leads. A $50k-plus inquiry should
 * not read the same as a $5k one in the reports.
 */
export const BUDGET_VALUE: Record<string, number> = {
  "500-2000": 1250,
  "2500-4000": 3250,
  "5000-10000": 7500,
  "15000-20000": 17500,
  "25-50k": 37500,
  "50-100k": 75000,
  "100-250k": 175000,
  "250k+": 250000,
  // A typed figure is the user's own data, so only the bucket is recorded.
  custom: 0,
};

export function budgetValue(bucket: string): number {
  return BUDGET_VALUE[bucket] ?? 0;
}
