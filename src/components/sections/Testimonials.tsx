import { Quote } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { testimonials } from "@/data/portfolio";

export default function Testimonials() {
  const featured = testimonials.slice(0, 3);

  return (
    <section className="py-28 bg-stone-50 dot-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Client Voices"
          title="Trusted by"
          highlight="teams we've shipped with."
          description="Feedback from real clients and product teams, grounded in delivered outcomes, not theory."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((item) => (
            <div
              key={item.company}
              className="bg-white rounded-2xl p-8 border border-stone-200/80 flex flex-col"
            >
              <Quote className="w-8 h-8 text-gold-500/40 mb-6" />
              <blockquote className="text-stone-600 leading-relaxed flex-1 mb-8">
                &ldquo;{item.quote}&rdquo;
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gold-600 flex items-center justify-center text-white text-sm font-bold">
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
  );
}
