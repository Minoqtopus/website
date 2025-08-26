"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { APP_CONFIG } from "@/config";
import { navigationCopy } from "@/lib/content/components/navigation";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { main, cta, ariaLabels } = navigationCopy;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-black/5 shadow-lg shadow-black/5"
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3 items-center h-16 w-full">
          {/* Left: Logo */}
          <div className="flex justify-start h-16">
            <Link href="/" className="flex items-center group">
              <Image
                src="/images/brand/logo.png"
                alt={APP_CONFIG.name}
                width={180}
                height={80}
                className="h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Center: Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-4">
            {main.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group relative px-6 py-2 text-gray-800 font-semibold text-[16px] tracking-wide transition-all duration-300 rounded-lg hover:scale-105 before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r before:from-green-600 before:to-green-700 before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-300 before:-z-10 hover:shadow-lg hover:shadow-green-600/25"
              >
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Right: CTA Button & Mobile Menu */}
          <div className="flex items-center justify-end space-x-6">
            {/* Desktop CTA */}
            <a
              href={cta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-6 py-3 rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold text-[15px] tracking-wide transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-700/25"
            >
              {cta.label}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex justify-end p-3 rounded-full  transition-all duration-300 group"
            aria-label={ariaLabels.toggleMenu}
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 top-[11px]" : "top-1.5"
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-gray-800 top-[11px] transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0 scale-75" : "opacity-100"
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-gray-800 transform transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 top-[11px]" : "top-[1px]"
                }`}
              />
            </div>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="border border-black/10 bg-white/95 backdrop-blur-xl rounded-b-2xl mx-[-24px] mt-4">
            <div className="py-2 px-6 ">
              {main.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-2 text-gray-800 hover:text-green-700 hover:bg-green-50/80 rounded-xl font-medium text-[16px] transition-all duration-300 transform hover:translate-x-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile CTA */}
              <a
                href={cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-2 rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold text-[16px] transition-all duration-300 hover:scale-105"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {cta.label}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
