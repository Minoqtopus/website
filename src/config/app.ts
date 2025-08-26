// App constants - only what's actually used
export const APP_CONFIG = {
  name: process.env.NEXT_PUBLIC_SITE_NAME || "Minoqtopus",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://minoqtopus.com",
  
  // Brand colors (from CSS variables)
  brandColor: "#1a7753",
  linkedinColor: "#0077B5",
  
  // External links
  calendlyUrl: process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/minoqtopus/30min",
  linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/minoqtopus-agency/",
  upworkUrl: process.env.NEXT_PUBLIC_UPWORK_URL || "https://www.upwork.com/freelancers/~your-upwork-profile-id",
  
  // Navigation
  navigation: {
    main: [
      { label: "Products", href: "/products" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    cta: {
      label: "Hire on Upwork",
      href: process.env.NEXT_PUBLIC_UPWORK_URL || "https://www.upwork.com/freelancers/~your-upwork-profile-id",
    },
  },
} as const;

// Feature flags
export const PRODUCTS_LIVE = process.env.NEXT_PUBLIC_PRODUCTS_LIVE === 'true';