import { URLS } from "@/config/urls";

export const portfolioCopy = {
  hero: {
    title: {
      part1: "Our",
      highlight: "Portfolio"
    },
    subtitle: "Real projects, real results. See how we've helped funded startups and SMBs",
    subtitleHighlight: " ship production software",
    subtitleEnd: " with integrations and automations.",
    trustIndicators: [
      { id: "live", text: "Live in Production" },
      { id: "integrations", text: "Seamless Integrations" },
      { id: "automation", text: "Automated Workflows" }
    ]
  },
  showcase: {
    title: {
      part1: "Our",
      highlight: "Portfolio"
    },
    subtitle: "Custom software solutions across multiple industries - from MVPs to full-scale applications."
  },
  cta: {
    title: {
      part1: "Ready to Join Our",
      highlight: "Success Stories",
      part2: "?"
    },
    subtitle: "Hire us directly on Upwork for the fastest project start. Or schedule a call for",
    subtitleHighlight: " larger custom development",
    subtitleEnd: " projects.",
    primary: {
      text: "Hire on Upwork",
      href: URLS.upwork,
      ariaLabel: "Hire Minoqtopus on Upwork"
    },
    secondary: {
      text: "Schedule a Call",
      href: URLS.calendly,
      ariaLabel: "Schedule a call with Minoqtopus"
    },
    trustIndicators: [
      { id: "delivery", text: "Fast Delivery Timeline" },
      { id: "expertise", text: "Full-Stack Expertise" },
      { id: "consultation", text: "Free Consultation" }
    ]
  }
} as const;