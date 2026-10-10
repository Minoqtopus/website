import { getSupabaseAdmin } from "@/lib/supabase/server";

export const PAGE_SIZE = 25;

export interface ListParams {
  status?: string;
  q?: string;
  page?: string;
}

export interface ListResult<T> {
  rows: T[];
  total: number;
  page: number;
  pageCount: number;
  counts: { all: number; new: number; reviewed: number };
}

/**
 * Fetches one page of a submissions table.
 *
 * Filtering, searching and paging all happen in Postgres rather than in the
 * page component, so the browser never receives rows it will not display.
 */
export async function listSubmissions<T>(
  table: "contact_submissions" | "job_applications",
  searchColumns: string[],
  params: ListParams
): Promise<ListResult<T>> {
  const supabase = getSupabaseAdmin();

  const status = params.status === "new" || params.status === "reviewed"
    ? params.status
    : null;
  const q = (params.q || "").trim();
  const page = Math.max(1, Number(params.page) || 1);

  // Counts drive the filter tabs and are unaffected by the active status
  // filter, so they are fetched separately from the page of rows.
  const base = () => {
    let b = supabase.from(table).select("*", { count: "exact", head: true });
    if (q) b = b.or(searchColumns.map((c) => `${c}.ilike.%${q}%`).join(","));
    return b;
  };

  const [allRes, newRes, reviewedRes] = await Promise.all([
    base(),
    base().eq("status", "new"),
    base().eq("status", "reviewed"),
  ]);

  let query = supabase
    .from(table)
    .select("*", { count: "exact" })
    .order("created_at", { ascending: false });

  if (status) query = query.eq("status", status);
  if (q) query = query.or(searchColumns.map((c) => `${c}.ilike.%${q}%`).join(","));

  const from = (page - 1) * PAGE_SIZE;
  const { data, error, count } = await query.range(from, from + PAGE_SIZE - 1);

  if (error) throw new Error(error.message);

  const total = count ?? 0;

  return {
    rows: (data || []) as T[],
    total,
    page,
    pageCount: Math.max(1, Math.ceil(total / PAGE_SIZE)),
    counts: {
      all: allRes.count ?? 0,
      new: newRes.count ?? 0,
      reviewed: reviewedRes.count ?? 0,
    },
  };
}
