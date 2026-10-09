import CaseStudyImage from "@/components/ui/CaseStudyImage";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { CaseStudy } from "@/data/portfolio";

interface ProjectCardProps {
  study: CaseStudy;
  priority?: boolean;
}

export default function ProjectCard({ study, priority = false }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${study.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-stone-200/80 bg-white hover:shadow-xl hover:shadow-stone-900/5 transition-all duration-300 cursor-pointer"
    >
      {study.thumbnail ? (
        <div className="relative aspect-[4/3] overflow-hidden">
          <CaseStudyImage
            src={study.thumbnail}
            alt={`${study.name} case study thumbnail`}
            priority={priority}
            fit="contain"
            className="group-hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      ) : (
        <div className="aspect-[4/3] bg-gradient-to-br from-gold-50 to-stone-100 flex items-center justify-center">
          <span className="font-display text-5xl font-bold text-gold-600/35">
            {study.name.charAt(0)}
          </span>
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        <span className="text-xs font-semibold uppercase tracking-wider text-gold-600">
          {study.category}
        </span>

        <h2 className="font-display text-xl font-bold text-stone-950 mb-2 group-hover:text-gold-600 transition-colors">
          {study.name}
        </h2>
        <p className="text-stone-500 text-sm leading-relaxed flex-1 mb-4">
          {study.tagline}
        </p>

        {study.metrics && (
          <div className="flex gap-6 pt-4 border-t border-stone-100">
            {study.metrics.slice(0, 2).map((m) => (
              <div key={m.label}>
                <div className="font-display text-lg font-bold text-stone-950">
                  {m.value}
                </div>
                <div className="text-stone-400 text-xs">{m.label}</div>
              </div>
            ))}
          </div>
        )}

        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-stone-950 group-hover:text-gold-600 transition-colors mt-5">
          Read case study
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </span>
      </div>
    </Link>
  );
}
