// SEO Type Definitions

export interface StructuredData {
  "@context": string;
  "@type": string;
  name?: string;
  url?: string;
  logo?: string;
  description?: string;
  sameAs?: string[];
  contactPoint?: ContactPoint;
  offers?: Offer;
}

export interface ContactPoint {
  "@type": string;
  contactType: string;
  url: string;
  telephone?: string;
  email?: string;
}

export interface Offer {
  "@type": string;
  name: string;
  description: string;
  price: string;
  priceCurrency: string;
}

export interface MetaTags {
  title: string;
  description: string;
  keywords?: string;
  author?: string;
  openGraph?: OpenGraphTags;
  twitter?: TwitterTags;
}

export interface OpenGraphTags {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images?: OpenGraphImage[];
  locale?: string;
  type?: string;
}

export interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

export interface TwitterTags {
  card: 'summary' | 'summary_large_image' | 'app' | 'player';
  title: string;
  description: string;
  images?: string[];
  creator?: string;
  site?: string;
}