import type { ReactNode } from "react";
import Logo from "@/components/ui/Logo";
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
    <div className="min-h-screen bg-stone-50">
      {/* Brand-deep matches the public footer, so the admin reads as the same
          product rather than a separate tool. */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-brand-deep/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6 min-w-0">
            <Logo
              variant="light"
              size="sm"
              href="/admin"
              suffix={
                <span className="hidden sm:inline rounded-full border border-white/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/85">
                  Admin
                </span>
              }
            />
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
