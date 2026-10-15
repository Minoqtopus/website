"use client";

import { useEffect } from "react";
import { trackOnce, type AnalyticsEvent } from "@/lib/analytics";

interface ViewTrackerProps {
  event: Extract<AnalyticsEvent, "project_view" | "service_view" | "job_view">;
  /** Identifies which item was viewed, e.g. a case-study slug. */
  itemId: string;
  itemName?: string;
}

/**
 * Reports that a specific item was viewed.
 *
 * Page views already arrive from the GA4 tag; this adds *which* project or
 * job was being read, which is what turns pageview counts into a ranking of
 * what prospects actually care about. Kept as its own client component so
 * the detail pages stay server-rendered.
 *
 * Renders nothing.
 */
export default function ViewTracker({
  event,
  itemId,
  itemName,
}: ViewTrackerProps) {
  useEffect(() => {
    trackOnce(
      event,
      { item_id: itemId, item_name: itemName },
      `${event}:${itemId}`
    );
  }, [event, itemId, itemName]);

  return null;
}
