"use client";

import { Button } from "@/components/ui/Button";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export default function Products() {
  const weeks = [
    { 
      number: 1, 
      title: "Research", 
      description: "We dive deep into understanding your market, users, and competition. Through stakeholder interviews and competitive analysis, we validate your assumptions and create a comprehensive project roadmap.",
      highlights: ["Market validation", "User research", "Competitive analysis", "Success metrics"],
      icon: "🔍" 
    },
    { 
      number: 2, 
      title: "Design", 
      description: "Our design team crafts intuitive user experiences and compelling visual interfaces. We create wireframes, interactive prototypes, and establish your brand identity.",
      highlights: ["UI/UX design", "Interactive prototypes", "Brand identity", "Design system"],
      icon: "🎨" 
    },
    { 
      number: 3, 
      title: "Development", 
      description: "We bring your design to life with clean, scalable code using modern technologies. Our full-stack developers build secure, performant systems with automated testing.",
      highlights: ["Full-stack development", "Modern tech stack", "Automated testing", "CI/CD pipelines"],
      icon: "💻" 
    },
    { 
      number: 4, 
      title: "Launch", 
      description: "We deploy your MVP to production with comprehensive testing and monitoring. This includes performance optimization, analytics setup, and ongoing support.",
      highlights: ["Production deployment", "Performance optimization", "Analytics setup", "Ongoing support"],
      icon: "🚀" 
    },
  ];

  return (
    <div className="scroll-smooth">
      {/* How We Work - First Section */}
      <section id="how-we-work" className="py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          {/* Section Header */}
          <ScrollReveal direction="fade" duration={800} className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">
              How We Work
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light tracking-wide leading-relaxed">
              A proven 4-week process that delivers results
            </p>
          </ScrollReveal>

          {/* Process Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {weeks.map((week, index) => (
              <ScrollReveal 
                key={week.number} 
                delay={index * 150} 
                direction="up"
                duration={700}
              >
                <div className="group relative">
                  {/* Process Card */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-700 border border-gray-100/80 hover:border-gray-200/80 hover:-translate-y-2 overflow-hidden">
                    {/* Subtle background pattern on hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 via-transparent to-gray-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Week Badge */}
                    <div className="relative z-10 text-center mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white text-lg font-bold rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-500">
                        {week.number}
                      </div>
                    </div>
                    
                    {/* Icon */}
                    <div className="relative z-10 text-center mb-6">
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-2xl group-hover:bg-gray-200 transition-colors duration-500">
                        <span className="text-3xl group-hover:scale-110 transition-transform duration-500">{week.icon}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="relative z-10 text-xl font-bold text-gray-900 text-center mb-4 font-display group-hover:text-gray-700 transition-colors duration-500">
                      {week.title}
                    </h3>
                    
                    {/* Key Points */}
                    <div className="relative z-10 space-y-3">
                      {week.highlights.slice(0, 2).map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-500">
                          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 flex-shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                          <span className="font-medium tracking-wide">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          
          {/* CTA */}
          <div className="text-center mt-16">
            <Button 
              size="lg" 
              className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-2xl font-medium tracking-wide transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl"
            >
              Start Your Project
            </Button>
          </div>
        </div>
      </section>

      {/* Products Content */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="fade" duration={800} className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">
              Our Products & Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light tracking-wide leading-relaxed">
              Comprehensive solutions to bring your ideas to life
            </p>
          </ScrollReveal>

          {/* Add your products content here */}
          <div className="text-center text-gray-500">
            <p>Products content coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}