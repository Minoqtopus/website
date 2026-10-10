import type { ReactNode } from "react";
import PageHeader from "@/components/ui/PageHeader";

interface LegalPageProps {
  title: string;
  highlight?: string;
  description?: string;
  /** ISO date the policy last changed, e.g. "2026-10-10". */
  effective: string;
  children: ReactNode;
}

/**
 * Shared shell for Privacy and Terms.
 *
 * Legal text is read, not scanned, so this constrains the measure and leans on
 * the prose styles below rather than the card-based layout used elsewhere.
 */
export default function LegalPage({
  title,
  highlight,
  description,
  effective,
  children,
}: LegalPageProps) {
  const formatted = new Date(`${effective}T00:00:00Z`).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }
  );

  return (
    <>
      <PageHeader title={title} highlight={highlight} description={description} />

      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-sm text-stone-600 pb-8 mb-10 border-b border-stone-200">
            Last updated{" "}
            <time dateTime={effective} className="font-medium text-stone-950">
              {formatted}
            </time>
          </p>

          <div
            className="
              [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold
              [&_h2]:text-stone-950 [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:scroll-mt-28
              [&_h2:first-child]:mt-0
              [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-bold
              [&_h3]:text-stone-950 [&_h3]:mt-8 [&_h3]:mb-3
              [&_p]:text-stone-600 [&_p]:leading-relaxed [&_p]:mb-4
              [&_ul]:mb-5 [&_ul]:space-y-2
              [&_li]:text-stone-600 [&_li]:leading-relaxed [&_li]:pl-5 [&_li]:relative
              [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0
              [&_li]:before:top-[0.6em] [&_li]:before:w-1.5 [&_li]:before:h-1.5
              [&_li]:before:rounded-full [&_li]:before:bg-gold-600
              [&_a]:text-gold-700 [&_a]:underline [&_a]:underline-offset-2
              [&_strong]:text-stone-950 [&_strong]:font-semibold
            "
          >
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
