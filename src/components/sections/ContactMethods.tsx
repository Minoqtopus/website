"use client";

import { ScrollReveal } from "@/components/ui";
import { contactCopy } from "@/lib/content/pages/contact";
import { APP_CONFIG } from "@/config";

export function ContactMethods() {
  const { methods } = contactCopy;
  
  const getActionUrl = (option: (typeof methods.options)[number]) => {
    if (option.id === 'quick-project') return APP_CONFIG.upworkUrl;
    if (option.id === 'custom-development') return APP_CONFIG.calendlyUrl;
    return '#contact-form';
  };
  
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 text-gray-900 font-display">
              {methods.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {methods.subtitle}
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {methods.options.map((option, index) => (
            <ScrollReveal key={option.id} delay={0.2 + index * 0.1}>
              <div className={`relative bg-white rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                ('recommended' in option && option.recommended)
                  ? 'border-green-600 shadow-lg' 
                  : 'border-gray-200 hover:border-green-600'
              }`}>
                {('recommended' in option && option.recommended) && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-4">
                    <div className="w-8 h-8 bg-green-600 rounded-xl"></div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {option.title}
                  </h3>
                  <p className="text-gray-600">
                    {option.description}
                  </p>
                </div>
                
                {option.actionType === 'form' ? (
                  <a
                    href={getActionUrl(option)}
                    className="block w-full text-center px-6 py-3 bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-700 rounded-xl font-semibold transition-all duration-300"
                  >
                    {option.action}
                  </a>
                ) : (
                  <a
                    href={getActionUrl(option)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      ('recommended' in option && option.recommended)
                        ? 'bg-green-700 hover:bg-green-800 text-white'
                        : 'bg-gray-100 hover:bg-green-50 text-gray-700 hover:text-green-700'
                    }`}
                  >
                    {option.action} →
                  </a>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}