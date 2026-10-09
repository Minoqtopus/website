import { caseStudies } from "@/data/portfolio";
import { SITE_NAME, SITE_URL } from "@/lib/seo";
import { socialUrls } from "@/lib/social";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  legalName: "Minoqtopus LLC",
  url: SITE_URL,
  address: {
    "@type": "PostalAddress",
    streetAddress: "30 N Gould St, Ste R",
    addressLocality: "Sheridan",
    addressRegion: "WY",
    postalCode: "82801",
    addressCountry: "US",
  },
  logo: `${SITE_URL}/images/brand/logo.png`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  description:
    "Minoqtopus is a software engineering company and freelance development studio building web, mobile, SaaS, and AI products.",
  email: "minoqtopus.agency@gmail.com",
  sameAs: socialUrls,
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "minoqtopus.agency@gmail.com",
    availableLanguage: ["English"],
  },
  foundingDate: "2026-10-09",
  areaServed: "Worldwide",
  knowsAbout: [
    "Custom software development",
    "Web application development",
    "Mobile application development",
    "API integrations",
    "SaaS development",
    "AI integration",
  ],
};

// Declares the site's primary sections. Google uses this as one input when
// deciding whether to show sitelinks under the main result; it does not
// guarantee them, and the choice stays Google's.
const navigationSchema = [
  { name: "Services", path: "/services", description: "Full-stack engineering, mobile, cloud, AI and custom agent development." },
  { name: "Projects", path: "/projects", description: "Case studies from products we have designed, built and shipped." },
  { name: "About", path: "/about", description: "Who we are and how we run engagements." },
  { name: "Careers", path: "/jobs", description: "Open roles at Minoqtopus." },
  { name: "Contact", path: "/contact", description: "Start a project or book a consultation." },
].map((item) => ({
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: item.name,
  description: item.description,
  url: `${SITE_URL}${item.path}`,
}));

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description:
    "Premium software company and freelance IT business for custom software development.",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: `${SITE_URL}/projects?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/opengraph-image.jpg`,
  description:
    "Software engineering company offering freelance development, full-stack engineering, mobile apps, cloud infrastructure, and AI solutions.",
  areaServed: "Worldwide",
  priceRange: "$$$$",
  serviceType: [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "SaaS Development",
    "AI Development",
    "Cloud & DevOps",
    "Product Design",
    "Freelance Software Engineering",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Minoqtopus offer as a software company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minoqtopus offers full-stack software development, mobile app development, cloud and DevOps, product design, e-commerce solutions, and AI engineering for startups and enterprises.",
      },
    },
    {
      "@type": "Question",
      name: "Can I hire Minoqtopus as a freelance development team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Minoqtopus works as a freelance software engineering studio and dedicated development team, offering project-based delivery and long-term engineering partnerships.",
      },
    },
    {
      "@type": "Question",
      name: "What industries does this IT business serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Minoqtopus builds software for fintech, healthcare, energy, AI and data, SaaS, and enterprise clients across the US and globally.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start a project with Minoqtopus?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contact Minoqtopus through the website contact form or email minoqtopus.agency@gmail.com to schedule a consultation and receive a tailored project plan.",
      },
    },
  ],
};

const portfolioSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Minoqtopus Software Development Portfolio",
  itemListElement: caseStudies.map((study, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: `${SITE_URL}/projects/${study.slug}`,
    name: study.name,
  })),
};

export default function StructuredData() {
  const schemas = [
    organizationSchema,
    ...navigationSchema,
    websiteSchema,
    professionalServiceSchema,
    faqSchema,
    portfolioSchema,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
