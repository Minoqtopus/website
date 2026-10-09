import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import ProjectCard from "@/components/ui/ProjectCard";
import { getCaseStudy } from "@/data/portfolio";

const homeFeaturedSlugs = ["m1neral", "viasprout", "wild-ai"];

export default function CaseStudies() {
  const homeFeatured = homeFeaturedSlugs
    .map((slug) => getCaseStudy(slug))
    .filter((study): study is NonNullable<typeof study> => study !== undefined);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <SectionHeader
              label="Selected Work"
              title="Results that"
              highlight="speak."
              description="Real products we've engineered, from FemTech platforms acquired by NYSE companies to institutional ESG intelligence."
              align="left"
              className="mb-0"
            />
          </div>
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-stone-950 hover:text-gold-600 transition-colors duration-200 shrink-0 cursor-pointer mb-16"
          >
            View all projects
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {homeFeatured.map((study, index) => (
            <ProjectCard key={study.slug} study={study} priority={index === 0} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 hover:text-gold-700 transition-colors cursor-pointer"
          >
            View all 9 case studies
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
