"use client";

import { ArrowUpRight, Play } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import Button from "@/components/ui/Button";
import CountUp from "@/components/motion/CountUp";

const stats = [
  { value: "15+", label: "Products Delivered" },
  { value: "$5M+", label: "Client Revenue Enabled" },
  { value: "100%", label: "Client Retention" },
  { value: "9+", label: "Years of Excellence" },
];

export default function Hero() {
  const reduced = useReducedMotion();

  // One orchestrated entrance rather than four independent delays.
  const container: Variants = {
    hidden: {},
    shown: { transition: { staggerChildren: reduced ? 0 : 0.06 } },
  };
  const item: Variants = {
    hidden: reduced ? { opacity: 1 } : { opacity: 0, y: 20 },
    shown: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.45, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-40" />

      {/* Ambient wash. Drifts slowly so the page feels alive without
          competing with the content; held still for reduced motion. */}
      <motion.div
        className="absolute top-0 right-0 w-[900px] h-[900px] bg-gold-400/25 rounded-full blur-[140px] -translate-y-1/3 translate-x-1/4"
        animate={reduced ? undefined : { scale: [1, 1.08, 1], opacity: [1, 0.85, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gold-400/20 rounded-full blur-[130px] translate-y-1/3 -translate-x-1/4"
        animate={reduced ? undefined : { scale: [1, 1.12, 1], opacity: [1, 0.8, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 w-full"
        variants={container}
        initial="hidden"
        animate="shown"
      >
        <div className="max-w-5xl">
          <motion.h1
            variants={item}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-bold text-stone-950 leading-[1.05] tracking-tight mb-8 mt-4"
          >
            We build software
            <br />
            that moves
            <br />
            <span className="text-gold-600">industries.</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-lg md:text-xl text-stone-600 max-w-2xl leading-relaxed mb-12"
          >
            Minoqtopus partners with ambitious companies to design, engineer,
            and scale digital products that set new standards in their markets.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href="/contact" size="lg">
              Start Your Project
              <ArrowUpRight className="w-5 h-5" />
            </Button>
            <Button href="/projects" variant="outline" size="lg">
              <Play className="w-4 h-4 fill-current" />
              Explore Our Work
            </Button>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-stone-200"
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-display text-3xl md:text-4xl font-bold text-stone-950 mb-1">
                <CountUp value={stat.value} />
              </div>
              <div className="text-stone-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
