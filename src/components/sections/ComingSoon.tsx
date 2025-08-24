"use client";

import { ScrollReveal } from "@/components/ui";
import { APP_CONFIG } from "@/config";

export function ComingSoon() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden pt-20 pb-16">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-gray-900 leading-[1.1] font-display">
              Amazing{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-green-700">
                Products
              </span>
              <br />
              Coming Soon
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
              We're crafting something special for you.{" "}
              <span className="text-green-700 font-bold">Premium digital solutions</span>{" "}
              that will transform how you work and live.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              <a
                href="/portfolio"
                className="group relative text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
              >
                <span className="relative z-10">View Our Work</span>
              </a>
              
              <a
                href={APP_CONFIG.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border-2 px-8 py-4 rounded-xl text-lg font-bold hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 font-display inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                style={{ 
                  color: 'var(--color-primary)',
                  borderColor: 'var(--color-primary)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = 'var(--color-primary)';
                }}
              >
                <span>Work With Us</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 text-sm sm:text-base font-medium">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                Premium Quality
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                Built with Care
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                Worth the Wait
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </section>
  );
}