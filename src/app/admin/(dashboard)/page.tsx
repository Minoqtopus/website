import Link from "next/link";
import { ArrowUpRight, Briefcase, Mail } from "lucide-react";
import AdminShell from "@/components/admin/AdminShell";
import StatusBadge from "@/components/admin/StatusBadge";
import {
  ContactSubmission,
  getSupabaseAdmin,
  JobApplication,
} from "@/lib/supabase/server";

export const metadata = {
  title: "Admin | Minoqtopus",
  robots: { index: false, follow: false },
};

export const dynamic = "force-dynamic";

function formatWhen(value: string) {
  return new Date(value).toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

export default async function AdminHomePage() {
  const supabase = getSupabaseAdmin();

  const [
    { count: contactCount },
    { count: contactNew },
    { count: appCount },
    { count: appNew },
    { data: recentContacts },
    { data: recentApps },
  ] = await Promise.all([
    supabase.from("contact_submissions").select("*", { count: "exact", head: true }),
    supabase
      .from("contact_submissions")
      .select("*", { count: "exact", head: true })
      .eq("status", "new"),
    supabase.from("job_applications").select("*", { count: "exact", head: true }),
    supabase
      .from("job_applications")
      .select("*", { count: "exact", head: true })
      .eq("status", "new"),
    supabase
      .from("contact_submissions")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(4),
    supabase
      .from("job_applications")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(4),
  ]);

  const contacts = (recentContacts || []) as ContactSubmission[];
  const applications = (recentApps || []) as JobApplication[];
  const totalNew = (contactNew ?? 0) + (appNew ?? 0);

  const cards = [
    {
      href: "/admin/contact",
      title: "Contact submissions",
      label: "Inquiries",
      total: contactCount ?? 0,
      newest: contactNew ?? 0,
      icon: Mail,
      hint: "Project inquiries from the contact form",
    },
    {
      href: "/admin/applications",
      title: "Job applications",
      label: "Hiring",
      total: appCount ?? 0,
      newest: appNew ?? 0,
      icon: Briefcase,
      hint: "Applications for open roles, with resumes",
    },
  ];

  return (
    <AdminShell
      title="Dashboard"
      description="Review new contact inquiries and job applications in one place."
    >
      <div className="mb-8 rounded-2xl border border-stone-200 bg-brand-deep text-white p-6 md:p-8 overflow-hidden relative">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -top-16 -right-10 w-56 h-56 rounded-full bg-gold-600/15 blur-3xl" />
        <div className="relative flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-500 mb-2">
              Inbox summary
            </p>
            <p className="font-display text-4xl font-bold tracking-tight">
              {totalNew} new item{totalNew === 1 ? "" : "s"}
            </p>
            <p className="text-white/85 mt-2 max-w-md leading-relaxed">
              {(contactCount ?? 0) + (appCount ?? 0)} total submissions across contact and careers.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link
              href="/admin/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gold-600 px-4 py-2 text-sm font-semibold text-white hover:bg-gold-700 transition-colors"
            >
              Review contact
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              href="/admin/applications"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Review applications
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {cards.map((card) => (
          <Link
            key={card.href}
            href={card.href}
            className="group block rounded-2xl bg-white border border-stone-200 p-6 hover:border-gold-600/40 hover:shadow-lg hover:shadow-gold-600/5 transition-all"
          >
            <div className="flex items-start justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-11 h-11 rounded-xl bg-gold-50 text-gold-700 inline-flex items-center justify-center group-hover:bg-gold-600 group-hover:text-white transition-colors">
                  <card.icon className="w-4 h-4" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-400">
                    {card.label}
                  </p>
                  <h2 className="font-display text-lg font-bold text-stone-950">
                    {card.title}
                  </h2>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-stone-300 group-hover:text-gold-600 transition-colors" />
            </div>

            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="font-display text-4xl font-bold text-stone-950 tracking-tight">
                  {card.total}
                </p>
                <p className="text-sm text-stone-600 mt-1">{card.hint}</p>
              </div>
              <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${card.newest > 0 ? "bg-gold-50 text-gold-800 ring-1 ring-gold-600/20" : "bg-stone-100 text-stone-600 ring-1 ring-stone-200"}`}>
                {card.newest} new
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-4">
        <section className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-stone-100">
            <h3 className="font-display text-lg font-bold text-stone-950">
              Recent contact
            </h3>
            <Link
              href="/admin/contact"
              className="text-sm font-semibold text-gold-700 hover:text-gold-800"
            >
              View all
            </Link>
          </div>
          {contacts.length === 0 ? (
            <p className="px-5 py-8 text-sm text-stone-600">No contact submissions yet.</p>
          ) : (
            <ul className="divide-y divide-stone-100">
              {contacts.map((row) => (
                <li key={row.id}>
                  <Link
                    href={`/admin/contact/${row.id}`}
                    className="flex items-start justify-between gap-4 px-5 py-4 hover:bg-stone-50 transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-stone-950 truncate">
                        {row.first_name} {row.last_name}
                      </p>
                      <p className="text-sm text-stone-600 truncate">{row.email}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <StatusBadge status={row.status} />
                      <p className="text-xs text-stone-600 mt-1">
                        {formatWhen(row.created_at)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="rounded-2xl border border-stone-200 bg-white overflow-hidden">
          <div className="flex items-center justify-between gap-3 px-5 py-4 border-b border-stone-100">
            <h3 className="font-display text-lg font-bold text-stone-950">
              Recent applications
            </h3>
            <Link
              href="/admin/applications"
              className="text-sm font-semibold text-gold-700 hover:text-gold-800"
            >
              View all
            </Link>
          </div>
          {applications.length === 0 ? (
            <p className="px-5 py-8 text-sm text-stone-600">No job applications yet.</p>
          ) : (
            <ul className="divide-y divide-stone-100">
              {applications.map((row) => (
                <li key={row.id}>
                  <Link
                    href={`/admin/applications/${row.id}`}
                    className="flex items-start justify-between gap-4 px-5 py-4 hover:bg-stone-50 transition-colors"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-stone-950 truncate">{row.full_name}</p>
                      <p className="text-sm text-stone-600 truncate">{row.job_title}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <StatusBadge status={row.status} />
                      <p className="text-xs text-stone-600 mt-1">
                        {formatWhen(row.created_at)}
                      </p>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </AdminShell>
  );
}
