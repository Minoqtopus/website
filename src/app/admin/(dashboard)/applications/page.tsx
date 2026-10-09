import Link from "next/link";
import AdminShell from "@/components/admin/AdminShell";
import {
  getSupabaseAdmin,
  JobApplication,
} from "@/lib/supabase/server";

export const metadata = {
  title: "Job applications | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminApplicationsListPage() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("job_applications")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  const rows = (data || []) as JobApplication[];

  return (
    <AdminShell title="Job applications">
      <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-stone-500 uppercase tracking-wider text-xs">
            <tr>
              <th className="px-4 py-3 font-semibold">Applicant</th>
              <th className="px-4 py-3 font-semibold">Role</th>
              <th className="px-4 py-3 font-semibold">Interest</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Received</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-stone-500 text-center">
                  No job applications yet.
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id} className="border-t border-stone-100 hover:bg-stone-50">
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/applications/${row.id}`}
                      className="font-medium text-stone-950 hover:text-gold-700"
                    >
                      {row.full_name}
                    </Link>
                    <div className="text-stone-500 text-xs mt-0.5">{row.email}</div>
                  </td>
                  <td className="px-4 py-3 text-stone-600">{row.job_title}</td>
                  <td className="px-4 py-3 text-stone-600">{row.employment_interest}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`inline-flex px-2 py-0.5 rounded-full text-xs font-semibold ${
                        row.status === "new"
                          ? "bg-gold-50 text-gold-700"
                          : "bg-stone-100 text-stone-600"
                      }`}
                    >
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-stone-500">
                    {new Date(row.created_at).toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
