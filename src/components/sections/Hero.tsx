import { ArrowUpRight, Play } from "lucide-react";
import Button from "@/components/ui/Button";
import CountUp from "@/components/motion/CountUp";

const stats = [
  { value: "15+", label: "Products Delivered" },
  { value: "$5M+", label: "Client Revenue Enabled" },
  { value: "100%", label: "Client Retention" },
  { value: "9+", label: "Years of Excellence" },
];

/**
 * The entrance runs on CSS keyframes rather than an animation library: each
 * element carries `hero-rise` with a `--rise-index` that offsets its delay.
 * This renders on the server, so the hero costs no client JavaScript at all.
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Ambient wash. Drifts slowly so the page feels alive without
          competing with the content; held still for reduced motion. */}
      <div
        className="ambient-drift absolute top-0 right-0 w-[900px] h-[900px] bg-gold-400/25 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4"
        aria-hidden="true"
      />
      <div
        className="ambient-drift absolute bottom-0 left-0 w-[700px] h-[700px] bg-gold-400/20 rounded-full blur-[130px] translate-y-1/3 -translate-x-1/4"
        style={{ animationDuration: "18s", animationDelay: "2s" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="max-w-5xl">
          <h1
            className="hero-rise font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-stone-950 leading-[1.05] tracking-tight mb-8 mt-4"
            style={{ "--rise-index": 0 } as React.CSSProperties}
          >
            We build software
            <br />
            that moves
            <br />
            <span className="text-gold-600">industries.</span>
          </h1>

          <p
            className="hero-rise text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed mb-12"
            style={{ "--rise-index": 1 } as React.CSSProperties}
          >
            Minoqtopus partners with ambitious companies to design, engineer,
            and scale digital products that set new standards in their markets.
          </p>

          <div
            className="hero-rise flex flex-col sm:flex-row gap-4"
            style={{ "--rise-index": 2 } as React.CSSProperties}
          >
            <Button href="/contact" size="lg">
              Start Your Project
              <ArrowUpRight className="w-5 h-5" />
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              <Play className="w-4 h-4 fill-current" />
              Explore Our Work
            </Button>
          </div>
        </div>

        <div
          className="hero-rise grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-stone-200"
          style={{ "--rise-index": 3 } as React.CSSProperties}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-stone-950 mb-1">
                <CountUp value={stat.value} />
              </div>
              <div className="text-stone-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
