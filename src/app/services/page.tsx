import {
  Code2,
  Smartphone,
  Cloud,
  Palette,
  ShoppingCart,
  Brain,
  Bot,
  Check,
} from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import CTA from "@/components/sections/CTA";
import Button from "@/components/ui/Button";
import { ArrowUpRight } from "lucide-react";
import { servicesMetadata } from "@/lib/seo";

export const metadata = servicesMetadata;

const services = [
  {
    icon: Code2,
    title: "Full-Stack Engineering",
    description:
      "End-to-end web application development with modern frameworks, clean architecture, and performance at scale.",
    features: [
      "React, Next.js & TypeScript",
      "Node.js, Python & Go backends",
      "Database design & optimization",
      "API design & microservices",
      "Performance & security audits",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications engineered for performance, reliability, and user delight.",
    features: [
      "React Native & Flutter",
      "Native iOS (Swift) & Android (Kotlin)",
      "Offline-first architecture",
      "App Store & Play Store deployment",
      "Push notifications & analytics",
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure that scales with your business. Automated pipelines, monitoring, and 99.99% uptime.",
    features: [
      "AWS, GCP & Azure",
      "Docker & Kubernetes",
      "CI/CD pipeline automation",
      "Infrastructure as Code (Terraform)",
      "24/7 monitoring & alerting",
    ],
  },
  {
    icon: Palette,
    title: "Product Design",
    description:
      "Research-driven design that balances beauty with usability, creating products users love.",
    features: [
      "User research & personas",
      "Wireframing & prototyping",
      "Design systems & component libraries",
      "Usability testing",
      "Brand identity integration",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description:
      "High-converting online stores with seamless checkout experiences and robust backend systems.",
    features: [
      "Headless commerce architecture",
      "Payment gateway integration",
      "Inventory & order management",
      "Analytics & conversion optimization",
      "Multi-currency & multi-language",
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description:
      "Intelligent systems that automate workflows, extract insights, and create competitive advantages.",
    features: [
      "Custom LLM integrations",
      "Predictive analytics models",
      "Computer vision solutions",
      "NLP & chatbot development",
      "MLOps & model deployment",
    ],
  },
  {
    icon: Bot,
    title: "Custom AI Agents",
    description:
      "Autonomous agents that work inside your stack, grounded in your own data and connected to the tools your team already uses.",
    features: [
      "Agents grounded in your own data",
      "Tool and API integrations",
      "Retrieval-augmented generation",
      "Human-in-the-loop review",
      "Evaluation & guardrails",
    ],
  },
];

const engagementModels = [
  {
    name: "Project-Based",
    description: "Fixed scope, fixed timeline. Ideal for well-defined products with clear requirements.",
    includes: ["Dedicated team", "Fixed pricing", "Milestone delivery", "Full documentation"],
  },
  {
    name: "Dedicated Team",
    description: "Embedded engineers working as an extension of your team. Maximum flexibility and speed.",
    includes: ["Senior engineers", "Monthly billing", "Direct communication", "Scale up/down"],
    featured: true,
  },
  {
    name: "Advisory",
    description: "Strategic guidance on architecture, technology choices, and team scaling.",
    includes: ["Architecture review", "Tech stack advisory", "Code audits", "Team mentoring"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Capabilities built for"
        highlight="ambition."
        description="From MVP to enterprise scale, we deliver comprehensive software solutions tailored to your business goals."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid lg:grid-cols-2 gap-12 items-start ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-12 h-12 rounded-xl bg-gold-600/10 flex items-center justify-center text-gold-600 mb-6">
                    <service.icon className="w-5 h-5" />
                  </div>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-stone-950 tracking-tight mb-4">
                    {service.title}
                  </h2>
                  <p className="text-stone-500 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Button href="/contact" size="sm">
                    Discuss this service
                    <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </div>
                <div
                  className={`bg-stone-50 rounded-2xl p-8 border border-stone-200/80 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-stone-600 mb-5">
                    What&apos;s included
                  </h3>
                  <ul className="space-y-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-stone-600">
                        <Check className="w-4 h-4 text-gold-600 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600 mb-4 block">
              Engagement Models
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-stone-950 tracking-tight">
              Flexible ways to work together.
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {engagementModels.map((model) => (
              <div
                key={model.name}
                className={`rounded-2xl p-8 ${
                  model.featured
                    ? "bg-gold-800 text-white ring-2 ring-gold-600"
                    : "bg-white border border-stone-200/80"
                }`}
              >
                {model.featured && (
                  <span className="inline-block text-xs font-semibold uppercase tracking-wider text-gold-400 mb-4">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`font-display text-xl font-bold mb-3 ${
                    model.featured ? "text-white" : "text-stone-950"
                  }`}
                >
                  {model.name}
                </h3>
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    model.featured ? "text-gold-50" : "text-stone-500"
                  }`}
                >
                  {model.description}
                </p>
                <ul className="space-y-2">
                  {model.includes.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 text-sm ${
                        model.featured ? "text-gold-50" : "text-stone-600"
                      }`}
                    >
                      <Check
                        className={`w-4 h-4 shrink-0 ${
                          model.featured ? "text-gold-400" : "text-gold-600"
                        }`}
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  );
}
