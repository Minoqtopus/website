import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import JobApplicationForm from "@/components/JobApplicationForm";
import { getJob, jobs } from "@/data/jobs";
import { createJobApplyMetadata } from "@/lib/seo";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) return { title: "Apply | Minoqtopus" };
  return createJobApplyMetadata(job.title, job.slug);
}

export default async function JobApplyPage({ params }: Props) {
  const { slug } = await params;
  const job = getJob(slug);
  if (!job) notFound();

  return (
    <>
      <section className="relative bg-white pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 dot-pattern opacity-40" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
        <div className="relative max-w-7xl mx-auto px-6">
          <Link
            href={`/jobs/${job.slug}`}
            className="inline-flex items-center gap-2 text-sm text-stone-600 hover:text-stone-950 transition-colors w-fit cursor-pointer mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to role
          </Link>

          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-4 block">
            Application
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-stone-950 tracking-tight leading-[1.1] max-w-4xl mb-4">
            Apply for {job.title}
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl leading-relaxed">
            Complete the application below. Attach your resume and tell us why
            you&apos;re the right fit for Minoqtopus.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <JobApplicationForm jobSlug={job.slug} jobTitle={job.title} />
        </div>
      </section>
    </>
  );
}
