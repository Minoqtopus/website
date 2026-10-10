import { NextResponse } from "next/server";
import { isAdminAuthenticated } from "@/lib/admin/auth";
import { getSupabaseAdmin } from "@/lib/supabase/server";

/**
 * Exports a submissions table as CSV.
 *
 * Reuses the admin session check, so an unauthenticated request cannot pull
 * the whole table through this route.
 */
export async function GET(request: Request) {
  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Not authorised." }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const type = searchParams.get("type");

  const table =
    type === "applications" ? "job_applications" : "contact_submissions";

  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  const rows = data || [];
  if (rows.length === 0) {
    return new NextResponse("No data\n", {
      headers: { "Content-Type": "text/csv; charset=utf-8" },
    });
  }

  const columns = Object.keys(rows[0]);

  const escape = (value: unknown) => {
    if (value === null || value === undefined) return "";
    const s = String(value);
    // Quote when the value contains a delimiter, quote or newline; double any
    // embedded quotes, per RFC 4180.
    return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
  };

  const csv = [
    columns.join(","),
    ...rows.map((row) =>
      columns.map((c) => escape((row as Record<string, unknown>)[c])).join(",")
    ),
  ].join("\r\n");

  const stamp = new Date().toISOString().slice(0, 10);

  return new NextResponse(`﻿${csv}\r\n`, {
    headers: {
      // The BOM keeps Excel from mangling non-ASCII characters.
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="minoqtopus-${table}-${stamp}.csv"`,
      "Cache-Control": "no-store",
    },
  });
}
