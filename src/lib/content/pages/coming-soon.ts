import { URLS } from "@/config/urls";

export const comingSoonCopy = {
  hero: {
    title: {
      part1: "Amazing",
      highlight: "Products",
      part2: "Coming Soon"
    },
    subtitle: "We're crafting something special for you.",
    subtitleHighlight: " Premium digital solutions",
    subtitleEnd: " that will transform how you work and live.",
    cta: {
      primary: {
        text: "View Our Work",
        href: URLS.portfolio,
        ariaLabel: "View our portfolio of completed projects"
      },
      secondary: {
        text: "Work With Us",
        href: URLS.upwork,
        ariaLabel: "Work with us on Upwork"
      }
    },
    trustIndicators: [
      { id: "quality", text: "Premium Quality" },
      { id: "care", text: "Built with Care" },
      { id: "wait", text: "Worth the Wait" }
    ]
  }
} as const;