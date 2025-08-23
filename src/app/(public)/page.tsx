"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

// Calendar Icon SVG
const CalendarIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className="w-5 h-5"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

// LinkedIn Icon SVG
const LinkedInIcon = () => (
  <svg 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Hero Section - Full viewport with perfect centering */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-green-100 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-2000"></div>
          <div className="absolute -bottom-8 left-1/3 w-72 h-72 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float delay-4000"></div>
        </div>

        <main className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto text-center">
              <ScrollReveal delay={0.15}>
                  <Image
                    src="/images/brand/logo.png"
                    alt="Minoqtopus"
                    width={300}
                    height={300}
                    className="mx-auto object-cover"
                    priority
                  />
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <h1 className="text-6xl sm:text-8xl md:text-10xl lg:text-8xl xl:text-[8rem] font-black mb-10 tracking-tight text-gray-900 leading-[1] font-display">
                  Build Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-green-700 relative inline-block">
                    MVP
                  </span>
                  <br />
                  in 4 weeks
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={0.3}>
                <p className="text-xl sm:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto mb-12 font-medium leading-relaxed font-text">
                  While traditional development takes 6+ months, we deliver production-ready solutions in{" "}
                  <span className="text-transparent font-bold">28 days</span>. Faster time-to-market, proven results.
                </p>
              </ScrollReveal>
            </div>

            {/* CTA Section */}
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
                <a
                  href="https://calendly.com/minoqtous-inc/discovery-call-minoqtopus"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-[#1a7753] text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-3"
                  aria-label="Schedule a call to discuss your MVP project"
                >
                  <CalendarIcon />
                  <span className="relative z-10">Schedule a Call</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/minoqtopus-inc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#0077B5] border-2 border-[#0077B5] px-8 py-4 rounded-xl text-lg font-bold hover:bg-[#0077B5] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#0077B5] focus:ring-opacity-50 font-display inline-flex items-center gap-3"
                  aria-label="Connect with us on LinkedIn"
                >
                  <LinkedInIcon />
                  <span>LinkedIn</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Trust indicators */}
            <ScrollReveal delay={0.5}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-500 text-sm font-medium font-text">
                <div className="flex items-center gap-2 text-md">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  Enterprise-Grade Security
                </div>
                <div className="flex items-center gap-2 text-md">
                  <div className="w-2 h-2 rounded-full bg-green-600"></div>
                  Scalable Architecture
                </div>
              </div>
            </ScrollReveal>
        </main>
      </section>
    </div>
  );
}