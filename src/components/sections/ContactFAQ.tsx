"use client";

import { useState } from 'react';
import { ScrollReveal } from "@/components/ui";
import { contactCopy } from "@/lib/content/pages/contact";

export function ContactFAQ() {
  const { faq } = contactCopy;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900 font-display">
              {faq.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {faq.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {faq.questions.map((item, index) => (
            <ScrollReveal key={item.id} delay={0.1 + index * 0.05}>
              <div className="mb-4">
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full text-left px-6 py-4 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-gray-900 text-lg group-hover:text-green-700 transition-colors">
                      {item.question}
                    </h3>
                    <div className={`w-6 h-6 flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg
                        className="w-4 h-4 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 py-4 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}