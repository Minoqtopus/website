"use client";

import { ScrollReveal } from "@/components/ui";

interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  caseStudyUrl: string;
  liveUrl?: string;
  color: string;
}

const projects: Project[] = [
  {
    id: "fintech-mvp",
    title: "FinTech Payment Platform",
    description: "Secure payment processing MVP with multi-currency support and real-time transaction tracking",
    category: "FinTech",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    caseStudyUrl: "https://notion.so/your-workspace/fintech-case-study",
    liveUrl: "https://fintech-platform.demo.com",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    description: "Comprehensive analytics platform with real-time metrics and user journey analysis",
    category: "SaaS",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    caseStudyUrl: "https://notion.so/your-workspace/saas-analytics-case-study",
    liveUrl: "https://analytics-dashboard.demo.com",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "marketplace-mvp",
    title: "E-commerce Marketplace",
    description: "Full-featured marketplace connecting local artisans with global buyers",
    category: "E-commerce",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    caseStudyUrl: "https://notion.so/your-workspace/marketplace-case-study",
    liveUrl: "https://artisan-marketplace.demo.com",
    color: "from-green-500 to-green-600"
  },
  {
    id: "healthcare-mvp",
    title: "Healthcare Scheduling System",
    description: "Patient appointment management with automated reminders and telehealth integration",
    category: "Healthcare",
    techStack: ["Vue.js", "Express", "MySQL", "Twilio"],
    caseStudyUrl: "https://notion.so/your-workspace/healthcare-case-study",
    color: "from-red-500 to-red-600"
  },
  {
    id: "education-platform",
    title: "Online Learning Platform",
    description: "Interactive course platform with video streaming and progress tracking",
    category: "EdTech",
    techStack: ["React", "Django", "PostgreSQL", "AWS"],
    caseStudyUrl: "https://notion.so/your-workspace/edtech-case-study",
    liveUrl: "https://learning-platform.demo.com",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: "logistics-tracker",
    title: "Logistics Tracking System",
    description: "Real-time shipment tracking with automated notifications and route optimization",
    category: "Logistics",
    techStack: ["Angular", "Node.js", "MongoDB", "Google Maps"],
    caseStudyUrl: "https://notion.so/your-workspace/logistics-case-study",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "social-network",
    title: "Professional Network Platform",
    description: "Niche social network for industry professionals with networking features",
    category: "Social",
    techStack: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
    caseStudyUrl: "https://notion.so/your-workspace/social-network-case-study",
    liveUrl: "https://professional-network.demo.com",
    color: "from-pink-500 to-pink-600"
  },
  {
    id: "iot-dashboard",
    title: "IoT Monitoring Dashboard",
    description: "Real-time IoT device monitoring with alerts and data visualization",
    category: "IoT",
    techStack: ["React", "Python", "InfluxDB", "Grafana"],
    caseStudyUrl: "https://notion.so/your-workspace/iot-dashboard-case-study",
    color: "from-teal-500 to-teal-600"
  }
];

export function ProjectShowcase() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal delay={0.1}>
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 text-gray-900 font-display">
              Our <span className="text-green-700">Portfolio</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our diverse range of successful MVP projects across multiple industries.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1 + index * 0.05}>
              <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 h-full flex flex-col">
                {/* Project Preview */}
                <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                  
                  {/* Project Icon/Mockup Area */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/20">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{project.category.charAt(0)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-700 transition-colors leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-sm h-20">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 4).map((tech, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 4 && (
                        <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-lg text-sm">
                          +{project.techStack.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-green-700 hover:bg-green-800 text-white text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      >
                        View Live
                      </a>
                    ) : (
                      <div className="flex-1 bg-gray-100 text-gray-400 text-center py-3 px-4 rounded-xl font-semibold cursor-not-allowed">
                        Coming Soon
                      </div>
                    )}
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white border-2 border-gray-200 hover:border-green-700 text-gray-700 hover:text-green-700 text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      Case Study
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Ready to add your project to our portfolio?</p>
            <a
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-xl transition-colors"
            >
              Start Your Project
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}