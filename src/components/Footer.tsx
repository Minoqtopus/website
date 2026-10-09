"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import UpworkIcon from "@/components/icons/UpworkIcon";
import { socialLinks } from "@/lib/social";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/85 hover:text-white hover:border-gold-400/60 transition-colors duration-200 cursor-pointer"
    >
      {children}
    </a>
  );
}

function LinkedInIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

const socialIcons = {
  Upwork: UpworkIcon,
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon,
} as const;

const footerLinks = {
  services: [
    { name: "Web Development", href: "/services" },
    { name: "Mobile Applications", href: "/services" },
    { name: "Cloud & DevOps", href: "/services" },
    { name: "AI Solutions", href: "/services" },
    { name: "Custom AI Agents", href: "/services" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Careers", href: "/jobs" },
    { name: "Contact", href: "/contact" },
    { name: "Services", href: "/services" },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  if (pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <footer className="bg-brand-deep text-white">
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 text-white/85 leading-relaxed max-w-sm">
              We engineer digital products that define industries. From
              strategy to scale, Minoqtopus delivers world-class software
              solutions.
            </p>

            <div className="flex gap-3 mt-8">
              {socialLinks.map((link) => {
                const Icon = socialIcons[link.name];
                return (
                  <SocialIcon key={link.name} href={link.href} label={link.label}>
                    <Icon />
                  </SocialIcon>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/85 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/85 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">
              Get in Touch
            </h4>
            <a
              href="mailto:minoqtopus.agency@gmail.com"
              className="text-white/85 hover:text-gold-400 transition-colors duration-200 text-sm block mb-2"
            >
              minoqtopus.agency@gmail.com
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 text-gold-400 hover:text-white transition-colors duration-200 text-sm font-medium mt-4 cursor-pointer"
            >
              Start a project
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <address className="mt-8 not-italic text-sm text-white/85 leading-relaxed">
              <span className="block font-medium text-white">
                Minoqtopus LLC
              </span>
              30 N Gould St, Ste R
              <br />
              Sheridan, WY 82801
              <br />
              United States
            </address>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <p className="text-white/80 text-sm text-center">
            &copy; {new Date().getFullYear()} Minoqtopus LLC. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
