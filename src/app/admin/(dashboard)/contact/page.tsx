import Link from "next/link";
import AdminShell from "@/components/admin/AdminShell";
import StatusBadge from "@/components/admin/StatusBadge";
import StatusToggle from "@/components/admin/StatusToggle";
import TableToolbar from "@/components/admin/TableToolbar";
import Pagination from "@/components/admin/Pagination";
import { listSubmissions, PAGE_SIZE, type ListParams } from "@/lib/admin/query";
import { formatShort, formatRelative } from "@/lib/admin/format";
import type { ContactSubmission } from "@/lib/supabase/server";

export const metadata = {
  title: "Contact submissions | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminContactListPage({
  searchParams,
}: {
  searchParams: Promise<ListParams>;
}) {
  const params = await searchParams;

  const { rows, total, page, pageCount, counts } =
    await listSubmissions<ContactSubmission>(
      "contact_submissions",
      ["first_name", "last_name", "email", "company", "message"],
      params
    );

  const searching = Boolean(params.q || params.status);

  return (
    <AdminShell
      title="Contact submissions"
      description="Project enquiries from the website contact form."
    >
      <TableToolbar
        counts={counts}
        exportHref="/api/admin/export?type=contact"
        placeholder="Search name, email, company or message…"
      />

      <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-stone-600 uppercase tracking-wider text-xs">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Enquiry</th>
              <th className="px-4 py-3 font-semibold whitespace-nowrap">Budget</th>
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
                      ? "No submissions match these filters."
                      : "No contact submissions yet."}
                  </p>
                  {searching ? (
                    <Link
                      href="/admin/contact"
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
                      href={`/admin/contact/${row.id}`}
                      className="font-medium text-stone-950 hover:text-gold-700"
                    >
                      {row.first_name} {row.last_name}
                    </Link>
                    <span className="block text-xs text-stone-600 mt-0.5">
                      {row.company || "No company given"}
                    </span>
                  </td>
                  <td className="px-4 py-3 max-w-sm">
                    <a
                      href={`mailto:${row.email}`}
                      className="text-stone-700 hover:text-gold-700"
                    >
                      {row.email}
                    </a>
                    {/* A preview makes most rows triageable without opening them. */}
                    <span className="block text-xs text-stone-600 mt-1 line-clamp-2">
                      {row.message}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-stone-700 whitespace-nowrap">
                    {row.budget || "—"}
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
                        type="contact"
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
