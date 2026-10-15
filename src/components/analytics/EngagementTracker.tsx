"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent, trackOnce, resetOnceGuard } from "@/lib/analytics";

/**
 * Page-level engagement tracking.
 *
 * Handles the signals that would otherwise need a handler on every element:
 * scroll depth, and clicks on email, phone and social links. Doing it with
 * one delegated listener keeps the tracking out of the presentational
 * components, so a future edit to the footer cannot silently drop an event.
 *
 * Renders nothing.
 */
export default function EngagementTracker() {
  const pathname = usePathname();

  // Scroll depth, reset per route so each page reports its own.
  useEffect(() => {
    resetOnceGuard();

    const milestones = [25, 50, 75, 90];

    function onScroll() {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;

      const percent = Math.round((window.scrollY / scrollable) * 100);

      for (const m of milestones) {
        if (percent >= m) {
          trackOnce(
            "scroll_depth",
            { percent_scrolled: m, page_path: pathname },
            `scroll:${pathname}:${m}`
          );
        }
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // Run once in case the page loads already scrolled (a deep link, or a
    // short page where no scroll event ever fires).
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // One delegated click listener for contact and outbound links.
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target as HTMLElement | null;

      // CTA buttons are tagged with data-cta by the Button component. This
      // catches <button> as well as links, so a submit CTA still reports.
      const cta = target?.closest?.("[data-cta]") as HTMLElement | null;
      if (cta) {
        const id = cta.getAttribute("data-cta");
        if (id) {
          trackEvent("cta_click", {
            cta_id: id,
            destination: cta.getAttribute("href") ?? "action",
            page_path: pathname,
          });
        }
      }

      const link = target?.closest?.("a");
      if (!link) return;

      const href = link.getAttribute("href") ?? "";
      if (!href) return;

      if (href.startsWith("mailto:")) {
        trackEvent("email_click", { page_path: pathname });
        return;
      }

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", { page_path: pathname });
        return;
      }

      if (href.startsWith("http")) {
        let host = "";
        try {
          host = new URL(href).hostname.replace(/^www\./, "");
        } catch {
          return;
        }

        // Skip our own absolute links; those are page views, not outbound.
        if (host.endsWith("minoqtopus.com")) return;

        const networks = ["linkedin", "instagram", "facebook", "upwork", "github"];
        const network = networks.find((n) => host.includes(n));

        if (network) {
          trackEvent("social_click", { network, page_path: pathname });
        }
      }
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  // FAQ opens. The accordion is a native <details>, so listening for `toggle`
  // in the capture phase keeps that a server component. Which questions get
  // opened is a direct read on what people need answered before they buy.
  useEffect(() => {
    function onToggle(event: Event) {
      const el = event.target as HTMLDetailsElement | null;
      if (!el || el.tagName !== "DETAILS" || !el.open) return;

      const question = el.querySelector("summary")?.textContent?.trim();
      if (!question) return;

      trackEvent("faq_open", {
        // Truncated: GA4 drops parameter values over 100 characters.
        question: question.slice(0, 100),
        page_path: pathname,
      });
    }

    // `toggle` does not bubble, so capture is required for delegation.
    document.addEventListener("toggle", onToggle, true);
    return () => document.removeEventListener("toggle", onToggle, true);
  }, [pathname]);

  return null;
}
