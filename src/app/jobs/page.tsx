import Link from "next/link";
import { ArrowUpRight, Briefcase, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import CTA from "@/components/sections/CTA";
import { jobs } from "@/data/jobs";
import { jobsMetadata } from "@/lib/seo";

export const metadata = jobsMetadata;

export default function JobsPage() {
  return (
    <>
      <PageHeader
        title="Build with us."
        highlight="Grow with us."
        description="Join Minoqtopus and help grow a premium software engineering studio with high-intent leads and world-class delivery."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-4 block">
              Open Positions
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 tracking-tight">
              {jobs.length} role{jobs.length !== 1 ? "s" : ""} available
            </h2>
          </div>

          <div className="space-y-4">
            {jobs.map((job) => (
              <Link
                key={job.slug}
                href={`/jobs/${job.slug}`}
                className="group block p-6 md:p-8 rounded-2xl border border-stone-200 bg-white hover:border-gold-600/40 hover:shadow-lg hover:shadow-gold-600/5 transition-all duration-200 cursor-pointer"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-50 px-3 py-1 rounded-full">
                        <Briefcase className="w-3.5 h-3.5" />
                        {job.department}
                      </span>
                      <span className="text-xs font-medium text-stone-400">
                        Posted {new Date(job.postedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                      </span>
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-stone-950 group-hover:text-gold-700 transition-colors mb-2">
                      {job.title}
                    </h3>
                    <p className="text-stone-500 leading-relaxed max-w-2xl">
                      {job.summary}
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-stone-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-stone-400" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Briefcase className="w-4 h-4 text-stone-400" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-stone-400" />
                        {job.duration}
                      </span>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-600 group-hover:text-gold-700 transition-colors">
                      View details
                      <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
