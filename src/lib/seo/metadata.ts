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
  image = "/images/brand/og-image.png"
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

// Page-specific metadata generators
export const pageMetadata = {
  home: () => generateMetadata(),
  
  about: () => generateMetadata({
    title: "About Minoqtopus - Expert MVP Development Team",
    description: "Learn about Minoqtopus, the team behind rapid MVP development. We help startups launch faster with enterprise-grade solutions.",
    path: "/about"
  }),
  
  services: () => generateMetadata({
    title: "Services - MVP Development, Web & Mobile Apps | Minoqtopus",
    description: "Our services include MVP development, web applications, mobile apps, and SaaS platforms. Launch your product in 4 weeks.",
    path: "/services"
  }),
  
  portfolio: () => generateMetadata({
    title: "Portfolio - Success Stories & Case Studies | Minoqtopus",
    description: "Explore our portfolio of successful MVP launches and client success stories. See how we help startups go from idea to market.",
    path: "/portfolio"
  }),
  
  contact: () => generateMetadata({
    title: "Contact Us - Start Your MVP Journey | Minoqtopus",
    description: "Ready to build your MVP? Contact Minoqtopus today for a free consultation. Transform your idea into reality in just 4 weeks.",
    path: "/contact"
  })
};