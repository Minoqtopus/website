"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-lg border-b border-green-100/50 shadow-sm' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-green-600 hover:text-green-700 transition-all duration-300 tracking-tight">
            Minoqtopus
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-green-50/80 hover:backdrop-blur-sm ${
                  pathname === item.href
                    ? "text-green-600 bg-green-50/60 backdrop-blur-sm"
                    : "text-gray-600 hover:text-green-600"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4">
              <Link
                href="/contact"
                className="bg-gradient-brand-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-gradient-primary-dark transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Start Project
              </Link>
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded-full hover:bg-green-50/80 transition-all duration-300 text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMobileMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-green-100/50 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-green-50/80 hover:backdrop-blur-sm px-4 mb-2 ${
                    pathname === item.href
                      ? "text-green-600 bg-green-50/60 backdrop-blur-sm"
                      : "text-gray-600 hover:text-green-600"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-green-100/50">
                <Link
                  href="/contact"
                  className="block bg-gradient-brand-primary text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gradient-primary-dark transition-all duration-300 shadow-lg text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Start Project
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}