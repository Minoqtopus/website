import { URLS } from "@/config/urls";

export const homeCopy = {
  hero: {
    logoAlt: "Minoqtopus",
    title: {
      part1: "Ship",
      highlight: "Production Software",
      part2: "in Weeks"
    },
    subtitle: "We build custom software that integrates with your stack and automates your workflows. Full-lifecycle development delivered in",
    subtitleHighlight: "weeks, not months",
    subtitleEnd: ". For funded startups and growing businesses.",
    cta: {
      primary: {
        text: "View Our Work",
        href: URLS.portfolio,
        ariaLabel: "View our portfolio of completed projects"
      },
      secondary: {
        text: "Quick Chat",
        href: URLS.calendly,
        ariaLabel: "Schedule a quick chat to discuss your project"
      }
    },
    trustIndicators: [
      {
        id: "integrations",
        text: "Third-Party Integrations"
      },
      {
        id: "automations",
        text: "Workflow Automations"
      }
    ]
  }
} as const;