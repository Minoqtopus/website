import { Search, PenTool, Code2, Rocket } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discovery",
    description:
      "We immerse ourselves in your business, users, and market to define a clear product vision and technical roadmap.",
  },
  {
    number: "02",
    icon: PenTool,
    title: "Design",
    description:
      "Our designers craft intuitive interfaces and robust design systems that balance aesthetics with usability.",
  },
  {
    number: "03",
    icon: Code2,
    title: "Engineering",
    description:
      "Senior engineers build with clean architecture, rigorous testing, and performance optimization at every layer.",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Launch & Scale",
    description:
      "We deploy, monitor, and iterate, ensuring your product grows reliably from MVP to enterprise scale.",
  },
];

export default function Process() {
  return (
    <section className="py-28 bg-stone-50 relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="relative max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Our Process"
          title="From concept to"
          highlight="market leader."
          description="A proven methodology refined over 15+ projects. Transparent, collaborative, and relentlessly focused on outcomes."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={step.number} className="relative group">
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-stone-300 to-transparent z-0" />
              )}
              <div className="bg-white rounded-2xl p-8 h-full border border-stone-200/80 shadow-sm transition-colors duration-300 hover:border-gold-600/30 cursor-default">
                <div className="flex items-center justify-between mb-6">
                  <span className="text-gold-500 font-display text-sm font-bold">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-gold-600/10 flex items-center justify-center text-gold-500">
                    <step.icon className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-stone-950 mb-3">
                  {step.title}
                </h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
