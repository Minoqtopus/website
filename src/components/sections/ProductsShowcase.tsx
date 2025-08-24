"use client";

import { ScrollReveal } from "@/components/ui";
import { products } from "@/lib/data/products";

export function ProductsShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {products.map((product, index) => (
            <ScrollReveal key={product.id} delay={0.1 + index * 0.1}>
              <div className="max-w-6xl mx-auto">
                <div className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Product Visual/Mockup */}
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
                      <div className={`w-full h-full bg-gradient-to-br ${product.color} relative overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-6 left-6">
                          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                            product.status === 'live' 
                              ? 'bg-green-100 text-green-800' 
                              : product.status === 'beta'
                              ? 'bg-yellow-100 text-yellow-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {product.status === 'live' ? 'Live' : product.status === 'beta' ? 'Beta' : 'Coming Soon'}
                          </span>
                        </div>
                        
                        {/* Product Mockup */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                            <div className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mb-4">
                              <span className="text-white font-bold text-3xl">{product.name.charAt(0)}</span>
                            </div>
                            <div className="text-white font-semibold text-xl text-center">
                              {product.name}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Content */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <div>
                      <h2 className="text-4xl font-black text-gray-900 mb-3 font-display">
                        {product.name}
                      </h2>
                      <p className="text-xl text-green-700 font-semibold mb-4">
                        {product.tagline}
                      </p>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {product.description}
                      </p>
                      <div className="bg-green-50 border border-green-100 rounded-xl p-6">
                        <p className="text-green-800 font-semibold text-lg">
                          💡 {product.valueProposition}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-4">Key Features</h3>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {product.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Benefits */}
                    <div>
                      <h3 className="font-bold text-gray-900 text-xl mb-4">Benefits</h3>
                      <div className="space-y-4">
                        {product.benefits.map((benefit, i) => (
                          <div key={i} className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                              <div className="w-6 h-6 bg-green-600 rounded-lg"></div>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                              <p className="text-gray-600 text-sm">{benefit.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Pricing & CTAs */}
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="flex items-center justify-between mb-6">
                        <div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-3xl font-bold text-gray-900">
                              ${product.pricing.startingPrice}
                            </span>
                            <span className="text-gray-600">/{product.pricing.billingPeriod}</span>
                          </div>
                          <p className="text-gray-500 text-sm mt-1">Starting price</p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-900 font-semibold">Enterprise plans available</p>
                          <p className="text-gray-500 text-sm">Custom pricing & features</p>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4">
                        {product.urls.trial || product.urls.demo ? (
                          <a
                            href={product.urls.trial || product.urls.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-green-700 hover:bg-green-800 text-white text-center py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg"
                          >
                            {product.cta.primary}
                          </a>
                        ) : (
                          <div className="flex-1 bg-gray-300 text-gray-500 text-center py-4 px-6 rounded-xl font-semibold text-lg cursor-not-allowed">
                            Coming Soon
                          </div>
                        )}
                        
                        <a
                          href={product.urls.learnMore}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-white border-2 border-green-700 hover:bg-green-50 text-green-700 text-center py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105"
                        >
                          {product.cta.secondary}
                        </a>
                      </div>
                    </div>
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