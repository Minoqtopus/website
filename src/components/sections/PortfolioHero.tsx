"use client";

import { ScrollReveal } from "@/components/ui";
import { portfolioCopy } from "@/lib/content/pages/portfolio";

export function PortfolioHero() {
  const { hero } = portfolioCopy;
  
  return (
    <section className="min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden pt-20 pb-16">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          <ScrollReveal delay={0.1}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight text-gray-900 leading-[1.1] font-display">
              {hero.title.part1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-green-700">
                {hero.title.highlight}
              </span>
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