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
  "freelance software developer",
  "freelance development team",
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
  "freelance business",
  "freelance software engineering",
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
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const homeMetadata = createPageMetadata({
  title: "Minoqtopus | Software Engineering Company & Freelance Development Studio",
  description:
    "Hire a world-class software company for custom web, mobile, SaaS, and AI development. Minoqtopus is a premium freelance business and IT engineering studio trusted by startups and enterprises.",
  path: "/",
  keywords: [
    "best software company",
    "top software development company",
    "freelance software company",
    "software company near me",
    "hire freelance developers",
  ],
});

export const aboutMetadata = createPageMetadata({
  title: "About Minoqtopus | Software Engineering Studio & IT Business",
  description:
    "Learn about Minoqtopus, a software engineering company and freelance development business delivering enterprise-grade digital products across fintech, healthcare, energy, and AI.",
  path: "/about",
});

export const servicesMetadata = createPageMetadata({
  title: "Software Development Services | Full-Stack, Mobile, Cloud & AI | Minoqtopus",
  description:
    "Software development services from a leading IT company: full-stack engineering, mobile apps, cloud DevOps, product design, e-commerce, and AI solutions for growing businesses.",
  path: "/services",
  keywords: [
    "software development services",
    "IT development services",
    "freelance development services",
    "hire development team",
  ],
});

export const projectsMetadata = createPageMetadata({
  title: "Software Development Portfolio & Case Studies | Minoqtopus",
  description:
    "Explore real software projects built by Minoqtopus: fintech, healthcare, energy tech, and AI platforms. Proof of delivery from a top freelance software engineering company.",
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
    "Contact Minoqtopus to start your project. Get a free consultation with a software engineering company and freelance development team for web, mobile, SaaS, and AI builds.",
  path: "/contact",
  keywords: [
    "hire software company",
    "contact software developers",
    "freelance project inquiry",
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
    description: `${tagline} See how Minoqtopus, a software engineering company and freelance development studio, delivered this product.`,
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
