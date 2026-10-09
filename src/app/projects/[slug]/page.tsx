import CaseStudyImage from "@/components/ui/CaseStudyImage";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { getCaseStudy, caseStudies } from "@/data/portfolio";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { createCaseStudyMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) return { title: "Case Study | Minoqtopus" };
  return createCaseStudyMetadata(study.name, study.tagline, study.slug);
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = getCaseStudy(slug);
  if (!study) notFound();

  const related = caseStudies
    .filter((p) => p.slug !== study.slug && p.category === study.category)
    .slice(0, 3);

  return (
    <>
      <section className="relative bg-white pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-950 transition-colors mb-8 cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            All projects
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 items-center pb-16">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-4">
                {study.category}
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-950 tracking-tight leading-[1.1] mb-4">
                {study.name}
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed mb-6">
                {study.tagline}
              </p>
              <p className="text-sm text-stone-600 mb-8">{study.domain}</p>
              {study.url && (
                <a
                  href={study.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gold-500 hover:text-gold-400 text-sm font-semibold transition-colors cursor-pointer"
                >
                  Visit live product
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            {study.thumbnail ? (
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <CaseStudyImage
                  src={study.thumbnail}
                  alt={`${study.name} case study`}
                  priority
                  fit="contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="rounded-2xl"
                />
              </div>
            ) : (
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-gold-50 to-stone-100 border border-stone-200 flex items-center justify-center">
                <span className="font-display text-6xl font-bold text-gold-600/35">
                  {study.name.charAt(0)}
                </span>
              </div>
            )}
          </div>
        </div>
      </section>

      {study.metrics && (
        <section className="bg-stone-50 border-y border-stone-200">
          <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {study.metrics.map((m) => (
                <div key={m.label}>
                  <div className="font-display text-2xl md:text-3xl font-bold text-stone-950">
                    {m.value}
                  </div>
                  <div className="text-stone-600 text-sm mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="font-display text-2xl font-bold text-stone-950 mb-4">
                  Overview
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {study.overview}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-stone-950 mb-4">
                  The Challenge
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {study.challenge}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-stone-950 mb-4">
                  What We Built
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {study.contribution}
                </p>
              </div>

              <div className="bg-stone-50 rounded-2xl p-8 border border-stone-200/80">
                <h2 className="font-display text-xl font-bold text-stone-950 mb-4">
                  Key Decision
                </h2>
                <p className="text-stone-600 leading-relaxed">
                  {study.keyDecision}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-stone-950 mb-4">
                  The Result
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg font-medium">
                  {study.result}
                </p>
              </div>
            </div>

            <div>
              <div className="sticky top-28 bg-stone-50 rounded-2xl p-8 border border-stone-200/80">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-600 mb-5">
                  Tech Stack
                </h3>
                <ul className="space-y-2 mb-8">
                  {study.stack.map((tech) => (
                    <li
                      key={tech}
                      className="text-sm text-stone-700 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 shrink-0" />
                      {tech}
                    </li>
                  ))}
                </ul>
                <Button href="/contact" className="w-full">
                  Start a similar project
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="py-20 bg-stone-50 border-t border-stone-200/80">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-display text-2xl font-bold text-stone-950 mb-8">
              Related projects
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((project) => (
                <Link
                  key={project.slug}
                  href={`/projects/${project.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200/80 hover:shadow-lg transition-shadow cursor-pointer"
                >
                  {project.thumbnail ? (
                    <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
                      <CaseStudyImage
                        src={project.thumbnail}
                        alt={project.name}
                        fit="contain"
                        className="p-2 group-hover:scale-[1.02] transition-transform duration-300"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div className="aspect-[4/3] bg-gradient-to-br from-gold-50 to-stone-100 flex items-center justify-center">
                      <span className="font-display text-4xl font-bold text-gold-600/40">
                        {project.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="p-5">
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-stone-950 mt-1 group-hover:text-gold-600 transition-colors">
                      {project.name}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTA />
    </>
  );
}
