"use client";

import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Home() {
  const weeks = [
    { number: 1, title: "Research", description: "Requirements & Planning", icon: "🔍" },
    { number: 2, title: "Design", description: "UI/UX & Prototyping", icon: "🎨" },
    { number: 3, title: "Development", description: "Build & Integration", icon: "💻" },
    { number: 4, title: "Launch", description: "Deploy & Deliver", icon: "🚀" },
  ];

  return (
    <div className="scroll-smooth">
      {/* Smooth scroll navigation */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }
        section {
          scroll-snap-align: start;
        }
        .scroll-container {
          scroll-snap-type: y mandatory;
          overflow-y: scroll;
          height: 100vh;
        }
      `}</style>
      {/* Section 1: Hero - Full Height */}
      <section className="min-h-screen bg-gradient-to-br from-green-50 via-green-25 to-white relative overflow-hidden flex items-center justify-center">
        {/* Clean background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          
        </div>

        <main className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* Crystal clear value proposition */}
            <div className="mb-10">
              {/* Main promise - what we do */}
              <div className="mb-6">
                <h1 className="text-xl sm:text-2xl lg:text-3xl text-gray-600 mb-3 font-medium">
                  You have an idea.
                </h1>
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight text-gray-900 leading-[0.85] sm:leading-[0.9]">
                  We build your<br />
                  <span className="text-green-600">MVP</span> in 4 weeks.
                </h2>
              </div>

              {/* What we handle */}
              <div className="mb-10">
                <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto px-4 sm:px-0 leading-relaxed">
                  <span className="font-semibold text-gray-900">Research. Design. Development. Launch.</span><br className="hidden sm:block" />
                  <span className="sm:hidden"> </span>Everything you need to validate your idea and get to market fast.
                </p>
              </div>

              {/* Key differentiator */}
              <div className="mb-12 flex justify-center">
                <div className="inline-flex items-center gap-2 bg-gray-100 px-5 py-2.5 rounded-full">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium text-gray-800">End-to-end service • Full ownership • Ready in 4 weeks</span>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <ScrollReveal className="mb-12">
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0">
                <a
                  href="/contact"
                  className="w-full sm:w-auto bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center"
                >
                  Schedule a Discovery Call
                </a>
                <a
                  href="/portfolio"
                  className="w-full sm:w-auto border-2 border-green-600 text-green-700 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-green-50 hover:border-green-700 transition-all duration-300 bg-white text-center"
                >
                  View Our Work
                </a>
              </div>
            </ScrollReveal>
            
            {/* Scroll indicator */}
            <div className="flex flex-col items-center mt-8 md:mt-12">
              <p className="text-xs sm:text-sm text-gray-500 mb-3 md:mb-4 px-4 text-center">Scroll to explore our process</p>
              <div className="animate-bounce">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* How We Work - Doodle Process Graph */}
      <section className="min-h-screen bg-gradient-to-b from-white to-green-25 relative overflow-hidden flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          {/* Section Title */}
          <ScrollReveal className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Our 4-week journey from your idea to a market-ready MVP
            </p>
          </ScrollReveal>

          {/* Process Steps */}
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              {weeks.map((week, index) => (
                <ScrollReveal key={week.number} delay={index * 100}>
                  <div className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{week.icon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{week.title}</h3>
                        <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">Week {week.number}</span>
                      </div>
                      <p className="text-gray-600">{week.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What We Handle - Core Services */}
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
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
      <section className="min-h-screen bg-white flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
          <ScrollReveal className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-12 shadow-sm">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Build Your MVP?
              </h2>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
                Join the startups that have launched successful MVPs with our proven 4-week process. 
                Let&apos;s turn your idea into reality.
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
      <section className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container mx-auto px-4 py-16">
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
