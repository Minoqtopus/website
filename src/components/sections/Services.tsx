"use client";

import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  ShoppingCart,
  Brain,
  Bot,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import SectionHeader from "@/components/ui/SectionHeader";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";

const services = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "Scalable web platforms built with React, Next.js, Node.js, and Python. Architecture designed for millions of users.",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    featured: true,
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform applications that deliver flawless experiences on iOS and Android.",
    tags: ["React Native", "Swift", "Kotlin"],
    featured: false,
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure that scales effortlessly. CI/CD pipelines, containerization, and cloud-native architecture.",
    tags: ["AWS", "Kubernetes", "Terraform"],
    featured: false,
  },
  {
    icon: Palette,
    title: "Product Design",
    description:
      "User-centered design systems and interfaces that convert visitors into loyal customers.",
    tags: ["Figma", "Design Systems", "UX Research"],
    featured: false,
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce",
    description:
      "High-converting online stores with seamless checkout, inventory management, and analytics.",
    tags: ["Shopify", "Stripe", "Headless CMS"],
    featured: false,
  },
  {
    icon: Brain,
    title: "AI & Data",
    description:
      "Intelligent systems powered by machine learning, NLP, and predictive analytics.",
    tags: ["LLMs", "Computer Vision", "MLOps"],
    featured: true,
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Autonomous agents that work inside your stack — handling support, research, and workflows with your own data and tools.",
    tags: ["Claude", "RAG", "Tool Use", "Workflows"],
    featured: true,
  },
];

export default function Services() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          label="Capabilities"
          title="Engineering excellence,"
          highlight="delivered."
          description="We combine deep technical expertise with strategic thinking to build products that outperform the competition."
        />

        <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <StaggerItem
              key={service.title}
              className={`group relative rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                service.featured
                  ? "bg-gold-800 text-white md:col-span-1 lg:row-span-1"
                  : "bg-white border border-stone-200/80 hover:border-stone-300 hover:shadow-xl hover:shadow-stone-900/5"
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                  service.featured
                    ? "bg-white/12 text-gold-400"
                    : "bg-stone-100 text-stone-700 group-hover:bg-gold-600/10 group-hover:text-gold-600"
                } transition-colors duration-200`}
              >
                <service.icon className="w-5 h-5" />
              </div>

              <h3
                className={`font-display text-xl font-bold mb-3 ${
                  service.featured ? "text-white" : "text-stone-950"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`text-sm leading-relaxed mb-6 ${
                  service.featured ? "text-gold-50" : "text-stone-500"
                }`}
              >
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                      service.featured
                        ? "bg-white/12 text-gold-50"
                        : "bg-stone-100 text-stone-600"
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href="/services"
                className={`absolute top-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ${
                  service.featured ? "text-gold-400" : "text-stone-500"
                }`}
                aria-label={`Learn more about ${service.title}`}
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
