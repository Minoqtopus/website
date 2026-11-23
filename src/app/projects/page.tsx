import PageHeader from "@/components/ui/PageHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import CTA from "@/components/sections/CTA";
import { caseStudies } from "@/data/portfolio";
import { projectsMetadata } from "@/lib/seo";

export const metadata = projectsMetadata;

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        title="Real products,"
        highlight="real outcomes."
        description={`${caseStudies.length} delivered projects, each case study sourced from our portfolio with thumbnails and documented engineering outcomes.`}
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

      <CTA />
    </>
  );
}
