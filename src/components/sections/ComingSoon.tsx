"use client";

import { ScrollReveal } from "@/components/ui";
import { comingSoonCopy } from "@/lib/content/pages/coming-soon";

export function ComingSoon() {
  const { hero } = comingSoonCopy;
  
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden pt-20 pb-16">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-gray-900 leading-[1.1] font-display">
              {hero.title.part1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-green-700">
                {hero.title.highlight}
              </span>
              <br />
              {hero.title.part2}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
              {hero.subtitle}
              <span className="text-green-700 font-bold">{hero.subtitleHighlight}</span>
              {hero.subtitleEnd}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              <a
                href={hero.cta.primary.href}
                className="group relative text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                style={{ backgroundColor: 'var(--color-primary)' }}
                aria-label={hero.cta.primary.ariaLabel}
              >
                <span className="relative z-10">{hero.cta.primary.text}</span>
              </a>
              
              <a
                href={hero.cta.secondary.href}
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
                aria-label={hero.cta.secondary.ariaLabel}
              >
                <span>{hero.cta.secondary.text}</span>
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-500 text-sm sm:text-base font-medium">
              {hero.trustIndicators.map((indicator) => (
                <div key={indicator.id} className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  {indicator.text}
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </main>
    </section>
  );
}