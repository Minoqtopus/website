// Centralized URL configuration - single source of truth
// These are static values that won't cause hydration issues

export const URLS = {
  // External service URLs
  upwork: "https://www.upwork.com/freelancers/~0101c00d436731f83a/",
  calendly: "https://calendly.com/minoqtopus/30min",
  linkedin: "https://www.linkedin.com/company/minoqtopus-agency/",

  // Internal app routes
  portfolio: "/portfolio",
  contact: "/contact",
  products: "/products",
} as const;
