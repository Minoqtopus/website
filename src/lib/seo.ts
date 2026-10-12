import type { Metadata } from "next";

const CANONICAL_SITE_URL = "https://minoqtopus.com";

function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }
  return CANONICAL_SITE_URL;
}

export const SITE_URL = getSiteUrl();
export const SITE_NAME = "Minoqtopus";

export const SEO_KEYWORDS = [
  "software company",
  "software engineering company",
  "custom software development",
  "software development agency",
  "IT business",
  "IT company",
  "IT services company",
  "software engineering company",
  "custom software company",
  "hire software engineers",
  "remote software development team",
  "full-stack development company",
  "web development company",
  "mobile app development company",
  "SaaS development company",
  "enterprise software development",
  "digital product development",
  "software outsourcing",
  "tech consulting company",
  "Minoqtopus software",
  "Minoqtopus LLC",
  "startup software development",
  "React development company",
  "Next.js development",
  "AI software development",
  "cloud software development",
  "product engineering studio",
  "software consultancy",
  "Minoqtopus",
];

// OG/Twitter preview images are served via src/app/opengraph-image.jpg
// and src/app/twitter-image.jpg so they resolve on the current deployment host.

interface PageSeoOptions {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  type?: "website" | "article";
}

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  type = "website",
}: PageSeoOptions): Metadata {
  const url = `${SITE_URL}${path}`;
  const mergedKeywords = Array.from(new Set([...SEO_KEYWORDS, ...keywords]));

  return {
    title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type,
      locale: "en_US",
      images: [
        {
          url: `${SITE_URL}/og.jpg`,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — custom software development company`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}/og.jpg`],
    },
  };
}

export const homeMetadata = createPageMetadata({
  title: "Minoqtopus | Custom Software Development Company",
  description:
    "Minoqtopus LLC is a US-registered software company building custom web and mobile applications, SaaS products and AI integrations for startups and growing businesses.",
  path: "/",
  keywords: [
    "best software company",
    "top software development company",
    "Minoqtopus software company",
    "software company near me",
    "hire a software development company",
  ],
});

export const aboutMetadata = createPageMetadata({
  title: "About Minoqtopus LLC | Custom Software Company",
  description:
    "Minoqtopus LLC is a software company registered in Wyoming, USA, founded by Sheikh Muhammad Farooq. We build web, mobile, SaaS and AI products for startups and growing businesses.",
  path: "/about",
});

export const servicesMetadata = createPageMetadata({
  title: "Software Development Services | Minoqtopus Software Company",
  description:
    "Software development services from a leading IT company: full-stack engineering, mobile apps, cloud DevOps, product design, e-commerce, and AI solutions for growing businesses.",
  path: "/services",
  keywords: [
    "software development services",
    "IT development services",
    "custom software development company",
    "hire development team",
  ],
});

export const projectsMetadata = createPageMetadata({
  title: "Software Development Portfolio & Case Studies | Minoqtopus",
  description:
    "Real software projects delivered by Minoqtopus LLC across fintech, healthcare, energy tech and AI. Case studies with the stack, scope and outcome for each build.",
  path: "/projects",
  keywords: [
    "software portfolio",
    "development case studies",
    "software company projects",
  ],
});

export const contactMetadata = createPageMetadata({
  title: "Contact Minoqtopus | Hire a Software Development Company",
  description:
    "Contact Minoqtopus LLC to scope your project. Book a free consultation with a US-registered software company for web, mobile, SaaS and AI development.",
  path: "/contact",
  keywords: [
    "hire software company",
    "contact software developers",
    "software project inquiry",
  ],
});

export const jobsMetadata = createPageMetadata({
  title: "Careers | Minoqtopus",
  description:
    "Explore career opportunities at Minoqtopus. Apply for Lead Generation: Upwork Leads Expert and help grow a premium software engineering studio.",
  path: "/jobs",
  keywords: [
    "software company careers",
    "upwork leads expert",
    "lead generation jobs remote",
    "Minoqtopus jobs",
  ],
});

export function createCaseStudyMetadata(
  name: string,
  tagline: string,
  slug: string
): Metadata {
  return createPageMetadata({
    title: `${name} Case Study | Software Project by Minoqtopus`,
    description: `${tagline} See how Minoqtopus LLC, a US-registered software company, designed and delivered this product.`,
    path: `/projects/${slug}`,
    type: "article",
    keywords: [`${name} case study`, "software development portfolio"],
  });
}

export function createJobMetadata(
  title: string,
  summary: string,
  slug: string
): Metadata {
  return createPageMetadata({
    title: `${title} | Careers at Minoqtopus`,
    description: summary,
    path: `/jobs/${slug}`,
    type: "article",
    keywords: [title, "Minoqtopus careers", "remote jobs"],
  });
}

export function createJobApplyMetadata(
  title: string,
  slug: string
): Metadata {
  return createPageMetadata({
    title: `Apply: ${title} | Careers at Minoqtopus`,
    description: `Submit your application for ${title} at Minoqtopus.`,
    path: `/jobs/${slug}/apply`,
    keywords: [title, "job application", "Minoqtopus careers"],
  });
}
