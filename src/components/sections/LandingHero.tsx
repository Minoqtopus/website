"use client";

import { ScrollReveal, BackgroundDecorations } from "@/components/ui";
import { LandingCTA } from "./LandingCTA";
import { homeCopy } from "@/lib/content";
import Image from "next/image";

import { HeroProps } from "@/types";

export function LandingHero({ className = "" }: HeroProps) {
  const { hero } = homeCopy;
  return (
    <section
      className={`min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden sm:pt-32 pt-24 pb-8 sm:pb-12 ${className}`}
    >
      {/* Background decorative elements */}
      <BackgroundDecorations />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Heading */}
          <ScrollReveal delay={0.2}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 sm:mb-8 md:mb-10 tracking-tight text-gray-900 leading-[1.1] sm:leading-[0.9] font-display">
              {hero.title.part1}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-green-700 relative inline-block">
                {hero.title.highlight}
              </span>
              <br />
              {hero.title.part2}
            </h1>
          </ScrollReveal>

          {/* Subheading */}
          <ScrollReveal delay={0.3}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 sm:mb-10 md:mb-12 font-medium leading-relaxed font-text px-2 sm:px-0">
              {hero.subtitle}{" "}
              <span className="text-green-700 font-bold">
                {hero.subtitleHighlight}
              </span>
              {hero.subtitleEnd}
            </p>
          </ScrollReveal>
        </div>

        {/* CTA Section */}
        <ScrollReveal delay={0.4}>
          <LandingCTA />
        </ScrollReveal>

        {/* Trust indicators */}
        <ScrollReveal delay={0.5}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-500 text-sm sm:text-base font-medium font-text px-4 sm:px-0">
            {hero.trustIndicators.map((indicator) => (
              <div key={indicator.id} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div>
                {indicator.text}
              </div>
            ))}
          </div>
        </ScrollReveal>
      </main>
    </section>
  );
}
