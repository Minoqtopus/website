"use client";

import { homeCopy } from "@/lib/copy/pages/home";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  const [currentWeek, setCurrentWeek] = useState(1);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWeek((prev) => (prev === 4 ? 1 : prev + 1));
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const weeks = [
    { number: 1, title: "Discovery", description: "Requirements & Planning", icon: "🔍" },
    { number: 2, title: "Design", description: "UI/UX & Prototyping", icon: "🎨" },
    { number: 3, title: "Development", description: "Build & Integration", icon: "💻" },
    { number: 4, title: "Launch", description: "Deploy & Deliver", icon: "🚀" },
  ];

  return (
    <div className="min-h-screen bg-gradient-mesh-subtle relative overflow-hidden">
      {/* Floating geometric elements - lighter and more subtle */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-100/40 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-green-50/60 rounded-lg rotate-12 animate-bounce-slow"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-green-200/30 rounded-full animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-green-100/50 rounded-lg -rotate-12 animate-bounce-slow" style={{animationDelay: '0.5s'}}></div>
      </div>

      <main className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main heading with refined typography */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-600 bg-clip-text text-transparent animate-pulse-glow">
                {homeCopy.hero.title}
              </span>
            </h1>
            <div className="flex items-center justify-center gap-4 text-2xl md:text-4xl font-bold text-gray-600 mb-6">
              <span>MVP in</span>
              <div className="relative">
                <span className="bg-gradient-brand-primary text-white px-4 py-2 rounded-full animate-pulse-glow">
                  {currentWeek}
                </span>
                <span className="absolute -top-1 -right-1 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                  Week{currentWeek !== 1 ? 's' : ''}
                </span>
              </div>
            </div>
          </div>

          {/* Timeline visualization */}
          <ScrollReveal className="mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {weeks.map((week) => (
                <ScrollReveal
                  key={week.number}
                  delay={week.number * 200}
                  className={`relative group transition-all duration-500 ${
                    currentWeek === week.number ? 'scale-110' : 'scale-100'
                  }`}
                >
                  <div className={`bg-white/80 backdrop-blur-lg border rounded-2xl p-6 text-center transition-all duration-500 hover:bg-white/90 ${
                    currentWeek === week.number 
                      ? 'border-green-300 shadow-lg bg-green-50/60' 
                      : 'border-green-100/60'
                  }`}>
                    <div className="text-3xl mb-3 animate-bounce-slow" style={{animationDelay: `${week.number * 0.2}s`}}>
                      {week.icon}
                    </div>
                    <h3 className="font-bold text-gray-700 mb-2">{week.title}</h3>
                    <p className="text-sm text-gray-500">{week.description}</p>
                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center transition-all duration-300 ${
                      currentWeek === week.number
                        ? 'bg-green-500 text-white scale-110'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {week.number}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal delay={800}>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 leading-relaxed">
              {homeCopy.hero.description}
            </p>
          </ScrollReveal>

          {/* Enhanced CTAs */}
          <ScrollReveal delay={1000} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href={homeCopy.hero.cta.primary.href}
              className="group bg-gradient-brand-primary text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-gradient-primary-dark transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 relative overflow-hidden"
            >
              <span className="relative z-10">{homeCopy.hero.cta.primary.text}</span>
              <div className="absolute inset-0 bg-gradient-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <a
              href={homeCopy.hero.cta.secondary.href}
              className="group border-2 border-green-500 text-green-600 px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-50 hover:border-green-600 transition-all duration-300 backdrop-blur-sm bg-white/50 hover:bg-white/80"
            >
              <span className="group-hover:scale-105 inline-block transition-transform duration-300">
                {homeCopy.hero.cta.secondary.text}
              </span>
            </a>
          </ScrollReveal>

          {/* Trust indicators */}
          <ScrollReveal delay={1200} className="mt-16 text-center">
            <p className="text-gray-500 text-sm mb-4">Trusted by startups and enterprises</p>
            <div className="flex justify-center items-center space-x-8 opacity-30">
              <div className="w-16 h-8 bg-gray-200 rounded"></div>
              <div className="w-16 h-8 bg-gray-200 rounded"></div>
              <div className="w-16 h-8 bg-gray-200 rounded"></div>
              <div className="w-16 h-8 bg-gray-200 rounded"></div>
            </div>
          </ScrollReveal>
        </div>
      </main>
    </div>
  );
}
