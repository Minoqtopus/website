import PageHeader from "@/components/ui/PageHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import CTA from "@/components/sections/CTA";
import { caseStudies, testimonials } from "@/data/portfolio";
import { projectsMetadata } from "@/lib/seo";

export const metadata = projectsMetadata;

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Real products,"
        highlight="real outcomes."
        description="9 delivered products, each case study sourced from our portfolio with thumbnails and documented engineering outcomes."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <ProjectCard key={study.slug} study={study} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 tracking-tight text-center mb-4">
            What clients say
          </h2>
          <p className="text-stone-500 text-center mb-12 max-w-2xl mx-auto">
            Testimonials from teams and founders, tied to real delivered products.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((item) => (
              <div
                key={item.company}
                className="bg-white rounded-2xl p-8 border border-stone-200/80"
              >
                <blockquote className="text-stone-600 text-sm leading-relaxed mb-6">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-600 flex items-center justify-center text-white text-xs font-bold">
                    {item.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-stone-950 text-sm">
                      {item.author}
                    </div>
                    <div className="text-stone-400 text-xs">
                      {item.role}, {item.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
