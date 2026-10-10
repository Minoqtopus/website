"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Inbox, Users } from "lucide-react";

const links = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard, exact: true },
  { href: "/admin/contact", label: "Contact", icon: Inbox, exact: false },
  { href: "/admin/applications", label: "Applications", icon: Users, exact: false },
];

/**
 * Admin navigation with an active state.
 *
 * Previously there was no indication of the current section, and the nav was
 * hidden entirely below the `sm` breakpoint — leaving no way to move between
 * sections on a phone.
 */
export default function AdminNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center gap-1 text-sm" aria-label="Admin sections">
      {links.map(({ href, label, icon: Icon, exact }) => {
        const active = exact ? pathname === href : pathname.startsWith(href);
        return (
          <Link
            key={href}
            href={href}
            aria-current={active ? "page" : undefined}
            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 transition-colors ${
              active
                ? "bg-white/15 text-white font-medium"
                : "text-stone-300 hover:text-white hover:bg-white/10"
            }`}
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span className="hidden xs:inline sm:inline">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
