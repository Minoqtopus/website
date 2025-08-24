import { StructuredData } from '@/types';

// Default organization structured data
export const getOrganizationStructuredData = (): StructuredData => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Minoqtopus Inc.",
  "url": "https://minoqtopus.com",
  "logo": "https://minoqtopus.com/images/brand/logo.png",
  "description": "Transform your startup idea into a production-ready MVP in just 28 days. Expert software development with enterprise-grade security and scalable architecture.",
  "sameAs": [
    "https://www.linkedin.com/company/minoqtopus-inc/"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Sales",
    "url": "https://calendly.com/minoqtous-inc/discovery-call-minoqtopus"
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