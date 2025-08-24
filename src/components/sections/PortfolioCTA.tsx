"use client";

import { ScrollReveal } from "@/components/ui";
import { APP_CONFIG } from "@/config";
import { portfolioCopy } from "@/lib/content/pages/portfolio";

export function PortfolioCTA() {
  const { cta } = portfolioCopy;
  
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-100">
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
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
              {cta.subtitle}
              <span className="text-green-700 font-bold">{cta.subtitleHighlight}</span>
              {cta.subtitleEnd}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              <a
                href={APP_CONFIG.upworkUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
                aria-label={cta.primary.ariaLabel}
              >
                <span className="relative z-10">{cta.primary.text}</span>
              </a>
              
              <a
                href="/contact"
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
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}