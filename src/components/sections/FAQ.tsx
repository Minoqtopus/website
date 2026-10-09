import { ChevronDown } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const faqs = [
  {
    question: "What services does Minoqtopus offer as a software company?",
    answer:
      "Minoqtopus offers full-stack software development, mobile app development, cloud and DevOps, product design, e-commerce solutions, and AI engineering for startups and enterprises.",
  },
  {
    question: "Can I hire Minoqtopus as a freelance development team?",
    answer:
      "Yes. Minoqtopus works as a freelance software engineering studio and dedicated development team, offering project-based delivery and long-term engineering partnerships.",
  },
  {
    question: "What industries does this IT business serve?",
    answer:
      "Minoqtopus builds software for fintech, healthcare, energy, AI and data, SaaS, and enterprise clients across the US and globally.",
  },
  {
    question: "How do I start a project with Minoqtopus?",
    answer:
      "Contact Minoqtopus through the website contact form or email minoqtopus.agency@gmail.com to schedule a consultation and receive a tailored project plan.",
  },
];

export default function FAQ() {
  return (
    <section className="py-28 bg-white border-t border-stone-200/80">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeader
          label="FAQ"
          title="Software company"
          highlight="questions."
          description="Common questions about hiring Minoqtopus as your software engineering company, freelance development team, or IT business partner."
          align="left"
          className="mb-12"
        />

        <div className="space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-stone-200/80 bg-stone-50 open:border-gold-600/30 open:bg-white open:shadow-sm transition-all"
            >
              <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-5 font-display font-semibold text-stone-950 marker:content-none [&::-webkit-details-marker]:hidden">
                {item.question}
                <ChevronDown
                  className="w-5 h-5 shrink-0 text-gold-600 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-6 pb-5 text-stone-600 text-sm leading-relaxed">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
