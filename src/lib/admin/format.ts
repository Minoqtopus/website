/**
 * Date formatting for the admin screens.
 *
 * `toLocaleString()` with no options renders differently per machine and is
 * hard to scan in a column; these are fixed, sortable-looking formats.
 */

const SHORT = new Intl.DateTimeFormat("en-GB", {
  day: "2-digit",
  month: "short",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

const FULL = new Intl.DateTimeFormat("en-GB", {
  weekday: "short",
  day: "2-digit",
  month: "short",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
});

/** "09 Oct, 14:32" — for table cells. */
export function formatShort(iso: string) {
  return SHORT.format(new Date(iso));
}

/** "Thu, 09 Oct 2026, 14:32" — for detail pages. */
export function formatFull(iso: string) {
  return FULL.format(new Date(iso));
}

/** "2 hours ago" — gives a sense of urgency a timestamp alone does not. */
export function formatRelative(iso: string) {
  const then = new Date(iso).getTime();
  const seconds = Math.round((Date.now() - then) / 1000);

  if (seconds < 60) return "just now";

  const units: [Intl.RelativeTimeFormatUnit, number][] = [
    ["minute", 60],
    ["hour", 3600],
    ["day", 86400],
    ["week", 604800],
    ["month", 2629800],
    ["year", 31557600],
  ];

  let unit: Intl.RelativeTimeFormatUnit = "minute";
  let divisor = 60;
  for (const [u, d] of units) {
    if (seconds < d * 1.5 && u !== "year") break;
    unit = u;
    divisor = d;
  }

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });
  return rtf.format(-Math.round(seconds / divisor), unit);
}
