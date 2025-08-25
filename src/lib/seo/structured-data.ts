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
  "description": "Transform your startup idea into a production-ready MVP in just 28 days. Expert software development with enterprise-grade security and scalable architecture.",
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
    "name": "MVP Development",
    "description": "Build your minimum viable product in 4 weeks",
    "price": "Contact for pricing",
    "priceCurrency": "USD"
  }
});

// Additional structured data functions can be added here when needed for other pages