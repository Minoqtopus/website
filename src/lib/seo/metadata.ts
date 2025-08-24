import { Metadata } from 'next';

interface GenerateMetadataParams {
  title?: string;
  description?: string;
  keywords?: string;
  path?: string;
  image?: string;
}

const DEFAULT_TITLE = "Minoqtopus - Build Your MVP in 4 Weeks | Rapid Software Development";
const DEFAULT_DESCRIPTION = "Transform your startup idea into a production-ready MVP in just 28 days. Expert software development with enterprise-grade security, scalable architecture, and proven results. Get to market 6x faster.";
const DEFAULT_KEYWORDS = "MVP development, rapid prototyping, startup development, software development, 4 week MVP, minimum viable product, agile development, web application development, mobile app development, SaaS development";
const BASE_URL = "https://minoqtopus.com";

export function generateMetadata({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  keywords = DEFAULT_KEYWORDS,
  path = "/",
  image = "/images/brand/logo.png" // Fallback until og-image.png is created
}: GenerateMetadataParams = {}): Metadata {
  const url = `${BASE_URL}${path}`;
  const imageUrl = image.startsWith('http') ? image : `${BASE_URL}${image}`;

  return {
    title,
    description,
    keywords,
    authors: [{ name: "Minoqtopus Inc." }],
    creator: "Minoqtopus Inc.",
    publisher: "Minoqtopus Inc.",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(BASE_URL),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: title.split(' | ')[0], // Use first part of title for OG
      description,
      url,
      siteName: 'Minoqtopus',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title.split(' | ')[0],
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title.split(' | ')[0],
      description: description.substring(0, 200), // Twitter limits description
      images: [imageUrl],
      creator: '@minoqtopus',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

// Page-specific metadata generators (only home page needed for landing page)
export const pageMetadata = {
  home: () => generateMetadata({
    keywords: `${DEFAULT_KEYWORDS}, startup launch, tech startup, software agency, rapid development, product development, minimum viable product development, startup consulting`
  }),
  
  // Additional page metadata generators can be added here when expanding to multi-page site
};