import Link from "next/link";
import AdminShell from "@/components/admin/AdminShell";
import {
  ContactSubmission,
  getSupabaseAdmin,
} from "@/lib/supabase/server";

export const metadata = {
  title: "Contact submissions | Admin",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

export default async function AdminContactListPage() {
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  const rows = (data || []) as ContactSubmission[];

  return (
    <AdminShell title="Contact submissions">
      <div className="overflow-x-auto rounded-2xl border border-stone-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="bg-stone-50 text-stone-500 uppercase tracking-wider text-xs">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Budget</th>
              <th className="px-4 py-3 font-semibold">Status</th>
              <th className="px-4 py-3 font-semibold">Received</th>
            </tr>
          </thead>
          <tbody>
            {rows.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-stone-500 text-center">
                  No contact submissions yet.
                </td>
              </tr>
            ) : (
              rows.map((row) => (
                <tr key={row.id} className="border-t border-stone-100 hover:bg-stone-50">
                  <td className="px-4 py-3">
                    <Link
                      href={`/admin/contact/${row.id}`}
                      className="font-medium text-stone-950 hover:text-gold-700"
                    >
                      {row.first_name} {row.last_name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-stone-600">{row.email}</td>
                  <td className="px-4 py-3 text-stone-600">{row.budget || "-"}</td>
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
