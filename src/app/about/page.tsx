import { Target, Eye, Heart, Users, Globe, Award } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import CTA from "@/components/sections/CTA";
import { aboutMetadata } from "@/lib/seo";

export const metadata = aboutMetadata;

const values = [
  {
    icon: Target,
    title: "Precision",
    description:
      "Every line of code, every pixel, every interaction is crafted with intention and excellence.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "Open communication, honest timelines, and clear progress at every stage of the project.",
  },
  {
    icon: Heart,
    title: "Partnership",
    description:
      "We invest in your success as if it were our own. Your goals become our mission.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Cross-functional teams working seamlessly with yours to deliver exceptional outcomes.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Distributed teams across time zones ensuring round-the-clock progress on your projects.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards, because your reputation depends on it.",
  },
];

const timeline = [
  { year: "2017", event: "Founded with a vision to redefine software craftsmanship" },
  { year: "2019", event: "Expanded to serve Fortune 500 clients across fintech and healthcare" },
  { year: "2022", event: "Launched AI & data practice, delivering 50+ ML-powered products" },
  { year: "2025", event: "Surpassed 100 projects delivered with 100% client retention" },
  { year: "2026", event: "Recognized as a top software engineering studio globally" },
];

export default function About() {
  return (
    <>
      <PageHeader
        title="Engineering the"
        highlight="future, together."
        description="Minoqtopus is a premium software engineering studio. We partner with ambitious companies to build products that define their industries."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-4 block">
                Our Story
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 tracking-tight mb-6">
                Built on craftsmanship, driven by ambition.
              </h2>
              <p className="text-stone-500 leading-relaxed mb-6">
                What started as a small team of passionate engineers has grown into
                a world-class studio trusted by industry leaders. We believe great
                software is not just functional, it&apos;s transformative.
              </p>
              <p className="text-stone-500 leading-relaxed">
                Today, Minoqtopus brings together senior engineers, designers, and
                strategists who share one conviction: technology should elevate
                businesses and improve lives.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "15+", label: "Projects" },
                { value: "10+", label: "Team Members" },
                { value: "9+", label: "Countries" },
                { value: "100%", label: "Retention" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-stone-50 rounded-2xl p-8 border border-stone-200/80 text-center"
                >
                  <div className="font-display text-3xl font-bold text-stone-950">
                    {stat.value}
                  </div>
                  <div className="text-stone-400 text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-4 block">
              Our Values
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 tracking-tight">
              What drives us forward.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-8 border border-stone-200/80 hover:shadow-lg hover:shadow-stone-900/5 transition-shadow duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-gold-600/10 flex items-center justify-center text-gold-600 mb-5">
                  <value.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-bold text-stone-950 mb-2">
                  {value.title}
                </h3>
                <p className="text-stone-500 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-4 block">
              Our Journey
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 tracking-tight">
              A decade of excellence.
            </h2>
          </div>
          <div className="space-y-0">
            {timeline.map((item, index) => (
              <div key={item.year} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 rounded-full bg-gold-600 shrink-0 mt-1.5" />
                  {index < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-stone-300 my-2" />
                  )}
                </div>
                <div className="pb-10">
                  <span className="text-gold-600 font-display font-bold text-sm">
                    {item.year}
                  </span>
                  <p className="text-stone-600 mt-1 leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
