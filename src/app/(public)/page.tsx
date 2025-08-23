"use client";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import Image from "next/image";

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
                <h1 className="text-6xl sm:text-8xl md:text-10xl lg:text-8xl xl:text-[8rem] font-black mb-10 tracking-tight text-gray-900 leading-[1.25] font-display">
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
                  href="/contact"
                  className="group relative bg-[#1a7753] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-green-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display"
                  aria-label="Get started with your MVP project today"
                >
                  <span className="relative z-10">Get Started Today →</span>
                  <div className="absolute inset-0 bg-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
                <a
                  href="/portfolio"
                  className="border-2 border-green-700 text-transparent px-10 py-5 rounded-full text-lg font-bold hover:bg-green-50 hover:border-green-800 hover:shadow-lg transition-all duration-300 bg-white focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display"
                  aria-label="View our portfolio of completed projects"
                >
                  See Our Work
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