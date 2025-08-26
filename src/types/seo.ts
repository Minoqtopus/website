// SEO Type Definitions (simplified for landing page needs)

export interface MetadataConfig {
  title: string;
  description: string;
  keywords?: string;
  path: string;
  image?: string;
}

export interface StructuredData {
  "@context": string;
  "@type": string;
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: {
    "@type": string;
    contactType: string;
    url: string;
  };
  offers?: {
    "@type": string;
    name: string;
    description: string;
    price: string;
    priceCurrency: string;
  };
}