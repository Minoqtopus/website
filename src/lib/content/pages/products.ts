import { URLS } from "@/config/urls";

export const productsCopy = {
  hero: {
    title: {
      part1: "Solutions",
      highlight: "We Build",
      part2: ""
    },
    subtitle: "Examples of custom software we can build for your business.",
    subtitleHighlight: " From SaaS platforms to automation tools",
    subtitleEnd: ", tailored to your needs.",
    trustIndicators: [
      { id: "custom", text: "Fully Customizable" },
      { id: "integrated", text: "API Integrations" },
      { id: "scalable", text: "Built to Scale" }
    ]
  },
  showcase: {
    title: {
      part1: "Solution",
      highlight: "Examples"
    },
    subtitle: "These are the types of software products we build for our clients - each one customized to specific business needs."
  },
  cta: {
    title: {
      part1: "Ready to Build",
      highlight: "Your Solution",
      part2: "?"
    },
    subtitle: "See our real implementations first, then hire us directly on",
    subtitleHighlight: " Upwork for fast project delivery",
    subtitleEnd: ".",
    primary: {
      text: "View Real Examples",
      href: URLS.portfolio,
      ariaLabel: "View our portfolio of real implementations"
    },
    secondary: {
      text: "Hire on Upwork",
      href: URLS.upwork,
      ariaLabel: "Hire Minoqtopus on Upwork"
    },
    trustIndicators: [
      { id: "proven", text: "Proven Solutions" },
      { id: "timeline", text: "Ship in Weeks" },
      { id: "support", text: "Ongoing Support" }
    ]
  }
} as const;