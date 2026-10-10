import Link from "next/link";
import type { ReactNode } from "react";
import AdminLogoutButton from "@/components/admin/AdminLogoutButton";
import AdminNav from "@/components/admin/AdminNav";

export default function AdminShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-stone-100">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-stone-950/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-8 min-w-0">
            <Link
              href="/admin"
              className="font-display font-bold tracking-tight shrink-0 text-white"
            >
              Mino<span className="text-gold-400">qtopus</span>
              <span className="ml-2 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
                Admin
              </span>
            </Link>
<AdminNav />
          </div>
          <AdminLogoutButton />
        </div>
      </header>
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-stone-950 tracking-tight">
            {title}
          </h1>
          {description ? (
            <p className="mt-2 text-stone-600 max-w-2xl leading-relaxed">
              {description}
            </p>
          ) : null}
        </div>
        {children}
      </main>
    </div>
  );
}
