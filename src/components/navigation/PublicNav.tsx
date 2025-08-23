"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

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
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg' 
        : 'bg-white/80 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          <Link href="/" className="flex items-center hover:opacity-80 transition-all duration-300 group">
            <Image
              src="/images/brand/logo.png"
              alt="Minoqtopus"
              width={40}
              height={40}
              className="w-auto h-8 lg:h-10 object-contain group-hover:scale-105 transition-transform duration-300"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-100/80 font-text ${
                  pathname === item.href
                    ? "text-transparent bg-green-50/80"
                    : "text-gray-700 hover:text-transparent hover:bg-gray-50/60"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-4">
              <Link
                href="/contact"
                className="bg-green-700 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-green-800 transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 font-display"
              >
                Start Project
              </Link>
            </div>
          </div>

          <button
            className="md:hidden p-2 rounded-full hover:bg-gray-100/80 transition-all duration-300 text-gray-600"
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
          <div className="md:hidden absolute top-16 lg:top-20 left-0 right-0 bg-white/95 backdrop-blur-lg border-t border-gray-200/50 shadow-lg">
            <div className="container mx-auto px-4 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block py-3 text-sm font-medium rounded-lg transition-all duration-300 hover:bg-gray-50/80 px-4 mb-2 font-text ${
                    pathname === item.href
                      ? "text-transparent bg-green-50/80"
                      : "text-gray-700 hover:text-transparent hover:bg-gray-50/60"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200/50">
                <Link
                  href="/contact"
                  className="block bg-green-700 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-green-800 transition-all duration-300 shadow-md text-center font-display"
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