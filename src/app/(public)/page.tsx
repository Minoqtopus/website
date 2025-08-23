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
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 left-10 w-16 h-16 bg-green-50 rounded-full"></div>
        <div className="absolute bottom-40 right-20 w-12 h-12 bg-green-100 rounded-lg rotate-12"></div>
        <div className="absolute top-1/2 left-20 w-8 h-8 bg-green-50 rounded-full"></div>
      </div>

      <main className="container mx-auto px-4 pt-32 pb-16 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Crystal clear value proposition */}
          <div className="mb-16">
            {/* Main promise - what we do */}
            <div className="mb-8">
              <h1 className="text-2xl md:text-3xl text-gray-600 mb-4 font-medium">
                You have an idea.
              </h1>
              <h2 className="text-5xl md:text-7xl font-black mb-6 tracking-tight text-gray-900 leading-[0.9]">
                We build your<br />
                <span className="text-green-600">MVP</span> in 4 weeks.
              </h2>
            </div>

            {/* What we handle */}
            <div className="mb-8">
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                <span className="font-semibold text-gray-900">Research. Strategy. Design. Development.</span><br />
                Everything you need to validate your idea and get to market fast.
              </p>
            </div>

            {/* Live counter showing current week */}
            <div className="flex items-center justify-center gap-4 text-lg font-medium text-gray-600 mb-2">
              <span>Currently in week</span>
              <span className="bg-green-600 text-white px-4 py-2 rounded-full text-xl font-bold min-w-[3rem] text-center">
                {currentWeek}
              </span>
              <span>of our process</span>
            </div>
            <p className="text-sm text-gray-500">
              Watch our 4-week methodology in action
            </p>
          </div>

          {/* CTA Section */}
          <ScrollReveal className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={homeCopy.hero.cta.primary.href}
                className="bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {homeCopy.hero.cta.primary.text}
              </a>
              <a
                href={homeCopy.hero.cta.secondary.href}
                className="border-2 border-green-600 text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 hover:border-green-700 transition-all duration-300 bg-white"
              >
                {homeCopy.hero.cta.secondary.text}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </main>

      {/* How We Work - Streamlined Process */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          {/* Section Title */}
          <ScrollReveal className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our battle-tested process takes you from idea to launch in exactly 4 weeks.
            </p>
          </ScrollReveal>

          {/* Process Flow */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-green-200 via-green-300 to-green-200 z-0"></div>
              
              {weeks.map((week, index) => (
                <ScrollReveal key={week.number} delay={index * 150}>
                  <div className="relative z-10">
                    {/* Week Number Badge */}
                    <div className="flex justify-center mb-6">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold transition-all duration-500 ${
                        currentWeek === week.number
                          ? 'bg-green-600 text-white scale-110 shadow-lg'
                          : 'bg-white border-2 border-gray-200 text-gray-700'
                      }`}>
                        {week.number}
                      </div>
                    </div>

                    {/* Content Card */}
                    <div className={`bg-white rounded-xl p-6 text-center transition-all duration-300 ${
                      currentWeek === week.number 
                        ? 'shadow-xl border-2 border-green-200' 
                        : 'shadow-sm hover:shadow-md border border-gray-100'
                    }`}>
                      <div className="text-4xl mb-4">{week.icon}</div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3">{week.title}</h3>
                      <p className="text-gray-700 text-sm leading-relaxed">{week.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle - Core Services */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">What We Handle</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From your initial idea to a production-ready MVP. We cover every aspect so you can focus on your business.
            </p>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <ScrollReveal delay={200}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">🔍</div>
                    <h3 className="text-2xl font-bold text-gray-900">Research & Strategy</h3>
                  </div>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      Market validation and competitor analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      User personas and journey mapping
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      Feature prioritization and MVP scope
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-green-500">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">🎨</div>
                    <h3 className="text-2xl font-bold text-gray-900">Design & UX</h3>
                  </div>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      User interface and experience design
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      Interactive prototypes and wireframes
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      Brand identity and visual guidelines
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-green-600">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">💻</div>
                    <h3 className="text-2xl font-bold text-gray-900">Development</h3>
                  </div>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      Full-stack web and mobile development
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      Modern tech stack and best practices
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      Scalable architecture and clean code
                    </li>
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={800}>
                <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 border-l-4 border-green-600">
                  <div className="flex items-center mb-6">
                    <div className="text-4xl mr-4">🚀</div>
                    <h3 className="text-2xl font-bold text-gray-900">Launch & Support</h3>
                  </div>
                  <ul className="text-gray-700 space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      Production deployment and hosting
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      Performance optimization and testing
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">•</span>
                      Post-launch monitoring and fixes
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Ready to Start */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-12 shadow-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Build Your MVP?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join the startups that have launched successful MVPs with our proven 4-week process. 
                Let's turn your idea into reality.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                >
                  Start Your Project
                </a>
                <a
                  href="/portfolio"
                  className="text-green-600 px-10 py-4 rounded-full text-lg font-semibold hover:text-green-700 transition-all duration-300"
                >
                  View Our Work →
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ScrollReveal className="text-center">
            <p className="text-gray-500 text-sm mb-6">Trusted by startups and enterprises</p>
            <div className="flex justify-center items-center space-x-8 opacity-40">
              <div className="w-20 h-10 bg-gray-200 rounded"></div>
              <div className="w-20 h-10 bg-gray-200 rounded"></div>
              <div className="w-20 h-10 bg-gray-200 rounded"></div>
              <div className="w-20 h-10 bg-gray-200 rounded"></div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
