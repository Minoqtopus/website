"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Jobs", href: "/jobs" },
  { name: "Contact", href: "/contact" },
];

function isNavActive(pathname: string, href: string) {
  if (href === "/projects") {
    return pathname === "/projects" || pathname.startsWith("/projects/");
  }
  if (href === "/jobs") {
    return pathname === "/jobs" || pathname.startsWith("/jobs/");
  }
  return pathname === href;
}

function getNavSurface(scrolled: boolean) {
  return scrolled ? "glass-light" : "bg-transparent";
}

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isAdminRoute = pathname.startsWith("/admin");

  useEffect(() => {
    if (isAdminRoute) return;
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isAdminRoute]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  if (isAdminRoute) {
    return null;
  }

  // Every public page opens on a light hero, so the nav is always light.
  const navSurface = getNavSurface(scrolled);

  function linkClass(active: boolean) {
    // The active item reads as brand, not as a grey patch: a tinted emerald
    // wash with emerald text, which sits with the hero's green rather than
    // fighting it.
    return active
      ? "text-white bg-gold-600 shadow-sm shadow-gold-600/25"
      : "text-stone-600 hover:text-gold-700 hover:bg-gold-50";
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6">
      <nav
        className={`mx-auto max-w-7xl rounded-2xl transition-all duration-300 ${navSurface}`}
      >
        <div className="flex items-center justify-between px-5 py-4 md:px-6">
          <Logo />

          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 cursor-pointer ${linkClass(
                  isNavActive(pathname, item.href)
                )}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/contact" size="sm">
              Start a Project
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2.5 rounded-xl transition-colors cursor-pointer text-stone-700 hover:bg-stone-100"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div
            className="px-5 pb-2 space-y-1 pt-3 border-t border-stone-200/60"
          >
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors cursor-pointer ${linkClass(
                  isNavActive(pathname, item.href)
                )}`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2">
              <Button href="/contact" className="w-full">
                Start a Project
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
