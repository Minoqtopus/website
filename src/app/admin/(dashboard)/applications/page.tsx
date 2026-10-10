import Link from "next/link";
import AdminShell from "@/components/admin/AdminShell";
import StatusBadge from "@/components/admin/StatusBadge";
import StatusToggle from "@/components/admin/StatusToggle";
import TableToolbar from "@/components/admin/TableToolbar";
import Pagination from "@/components/admin/Pagination";
import { listSubmissions, PAGE_SIZE, type ListParams } from "@/lib/admin/query";
import { formatShort, formatRelative } from "@/lib/admin/format";
import type { JobApplication } from "@/lib/supabase/server";

export const metadata = {
  title: "Job applications | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminApplicationsListPage({
  searchParams,
}: {
  searchParams: Promise<ListParams>;
}) {
  const params = await searchParams;

  const { rows, total, page, pageCount, counts } =
    await listSubmissions<JobApplication>(
      "job_applications",
      ["full_name", "email", "current_company", "job_title"],
      params
    );

  const searching = Boolean(params.q || params.status);

  return (
    <AdminShell
      title="Job applications"
      description="Candidates who applied through the careers pages."
    >
      <TableToolbar
        counts={counts}
        exportHref="/api/admin/export?type=applications"
        placeholder="Search name, email, company or role…"
      />

      <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-stone-600 uppercase tracking-wider text-xs">
            <tr>
              <th className="px-4 py-3 font-semibold">Applicant</th>
              <th className="px-4 py-3 font-semibold">Role</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Expected</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Received</th>
              <th className="px-4 py-3 font-semibold text-right">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center">
                  <p className="text-stone-600">
                    {searching
                      ? "No applications match these filters."
                      : "No job applications yet."}
                  </p>
                  {searching ? (
                    <Link
                      href="/admin/applications"
                      className="mt-2 inline-block text-sm text-gold-700 hover:text-gold-800"
                    >
                      Clear filters
                    </Link>
                  ) : null}
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr
                  key={row.id}
                  className="border-t border-stone-100 hover:bg-stone-50/80 align-top"
                >
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/applications/${row.id}`}
                      className="font-medium text-stone-950 hover:text-gold-700"
                    >
                      {row.full_name}
                    </Link>
                    <a
                      href={`mailto:${row.email}`}
                      className="block text-xs text-stone-600 mt-0.5 hover:text-gold-700"
                    >
                      {row.email}
                    </a>
                    <span className="block text-xs text-stone-600 mt-0.5">
                      {row.current_company}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <span className="text-stone-700">{row.job_title}</span>
                    <span className="block text-xs text-stone-600 capitalize mt-0.5">
                      {row.employment_interest}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-stone-700 whitespace-nowrap">
                    {row.expected_salary}
                  </td>
                  <td className="px-4 py-3">
                    <StatusBadge status={row.status} />
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="text-stone-700 tabular-nums">
                      {formatShort(row.created_at)}
                    </span>
                    <span className="block text-xs text-stone-600">
                      {formatRelative(row.created_at)}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end">
                      <StatusToggle
                        type="application"
                        id={row.id}
                        status={row.status}
                        variant="inline"
                      />
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <Pagination
        page={page}
        pageCount={pageCount}
        total={total}
        pageSize={PAGE_SIZE}
      />
    </AdminShell>
  );
}
