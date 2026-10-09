export interface CaseStudy {
  id: string;
  slug: string;
  name: string;
  url?: string;
  domain: string;
  category: string;
  thumbnail?: string;
  tagline: string;
  overview: string;
  challenge: string;
  contribution: string;
  keyDecision: string;
  stack: string[];
  result: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "wild-ai",
    slug: "wild-ai",
    name: "Wild.AI",
    url: "https://wild.ai",
    domain: "FemTech / Health AI / Wearables",
    category: "Healthcare",
    thumbnail: "/case-studies/optimized/wildai-thumbnail-4x3.jpg",
    tagline: "Hormone-aware AI for women athletes, acquired by Zepp Health (NYSE: ZEPP).",
    overview:
      "Wild.AI is a hormone-aware AI platform for women athletes, delivering personalized training, nutrition, and recovery guidance that adapts to hormonal and biometric patterns. The product integrates wearable data and scaled to acquisition-level traction.",
    challenge:
      "Handling the sensitivity and variability of hormonal data at scale, recommendations had to be personalized per user per cycle phase, not averaged across users.",
    contribution:
      "Engineered core platform features and data pipelines that process biometric inputs and produce cycle-synced recommendations in real time.",
    keyDecision:
      "Built personalization pipelines around per-user, per-cycle-phase logic rather than population averages, critical for health AI credibility and user trust.",
    stack: [
      "Full-stack web + mobile",
      "AI/ML personalization",
      "Wearable integrations (Amazfit/Zepp)",
      "Health data pipelines",
    ],
    result:
      "Product scaled to production and was acquired by Zepp Health, a NYSE-listed wearable company, one of the strongest validation signals in the portfolio.",
    featured: true,
    metrics: [
      { label: "Outcome", value: "Acquired" },
      { label: "Acquirer", value: "NYSE: ZEPP" },
    ],
  },
  {
    id: "impactly",
    slug: "impactly",
    name: "Impactly",
    url: "https://impactly.eu",
    domain: "B2B Data Intelligence / ESG / Private Markets",
    category: "AI & Data",
    thumbnail: "/case-studies/optimized/impactly-thumbnail-4x3.jpg",
    tagline: "Corporate intelligence infrastructure for private market ESG data.",
    overview:
      "Corporate intelligence platform for private market data, automated ingestion from registries, counterparty risk assessment, ESG datapoints (Scope 1–3 GHG, SFDR PAI, EU Taxonomy KPIs), and comparative analytics.",
    challenge:
      "Private company data is fragmented and inconsistently structured across sources, normalization had to handle schema variance without breaking downstream analytics.",
    contribution:
      "Backend data pipelines ingesting diverse unstructured sources and normalizing them into decision-ready intelligence with ESG metrics as first-class fields.",
    keyDecision:
      "Structured the ESG data model to handle Scope 1–3 and EU Taxonomy KPIs as first-class fields rather than bolt-on metadata.",
    stack: ["Data ingestion pipelines", "NLP/AI document extraction", "PostgreSQL", "Analytics backend"],
    result:
      "Platform serves institutional clients needing reliable ESG and risk data on private companies, a dataset notoriously hard to source at scale.",
    featured: true,
    metrics: [
      { label: "Data scope", value: "ESG + Risk" },
      { label: "Sources", value: "Multi-registry" },
    ],
  },
  {
    id: "m1neral",
    slug: "m1neral",
    name: "M1neral",
    url: "https://m1neral.com",
    domain: "Energy Tech / Asset Management SaaS",
    category: "Energy",
    thumbnail: "/case-studies/optimized/m1neral-thumbnail-4x3.png",
    tagline: "Next-generation energy asset management for oil and gas operators.",
    overview:
      "M1neral is an asset management platform for energy companies and asset managers. Manage land agreements, contracts, key provisions and obligations, divisions of interest, and visualize asset data on an interactive map. Capture and enrich potential seller data, manage buying campaigns, send mailers, track active deals, and manage acquired assets in a single location. From initial project layout to surface agreement negotiation to managing touchpoints with landowners, teams leverage a fit-for-purpose project management solution built for the energy sector.",
    challenge:
      "Energy operators need agreement tracking, provision checklists, parcel mapping, and deal campaign workflows in one system, with land and asset data that must stay accurate across long-running acquisitions.",
    contribution:
      "Full-stack engineering across React, TypeScript, Node.js, Mapbox parcel visualization, PostgreSQL, and REST APIs, delivering production features throughout an 8-month engagement.",
    keyDecision:
      "Built interactive Mapbox-powered parcel maps as a first-class surface alongside agreement and provisions workflows, so asset teams operate from one unified platform rather than disconnected tools.",
    stack: ["React", "TypeScript", "Node.js", "Mapbox", "PostgreSQL", "REST API"],
    result:
      "Live platform serving the US energy sector with agreement lifecycle tracking, campaign management, and interactive asset mapping in production.",
    featured: true,
    metrics: [
      { label: "Engagement", value: "214 hrs" },
      { label: "Duration", value: "8 mo." },
    ],
  },
  {
    id: "alchemyrecovery",
    slug: "alchemyrecovery",
    name: "AlchemyRecovery AI",
    url: "https://alchemyrecovery.ai",
    domain: "HealthTech / AI Assistant / Recovery",
    category: "Healthcare",
    thumbnail: "/case-studies/optimized/alchemy-recovery-thumbnail-4x3.jpg",
    tagline: "Conversational AI for recovery workflows with clinical guardrails.",
    overview:
      "AI-powered recovery assistant, conversational AI guiding users through recovery workflows with habit tracking and protocol adherence.",
    challenge:
      "Recovery is a sensitive domain where generic LLM outputs are not acceptable, responses must stay clinically appropriate.",
    contribution:
      "Conversational AI with domain-specific knowledge grounding, structuring the knowledge base to prevent hallucinated advice.",
    keyDecision:
      "Implemented guardrails constraining the response surface to the verified knowledge base only.",
    stack: ["LLM integration", "Conversational AI", "Health knowledge base"],
    result:
      "Production AI assistant in a health-adjacent domain with controlled, safe response boundaries.",
    metrics: [
      { label: "Domain", value: "Recovery" },
      { label: "Safety", value: "KB-constrained" },
    ],
  },
  {
    id: "viasprout",
    slug: "viasprout",
    name: "ViaSprout",
    url: "https://viasprout.com",
    domain: "B2B SaaS / AI Data Rooms / Investor Tools",
    category: "FinTech",
    thumbnail: "/case-studies/optimized/sprout-thumbnail-4x3.jpg",
    tagline: "AI-powered smart data room for investors and founders.",
    overview:
      "AI-powered smart data room enabling secure document management, intelligent search, and deal-room workflows for investors and founders.",
    challenge:
      "Deal rooms require legally sensitive permissions, a permissions bug has real legal consequences.",
    contribution:
      "Core data room platform with AI-powered document search and server-side role-based access control at the document level.",
    keyDecision:
      "Server-side access enforcement, not just UI gating, non-negotiable in deal room contexts.",
    stack: ["Full-stack SaaS", "AI document intelligence", "RBAC", "Secure file management"],
    result:
      "Production SaaS serving investors and founders managing sensitive deal documents.",
    featured: true,
    metrics: [
      { label: "Access", value: "Document-level" },
      { label: "Search", value: "AI-powered" },
    ],
  },
  {
    id: "earlybirdgigs",
    slug: "earlybirdgigs",
    name: "EarlyBirdGigs",
    domain: "AI / Data Pipelines / Marketplace",
    category: "AI & Data",
    thumbnail: "/case-studies/optimized/earlybird-gigs-thumbnail-4x3.jpg",
    tagline: "AI property labeling pipeline processing thousands of images at scale.",
    overview:
      "Web app labeling properties needing services by processing thousands of property images using AI, full pipeline from image ingestion to queue management to search-ready storage.",
    challenge:
      "Processing thousands of images without choking the pipeline, results needed to be retrievable without blocking the UI.",
    contribution:
      "Entire AI pipeline, image queue, AI classification, PostgreSQL + Elasticsearch storage, responsive frontend, and payment flow.",
    keyDecision:
      "Elasticsearch for property search so users filter by service type, region, and classification confidence with sub-second response.",
    stack: ["Python AI", "PostgreSQL", "Elasticsearch", "React", "Mixpanel", "Winston/Logtail"],
    result:
      "AI pipeline processing thousands of property images in production with structured logging and payment funnel analytics.",
    metrics: [
      { label: "Volume", value: "1000s images" },
      { label: "Search", value: "Sub-second" },
    ],
  },
  {
    id: "thezensory",
    slug: "thezensory",
    name: "TheZensory",
    url: "https://thezensory.com",
    domain: "Wellbeing Tech / Neurodiversity",
    category: "Healthcare",
    thumbnail: "/case-studies/optimized/zensory-thumbnail-4x3.jpg",
    tagline: "Sensory wellbeing for focus, creativity, and neurodiversity.",
    overview:
      "Sensory wellbeing app for focus, creativity, relaxation, and positivity, with cyber mindfulness and neurodiversity tracks across web and mobile.",
    challenge:
      "Neurodivergent users have significantly different interaction patterns, navigation needed minimal cognitive load.",
    contribution:
      "Platform engineering for accessible, low-friction UX serving neurodiverse users and enterprise cyber mindfulness programs.",
    keyDecision:
      "Designed for minimal cognitive load, influenced loading states, content chunking, and navigation patterns throughout.",
    stack: ["React web app", "Mobile integration", "Content management", "User auth"],
    result:
      "Live web and mobile product with both B2C and B2B enterprise tracks for cyber sector clients.",
    featured: true,
    metrics: [
      { label: "Platforms", value: "Web + Mobile" },
      { label: "Tracks", value: "B2C & B2B" },
    ],
  },
  {
    id: "aurumfit",
    slug: "aurumfit",
    name: "AurumFit",
    url: "https://aurumfit.com",
    domain: "FitTech / Consumer Health / SaaS",
    category: "Healthcare",
    thumbnail: "/case-studies/optimized/oneaurum-portfolio-thumbnail-4x3.jpg",
    tagline: "Premium strength training platform across multi-location studios.",
    overview:
      "Premium strength training platform with 20-minute science-backed workouts, multi-location studio brand with digital product layer including blog, webinars, and training resources.",
    challenge:
      "Supporting a premium fitness brand's online presence and resource delivery across multiple physical studio locations.",
    contribution:
      "Digital platform engineering, training guides, scheduling integrations, and content infrastructure.",
    keyDecision:
      "Built content and scheduling infrastructure to scale with the brand's multi-location studio expansion.",
    stack: ["Web platform", "Content management", "Booking/scheduling integrations"],
    result:
      "Production platform supporting a premium fitness brand operating across multiple physical studio locations.",
    metrics: [
      { label: "Format", value: "20-min workouts" },
      { label: "Reach", value: "Multi-location" },
    ],
  },
  {
    id: "monadd",
    slug: "monadd",
    name: "Monadd",
    url: "https://monadd.io",
    domain: "FinTech / Consumer SaaS / Address Management",
    category: "FinTech",
    thumbnail: "/case-studies/optimized/monadd-thumbnail-4x3.jpg",
    tagline: "Notify every provider when you move, one platform, many integrations.",
    overview:
      "Platform for managing address changes across services, helping users notify multiple providers simultaneously when they move.",
    challenge:
      "Each provider has a different notification method, API, web form automation, or mail.",
    contribution:
      "Core platform with multi-provider integration layer using an adapter pattern.",
    keyDecision:
      "Adapter pattern for provider integrations so new providers are added without modifying core logic.",
    stack: ["Full-stack SaaS", "Third-party API integrations", "User account management"],
    result: "Consumer SaaS with multi-provider address update capability in production.",
    metrics: [
      { label: "Integrations", value: "Multi-provider" },
      { label: "Pattern", value: "Adapter" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((p) => p.slug === slug);
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "The data room needed document-level permissions enforced server-side, not just UI gating. That rigor was non-negotiable for our investors, and the platform delivers exactly that in production.",
    author: "ViaSprout Team",
    role: "Product",
    company: "ViaSprout",
    avatar: "VS",
  },
  {
    quote:
      "Building personalization on hormonal and biometric data at scale is genuinely hard. The pipelines engineered let us deliver cycle-synced recommendations in real time, a core reason we reached acquisition-level traction.",
    author: "Wild.AI Engineering",
    role: "Product Engineering",
    company: "Wild.AI",
    avatar: "WA",
  },
  {
    quote:
      "Private company ESG data is fragmented and messy. The normalization layer built for Impactly handles schema variance across registries without breaking downstream analytics, exactly what institutional clients need.",
    author: "Impactly Team",
    role: "Data Platform",
    company: "Impactly",
    avatar: "IM",
  },
  {
    quote:
      "Neurodivergent users interact differently, we needed minimal cognitive load everywhere. The platform engineering for TheZensory reflects that care, from navigation to loading states across web and mobile.",
    author: "TheZensory Team",
    role: "Product",
    company: "TheZensory",
    avatar: "TZ",
  },
];
