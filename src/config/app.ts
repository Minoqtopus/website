// App constants - only what's actually used
export const APP_CONFIG = {
  name: "Minoqtopus",
  fullName: "Minoqtopus Inc.",
  url: "https://minoqtopus.com",
  
  // Brand colors (from CSS variables)
  brandColor: "#1a7753",
  linkedinColor: "#0077B5",
  
  // External links
  calendlyUrl: "https://calendly.com/minoqtopus/30min",
  linkedinUrl: "https://www.linkedin.com/company/minoqtopus-agency/",
  upworkUrl: "https://www.upwork.com/freelancers/~your-upwork-profile-id",
  
  // Navigation
  navigation: {
    main: [
      { label: "Products", href: "/products" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Contact", href: "/contact" },
    ],
    cta: {
      label: "Hire on Upwork",
      href: "https://www.upwork.com/freelancers/~your-upwork-profile-id",
    },
  },
} as const;