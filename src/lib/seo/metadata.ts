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

// Enhanced page-specific metadata generators
export const pageMetadata = {
  home: () => generateMetadata({
    keywords: `${DEFAULT_KEYWORDS}, startup launch, tech startup, software agency, rapid development, product development, minimum viable product development, startup consulting`
  }),
  
  about: () => generateMetadata({
    title: "About Minoqtopus - Expert MVP Development Team | 4-Week Launch Specialists",
    description: "Meet the Minoqtopus team of expert developers, designers, and strategists. 50+ successful MVP launches, 95% client satisfaction rate, and proven 4-week delivery methodology.",
    keywords: "MVP development team, startup developers, software development company, agile development team, experienced developers, startup consultants, tech team",
    path: "/about"
  }),
  
  services: () => generateMetadata({
    title: "MVP Development Services - Web, Mobile & SaaS | 4-Week Delivery Guarantee",
    description: "Complete MVP development services: Web applications, mobile apps, SaaS platforms, API development, UI/UX design. Fixed timeline, transparent pricing, enterprise security.",
    keywords: "MVP development services, web app development, mobile app development, SaaS development, API development, startup services, custom software development",
    path: "/services"
  }),
  
  portfolio: () => generateMetadata({
    title: "Portfolio - 50+ Successful MVP Launches & Client Success Stories",
    description: "Explore our portfolio of successful MVP launches across fintech, healthcare, e-commerce, and SaaS. Real case studies, client testimonials, and launch metrics.",
    keywords: "MVP portfolio, startup success stories, client case studies, successful launches, MVP examples, startup portfolio, development case studies",
    path: "/portfolio"
  }),
  
  contact: () => generateMetadata({
    title: "Get Started - Free MVP Consultation & Quote | Minoqtopus",
    description: "Ready to build your MVP in 4 weeks? Book a free consultation, get a detailed quote, and discover how we can launch your startup idea fast.",
    keywords: "MVP consultation, startup consultation, free quote, get started, contact developers, hire MVP team, startup development quote",
    path: "/contact"
  }),

  // Blog and content pages
  blog: (slug?: string, title?: string, description?: string) => generateMetadata({
    title: title ? `${title} | Minoqtopus Blog` : "Startup Development Blog - MVP Insights & Best Practices",
    description: description || "Expert insights on MVP development, startup strategies, tech trends, and product launch best practices from the Minoqtopus team.",
    keywords: "startup blog, MVP development insights, startup advice, product development blog, tech startup blog, development best practices",
    path: slug ? `/blog/${slug}` : "/blog"
  }),

  // Legal pages
  privacy: () => generateMetadata({
    title: "Privacy Policy | Minoqtopus",
    description: "Minoqtopus privacy policy - How we collect, use, and protect your personal information and project data.",
    path: "/privacy"
  }),

  terms: () => generateMetadata({
    title: "Terms of Service | Minoqtopus",
    description: "Minoqtopus terms of service - Service agreements, project terms, and conditions for MVP development services.",
    path: "/terms"
  })
};