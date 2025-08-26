import { StructuredData } from '@/types';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://minoqtopus.com";
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || "Minoqtopus";
const CALENDLY_URL = process.env.NEXT_PUBLIC_CALENDLY_URL || "https://calendly.com/minoqtopus/30min";
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://www.linkedin.com/company/minoqtopus-inc/";

// Default organization structured data
export const getOrganizationStructuredData = (): StructuredData => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_NAME,
  "url": SITE_URL,
  "logo": `${SITE_URL}/images/brand/logo.png`,
  "description": "Full-lifecycle software development agency for funded startups and SMBs. Custom applications with third-party integrations and workflow automations. Ship in weeks, not months.",
  "sameAs": [
    LINKEDIN_URL
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "url": CALENDLY_URL
  },
  "offers": {
    "@type": "Offer",
    "name": "Custom Software Development",
    "description": "Full-lifecycle development with integrations and automations",
    "price": "Contact for pricing",
    "priceCurrency": "USD"
  }
});

// Additional structured data functions can be added here when needed for other pages