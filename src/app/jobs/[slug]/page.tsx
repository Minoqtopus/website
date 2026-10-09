import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Briefcase, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import Button from "@/components/ui/Button";
import CTA from "@/components/sections/CTA";
import { getJob, jobs, getJobApplyHref } from "@/data/jobs";
import { createJobMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Job | Minoqtopus" };
  return createJobMetadata(job.title, job.summary, job.slug);
}

function JobList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-stone-600 leading-relaxed">
          <CheckCircle2 className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default async function JobDetailPage({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  const applyHref = getJobApplyHref(job.slug);

  return (
    <>
      <section className="relative bg-white pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 mb-6">
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-950 transition-colors w-fit cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              All positions
            </Link>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
              {job.department} · {job.type}
            </span>
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-950 tracking-tight leading-[1.1] max-w-4xl mb-6">
            {job.title}
          </h1>
          <p className="text-lg text-stone-600 max-w-3xl leading-relaxed mb-8">
            {job.summary}
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-stone-600 mb-10">
            <span className="inline-flex items-center gap-2">
              <MapPin className="w-4 h-4 text-gold-500" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-2">
              <Briefcase className="w-4 h-4 text-gold-500" />
              {job.type}
            </span>
            <span className="inline-flex items-center gap-2">
              <Clock className="w-4 h-4 text-gold-500" />
              {job.duration}
            </span>
          </div>

          <Button href={applyHref}>
            Apply now
            <ArrowUpRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-14">
              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-950 mb-6">
                  About the role
                </h2>
                <p className="text-stone-600 leading-relaxed text-lg">
                  {job.overview}
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-950 mb-6">
                  Responsibilities
                </h2>
                <JobList items={job.responsibilities} />
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-950 mb-6">
                  Requirements
                </h2>
                <JobList items={job.requirements} />
              </div>

              <div>
                <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-950 mb-6">
                  Nice to have
                </h2>
                <JobList items={job.niceToHave} />
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50">
                <h3 className="font-display text-lg font-bold text-stone-950 mb-4">
                  What you&apos;ll learn
                </h3>
                <JobList items={job.whatYouWillLearn} />
              </div>

              <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50">
                <h3 className="font-display text-lg font-bold text-stone-950 mb-4">
                  Benefits
                </h3>
                <JobList items={job.benefits} />
              </div>

              <div className="p-6 rounded-2xl border border-gold-600/30 bg-gold-50/50">
                <h3 className="font-display text-lg font-bold text-stone-950 mb-3">
                  Ready to apply?
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed mb-5">
                  Submit your resume and application details through our
                  dedicated application form.
                </p>
                <Button href={applyHref} className="w-full justify-center">
                  Apply for this role
                  <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
