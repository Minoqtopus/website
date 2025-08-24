"use client";

import { ScrollReveal } from "@/components/ui";
import { productsCopy } from "@/lib/content/pages/products";

export function ProductsCTA() {
  const { cta } = productsCopy;
  
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-gray-900 font-display">
              {cta.title.part1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-green-700">
                {cta.title.highlight}
              </span>
              {cta.title.part2}
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-12 font-medium leading-relaxed">
              {cta.subtitle}
              <span className="text-green-700 font-bold">{cta.subtitleHighlight}</span>
              {cta.subtitleEnd}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="#products"
                className="group relative text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
                aria-label={cta.primary.ariaLabel}
              >
                <span className="relative z-10">{cta.primary.text}</span>
              </a>
              
              <a
                href="/portfolio"
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
                aria-label={cta.secondary.ariaLabel}
              >
                <span>{cta.secondary.text}</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 text-sm font-medium">
              {cta.trustIndicators.map((indicator) => (
                <div key={indicator.id} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  {indicator.text}
                </div>
              ))}
            </div>

            {/* Social Proof */}
            <div className="mt-16 pt-12 border-t border-gray-200">
              <p className="text-gray-500 text-sm mb-6">Trusted by development agencies worldwide</p>
              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                {/* Placeholder for client logos */}
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-24 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-gray-400 text-xs font-medium">Logo {i}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}