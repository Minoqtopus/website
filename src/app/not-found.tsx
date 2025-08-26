import { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ui";
import { generateMetadata } from "@/lib/seo";
import { notFoundMetadata } from "@/lib/content/metadata";

export const metadata: Metadata = generateMetadata(notFoundMetadata);

export default function NotFound() {
  return (
    <div className="scroll-smooth">
      {/* 404 Hero Section */}
      <section className="min-h-[60vh] bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            
            <ScrollReveal delay={0.1}>
              <div className="mb-8">
                <span className="text-8xl sm:text-9xl md:text-[12rem] font-black text-green-100 block leading-none">
                  404
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight text-gray-900 leading-[1.1] font-display">
                Oops! Page{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 via-green-600 to-green-700">
                  Not Found
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-medium leading-relaxed">
                The page you&rsquo;re looking for seems to have wandered off. Don&rsquo;t worry though - we&rsquo;re here to help you get back on track and{" "}
                <span className="text-green-700 font-bold">ship amazing software</span>.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12">
                
                {/* Primary CTA - Back to Home */}
                <Link
                  href="/"
                  className="group relative bg-green-700 hover:bg-green-800 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 overflow-hidden focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Back to Home
                </Link>

                {/* Secondary CTA - Contact Us */}
                <Link
                  href="/contact"
                  className="bg-white border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 font-display inline-flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-center"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  Get in Touch
                </Link>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="max-w-2xl mx-auto">
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 font-display">
                  While you&rsquo;re here, here&rsquo;s what we can help you with:
                </h2>
                <div className="grid sm:grid-cols-2 gap-4 text-left">
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Custom Software Development</h3>
                      <p className="text-gray-600 text-sm">Ship production-ready solutions in weeks</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">API Integrations</h3>
                      <p className="text-gray-600 text-sm">Connect your systems seamlessly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Workflow Automation</h3>
                      <p className="text-gray-600 text-sm">Streamline your business processes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-2 h-2 bg-green-600 rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">24-Hour Response</h3>
                      <p className="text-gray-600 text-sm">Quick turnaround on all inquiries</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="mt-12 pt-8 border-t border-green-200">
                <p className="text-gray-500 text-sm">
                  Need help finding something specific?{" "}
                  <Link href="/contact" className="text-green-700 hover:text-green-800 font-semibold underline">
                    Reach out to us
                  </Link>
                  {" "}and we&rsquo;ll point you in the right direction.
                </p>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>
    </div>
  );
}