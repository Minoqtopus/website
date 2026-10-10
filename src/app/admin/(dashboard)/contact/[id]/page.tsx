import Link from "next/link";
import { notFound } from "next/navigation";
import AdminShell from "@/components/admin/AdminShell";
import { formatFull } from "@/lib/admin/format";
import StatusToggle from "@/components/admin/StatusToggle";
import StatusBadge from "@/components/admin/StatusBadge";
import {
  ContactSubmission,
  getSupabaseAdmin,
} from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { id } = await params;
  return {
    title: `Contact ${id} | Admin`,
    robots: { index: false, follow: false },
  };
}

export default async function AdminContactDetailPage({ params }: Props) {
  const { id } = await params;
  const supabase = getSupabaseAdmin();
  const { data, error } = await supabase
    .from("contact_submissions")
    .select("*")
    .eq("id", id)
    .maybeSingle();

  if (error || !data) {
    notFound();
  }

  const row = data as ContactSubmission;

  return (
    <AdminShell title="Contact submission">
      <div className="mb-6">
        <Link href="/admin/contact" className="text-sm text-stone-600 hover:text-stone-950">
          Back to list
        </Link>
      </div>

      <div className="rounded-2xl border border-stone-200 bg-white p-6 md:p-8 space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="font-display text-2xl font-bold text-stone-950">
              {row.first_name} {row.last_name}
            </h2>
            <p className="text-stone-600 text-sm mt-1">
              {formatFull(row.created_at)}
            </p>
          </div>
          <StatusToggle type="contact" id={row.id} status={row.status} />
        </div>

        <dl className="grid sm:grid-cols-2 gap-4 text-sm">
          <div>
            <dt className="text-stone-600 uppercase tracking-wider text-xs mb-1">Email</dt>
            <dd>
              <a href={`mailto:${row.email}`} className="text-gold-700 hover:text-gold-800">
                {row.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="text-stone-600 uppercase tracking-wider text-xs mb-1">Company</dt>
            <dd className="text-stone-800">{row.company || "-"}</dd>
          </div>
          <div>
            <dt className="text-stone-600 uppercase tracking-wider text-xs mb-1">Budget</dt>
            <dd className="text-stone-800">{row.budget || "-"}</dd>
          </div>
          <div>
            <dt className="text-stone-600 uppercase tracking-wider text-xs mb-1">Status</dt>
            <dd><StatusBadge status={row.status} /></dd>
          </div>
        </dl>

        <div>
          <h3 className="text-stone-600 uppercase tracking-wider text-xs mb-2">Message</h3>
          <p className="text-stone-800 whitespace-pre-wrap leading-relaxed">{row.message}</p>
        </div>
      </div>
    </AdminShell>
  );
}
