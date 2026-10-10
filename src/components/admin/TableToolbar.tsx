"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { Search, X, Download } from "lucide-react";

type StatusFilter = "all" | "new" | "reviewed";

interface TableToolbarProps {
  /** Counts shown on the filter tabs. */
  counts: { all: number; new: number; reviewed: number };
  /** Where the CSV export lives, e.g. "/api/admin/export?type=contact". */
  exportHref: string;
  placeholder: string;
}

/**
 * Search and status filtering for the admin lists.
 *
 * State lives in the URL rather than component state, so a filtered view can
 * be bookmarked, shared, and survives the refresh that follows a status change.
 */
export default function TableToolbar({
  counts,
  exportHref,
  placeholder,
}: TableToolbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const status = (params.get("status") as StatusFilter) || "all";
  const [query, setQuery] = useState(params.get("q") || "");

  // Keep the input in step when the URL changes from elsewhere (back button,
  // a filter tab), without fighting the user mid-keystroke.
  useEffect(() => {
    setQuery(params.get("q") || "");
  }, [params]);

  function push(next: Record<string, string | null>) {
    const sp = new URLSearchParams(params.toString());
    for (const [k, v] of Object.entries(next)) {
      if (v === null || v === "") sp.delete(k);
      else sp.set(k, v);
    }
    sp.delete("page");
    startTransition(() => {
      router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
    });
  }

  // Debounce so a search does not fire a navigation per character.
  useEffect(() => {
    const current = params.get("q") || "";
    if (query === current) return;
    const t = setTimeout(() => push({ q: query || null }), 250);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const tabs: { key: StatusFilter; label: string; count: number }[] = [
    { key: "all", label: "All", count: counts.all },
    { key: "new", label: "New", count: counts.new },
    { key: "reviewed", label: "Reviewed", count: counts.reviewed },
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 mb-5">
      <div
        className="inline-flex rounded-xl bg-stone-100 p-1"
        role="tablist"
        aria-label="Filter by status"
      >
        {tabs.map((tab) => {
          const active = status === tab.key;
          return (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => push({ status: tab.key === "all" ? null : tab.key })}
              className={`inline-flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm font-medium transition-colors cursor-pointer ${
                active
                  ? "bg-white text-stone-950 shadow-sm"
                  : "text-stone-600 hover:text-stone-950"
              }`}
            >
              {tab.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-xs tabular-nums ${
                  active ? "bg-stone-100 text-stone-600" : "text-stone-500"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      <div className="relative flex-1 min-w-[220px]">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-stone-400"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder}
          aria-label={placeholder}
          className="w-full rounded-xl border border-stone-200 bg-white py-2 pl-9 pr-9 text-sm text-stone-950 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-gold-600/30 focus:border-gold-600"
        />
        {query ? (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Clear search"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1 text-stone-400 hover:text-stone-950 cursor-pointer"
          >
            <X className="h-4 w-4" />
          </button>
        ) : null}
      </div>

      <a
        href={exportHref}
        className="inline-flex items-center gap-2 rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm font-medium text-stone-700 hover:text-stone-950 hover:border-stone-300 transition-colors"
      >
        <Download className="h-4 w-4" aria-hidden="true" />
        Export CSV
      </a>

      <span
        aria-live="polite"
        className={`text-xs text-stone-500 transition-opacity ${
          isPending ? "opacity-100" : "opacity-0"
        }`}
      >
        Updating…
      </span>
    </div>
  );
}
