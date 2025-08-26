"use client";

import { ScrollReveal } from "@/components/ui";
import { portfolioProjects } from "@/lib/data/portfolio";
import { portfolioShowcaseCopy } from "@/lib/content/components/portfolio-showcase";
import Image from "next/image";

export function PortfolioShowcase() {
  const { buttons, techStack } = portfolioShowcaseCopy;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolioProjects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1 + index * 0.05}>
              <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-gray-200 h-full flex flex-col">
                {/* Project Preview */}
                <div className="h-56 relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <div className="mb-6 flex-1">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-700 transition-colors leading-tight">
                        {project.title}
                      </h3>
                      {/* Category Badge */}
                      <span className="px-3 py-1 rounded-full bg-amber-200 text-black  text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-sm h-20">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 5).map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-50 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 5 && (
                        <span
                          className="px-3 py-1 bg-gray-50 text-gray-500 rounded-lg text-sm cursor-help relative group/tooltip"
                          title={project.techStack.slice(5).join(", ")}
                        >
                          +{project.techStack.length - 5} {techStack.moreText}
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10">
                            <div className="text-left space-y-2">
                              {project.techStack.slice(5).map((tech, i) => (
                                <div key={i}>{tech}</div>
                              ))}
                            </div>
                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
                          </div>
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
                        {buttons.viewLive}
                      </a>
                    ) : (
                      <div className="flex-1 bg-gray-100 text-gray-400 text-center py-3 px-4 rounded-xl font-semibold cursor-not-allowed">
                        {buttons.comingSoon}
                      </div>
                    )}
                    <a
                      href={project.caseStudyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white border-2 border-gray-200 hover:border-green-700 text-gray-700 hover:text-green-700 text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                    >
                      {buttons.caseStudy}
                    </a>
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
