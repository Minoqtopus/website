"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  page: number;
  pageCount: number;
  total: number;
  pageSize: number;
}

export default function Pagination({
  page,
  pageCount,
  total,
  pageSize,
}: PaginationProps) {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();

  if (total === 0) return null;

  function go(next: number) {
    const sp = new URLSearchParams(params.toString());
    if (next <= 1) sp.delete("page");
    else sp.set("page", String(next));
    router.replace(`${pathname}?${sp.toString()}`, { scroll: false });
  }

  const first = (page - 1) * pageSize + 1;
  const last = Math.min(page * pageSize, total);

  return (
    <div className="flex items-center justify-between gap-4 mt-4 text-sm">
      <p className="text-stone-600 tabular-nums">
        Showing <span className="font-medium text-stone-950">{first}</span>–
        <span className="font-medium text-stone-950">{last}</span> of{" "}
        <span className="font-medium text-stone-950">{total}</span>
      </p>

      {pageCount > 1 ? (
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => go(page - 1)}
            disabled={page <= 1}
            className="inline-flex items-center gap-1 rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-stone-700 hover:border-stone-300 hover:text-stone-950 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" />
            Previous
          </button>
          <span className="text-stone-600 tabular-nums px-1">
            {page} / {pageCount}
          </span>
          <button
            type="button"
            onClick={() => go(page + 1)}
            disabled={page >= pageCount}
            className="inline-flex items-center gap-1 rounded-lg border border-stone-200 bg-white px-2.5 py-1.5 text-stone-700 hover:border-stone-300 hover:text-stone-950 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
          >
            Next
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      ) : null}
    </div>
  );
}
