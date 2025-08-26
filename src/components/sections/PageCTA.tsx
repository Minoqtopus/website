"use client";

import { ScrollReveal } from "@/components/ui";

interface PageCTAProps {
  title: {
    part1: string;
    highlight: string;
    part2: string;
  };
  subtitle: string;
  subtitleHighlight: string;
  subtitleEnd: string;
  primary: {
    text: string;
    href?: string;
    ariaLabel: string;
  };
  secondary: {
    text: string;
    href?: string;
    ariaLabel: string;
  };
  trustIndicators: readonly {
    readonly id: string;
    readonly text: string;
  }[];
}

export function PageCTA({ 
  title, 
  subtitle, 
  subtitleHighlight, 
  subtitleEnd, 
  primary,
  secondary,
  trustIndicators 
}: PageCTAProps) {
  const handlePrimaryClick = (e: React.MouseEvent) => {
    if (primary.href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(primary.href);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const primaryHref = primary.href || '#';
  const secondaryHref = secondary.href || '#';

  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 text-gray-900 font-display">
              {title.part1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-green-700">
                {title.highlight}
              </span>
              {title.part2}
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
              {subtitle}
              <span className="text-green-700 font-bold">{subtitleHighlight}</span>
              {subtitleEnd}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8">
              <a
                href={primaryHref}
                onClick={handlePrimaryClick}
                target={primaryHref?.startsWith('http') ? "_blank" : undefined}
                rel={primaryHref?.startsWith('http') ? "noopener noreferrer" : undefined}
                className="group relative bg-green-700 hover:bg-green-800 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                aria-label={primary.ariaLabel}
              >
                <span className="relative z-10">{primary.text}</span>
              </a>
              
              <a
                href={secondaryHref}
                target={secondaryHref?.startsWith('http') ? "_blank" : undefined}
                rel={secondaryHref?.startsWith('http') ? "noopener noreferrer" : undefined}
                className="bg-white border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-8 py-4 rounded-xl text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-opacity-50 font-display inline-flex items-center gap-3 w-full sm:w-auto justify-center"
                aria-label={secondary.ariaLabel}
              >
                <span>{secondary.text}</span>
              </a>
            </div>

            {/* Trust indicators temporarily disabled for design review */}
            {false && (
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 text-sm font-medium">
                {trustIndicators.map((indicator) => (
                  <div key={indicator.id} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-600"></div>
                    {indicator.text}
                  </div>
                ))}
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}