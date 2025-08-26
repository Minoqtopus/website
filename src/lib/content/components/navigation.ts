import { URLS } from "@/config/urls";

export const navigationCopy = {
  main: [
    { label: "Products", href: URLS.products },
    { label: "Portfolio", href: URLS.portfolio },
    { label: "Contact", href: URLS.contact }
  ],
  cta: {
    label: "Hire on Upwork",
    href: URLS.upwork
  },
  ariaLabels: {
    toggleMenu: "Toggle mobile menu"
  },
  badges: {
    recommended: "Recommended"
  },
  symbols: {
    arrow: " →"
  }
} as const;