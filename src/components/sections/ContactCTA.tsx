"use client";

import { ScrollReveal } from "@/components/ui";
import { contactCopy } from "@/lib/content/pages/contact";
import { APP_CONFIG } from "@/config";

export function ContactCTA() {
  const { cta } = contactCopy;
  
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1}>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900 font-display">
              {cta.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              {cta.subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a
                href={`mailto:${cta.email}`}
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-700 hover:bg-green-800 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {cta.email}
              </a>
              
              <a
                href={APP_CONFIG.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-gray-200 hover:border-green-700 text-gray-700 hover:text-green-700 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                {cta.linkedinText}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}