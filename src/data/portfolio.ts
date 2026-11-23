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
  // Left out when no source records a decision. The page then shows no Key Decision box.
  keyDecision?: string;
  stack: string[];
  result: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

// The one project count the site shows (home hero, About, Process). It was "15+" until
// 2026-11-23, when the project list grew to 24. Change it here only.
export const projectsDelivered = "20+";

export const caseStudies: CaseStudy[] = [
  {
    id: "sales-checklist",
    slug: "sales-checklist",
    name: "Sales Checklist",
    url: "https://saleschecklist.app",
    domain: "B2B SaaS / AI Sales Coaching / Call Analysis",
    category: "AI & Data",
    thumbnail: "/case-studies/optimized/sales-checklist-thumbnail-4x3.jpg",
    tagline: "AI sales coaching that scores every call against a checklist.",
    overview:
      "Sales Checklist is an AI sales coaching platform. A rep records or uploads a sales call. The system transcribes it, scores the conversation against a 10-point qualification checklist with evidence from the call, assigns a risk band, and returns coaching and a PDF report. Managers get team dashboards.",
    challenge:
      "A score is only useful if the rep trusts it. Each checklist item is scored Yes or No against what was actually said on the call, so the result is evidence, not the model's opinion of the deal.",
    contribution:
      "The entire product from zero: data model, API, background jobs, frontend, AWS infrastructure, and deployments. That includes audio recording and upload with offline sync, the transcription and scoring pipeline, coaching and PDF reports, organizations with rep, manager, executive, and admin roles, and the manager dashboards.",
    keyDecision:
      "Transcription and AI scoring run in background workers, not in the web request. A long recording never blocks the app, and the rep can keep working while the call is processed.",
    stack: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Celery", "OpenAI", "AWS ECS Fargate", "GitHub Actions"],
    result:
      "Live at saleschecklist.app on AWS, with separate staging and production environments. An ongoing engagement since November 2025.",
    featured: true,
    metrics: [
      { label: "Checklist", value: "10-point" },
      { label: "User roles", value: "4" },
    ],
  },
  {
    id: "legal-websites",
    slug: "legal-websites",
    name: "Legal Information Websites",
    url: "https://401klawyer.com",
    domain: "Legal / Content Websites / Programmatic SEO",
    category: "Content & SEO",
    thumbnail: "/case-studies/optimized/legal-websites-thumbnail-4x3.jpg",
    tagline: "Four legal information websites, more than 480 pages, all live.",
    overview:
      "Four legal information websites for a US legal marketing client: 401kLawyer.com, Surrogate Compass, Military Justice Defense Group, and sexabuselawyerscalifornia.com. More than 480 content pages on Astro, Payload CMS, and Vercel.",
    challenge:
      "Legal pages cannot carry a wrong citation or a wrong claim. Pages drafted by an AI content engine had to be checked before any of them went live.",
    contribution:
      "The four site builds and their deployments, and the page publishing through the client's AI content engine, with added quality checks that hold a page before it goes live. Also a six-step case review form, a plan search, 301 redirects from the old site, lead email delivery, and Google Analytics.",
    keyDecision:
      "When a wording rule kept failing in the AI prompt, it was enforced in the site's render layer with a test. A rule in code cannot be skipped; a rule in a prompt can.",
    stack: ["Astro", "Payload CMS", "TypeScript", "Tailwind CSS", "Vercel", "Brevo", "Google Analytics"],
    result:
      "All four sites are live. The contract closed in November 2026 with a 5.0 client rating.",
    featured: true,
    metrics: [
      { label: "Sites live", value: "4" },
      { label: "Pages", value: "480+" },
    ],
  },
  {
    id: "wild-ai",
    slug: "wild-ai",
    name: "Wild.AI",
    url: "https://wild.ai",
    domain: "FemTech / Health / Web Platform",
    category: "Healthcare",
    thumbnail: "/case-studies/optimized/wildai-thumbnail-4x3.jpg",
    tagline: "Hormone-aware AI for women athletes, acquired by Zepp Health (NYSE: ZEPP).",
    overview:
      "Wild.AI helps women athletes train, eat, and recover around their hormonal cycle. Alongside the mobile app, the product has a web platform for coaches and athletes. Wild.AI was later acquired by Zepp Health.",
    challenge:
      "Hormonal cycle data is complex and sensitive. Coaches and athletes needed it turned into reports and dashboards they could read and act on.",
    contribution:
      "Led the web engineering: a coach platform for managing athletes and reading menstrual cycle and performance reports, an athlete dashboard with training plans and cycle reports, and an in-app store with partner discounts and subscriptions. Built on Next.js and React with Redux, a Node.js and Strapi backend, and Stripe payments.",
    keyDecision:
      "Used Redux as the single place for application state, so sensitive health data is handled the same way across the coach and athlete dashboards.",
    stack: ["Next.js", "React", "Redux", "Node.js", "Strapi", "Stripe"],
    result:
      "The coach and athlete platform launched and ran in production. Wild.AI was later acquired by Zepp Health, a NYSE-listed wearable company.",
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
      "Impactly is an ESG and sustainability data platform. Organizations collect impact data, track outcomes, and generate reports for stakeholders and investors. Today the product offers structured company data such as Scope 1-3 GHG emissions and SFDR PAI metrics.",
    challenge:
      "ESG reporting is a complex, manual process, and impact data arrives from many industries in different shapes. It had to be collected, kept secure, and turned into reports people can use.",
    contribution:
      "A full web platform for sustainability reporting: flows for collecting impact data and tracking outcomes, data visualization dashboards, and report generation for stakeholders and investors. Built with Next.js, Python, and Django, with Elasticsearch, on a microservice architecture.",
    stack: ["Next.js", "Python", "Django", "Elasticsearch", "Microservices"],
    result:
      "A production platform that organizations use to report on sustainability and impact.",
    featured: true,
    metrics: [
      { label: "Focus", value: "ESG reporting" },
      { label: "Architecture", value: "Microservices" },
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
      "Full-stack engineering across React, TypeScript, Node.js, Mapbox parcel visualization, MongoDB, and REST APIs, with Azure DevOps for delivery, shipping production features throughout an 8-month engagement.",
    keyDecision:
      "Built interactive Mapbox-powered parcel maps as a first-class surface alongside agreement and provisions workflows, so asset teams operate from one unified platform rather than disconnected tools.",
    stack: ["React", "TypeScript", "Node.js", "Mapbox", "MongoDB", "REST API", "Azure DevOps"],
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
    domain: "AI Assistant / Business Communication",
    category: "AI & Data",
    thumbnail: "/case-studies/optimized/alchemy-recovery-thumbnail-4x3.jpg",
    tagline: "AI assistant for secure, fast professional communication.",
    overview:
      "Alchemy Recovery is an AI-powered communication platform built to give secure, fast, and high-quality conversational experiences. It uses OpenAI to generate context-aware responses.",
    challenge:
      "Responses had to be fast, reliable, and secure enough for professional communication, not just plausible.",
    contribution:
      "The full application on Next.js and Supabase, the OpenAI integration, the prompt engineering behind the responses, and a chatbot architecture that can scale.",
    stack: ["Next.js", "Supabase", "OpenAI API", "Prompt engineering"],
    result: "A live AI assistant at alchemyrecovery.ai.",
    metrics: [
      { label: "Model", value: "OpenAI" },
      { label: "Backend", value: "Supabase" },
    ],
  },
  {
    id: "viasprout",
    slug: "viasprout",
    name: "ViaSprout",
    url: "https://viasprout.com",
    domain: "FinTech / Private Markets / Investor Platform",
    category: "FinTech",
    thumbnail: "/case-studies/optimized/sprout-thumbnail-4x3.jpg",
    tagline: "Connecting investors with private market funds and co-investments.",
    overview:
      "Sprout connects investors with private market funds and co-investment opportunities matched to what each investor is looking for.",
    challenge:
      "Individual investors and venture capital firms found onboarding hard when the platform was first adopted, and the backend had to be ready for growth in users.",
    contribution:
      "Led the backend: a NestJS application with Prisma and PostgreSQL, REST APIs for the frontend platform, simpler onboarding flows for investors and venture capital firms, Stripe payments, and deployment on AWS.",
    keyDecision:
      "Automated building, testing, and deployment with a CI/CD pipeline, so a release does not depend on manual steps.",
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "AWS"],
    result:
      "The backend application launched in production and supports the platform's investors and funds.",
    featured: true,
    metrics: [
      { label: "Role", value: "Backend lead" },
      { label: "Framework", value: "NestJS" },
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
    domain: "Wellbeing Tech / Mobile App",
    category: "Healthcare",
    thumbnail: "/case-studies/optimized/zensory-thumbnail-4x3.jpg",
    tagline: "Sensory wellbeing for focus, creativity, and neurodiversity.",
    overview:
      "Sensory wellbeing app for focus, creativity, relaxation, and positivity, with cyber mindfulness and neurodiversity tracks across web and mobile.",
    challenge:
      "The app had to take a user from stress to calm within a few minutes of use, so the interface had to be simple and fast on both iOS and Android.",
    contribution:
      "The cross-platform mobile app in React Native and TypeScript, with Redux for state management and Firebase for real-time sync and data storage, including the stress-relief, mindfulness, and productivity tools.",
    keyDecision:
      "One React Native codebase for iOS and Android, so both platforms get every feature at the same time.",
    stack: ["React Native", "TypeScript", "Redux", "Firebase Firestore"],
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
    domain: "FitTech / Booking / Multi-App Platform",
    category: "Healthcare",
    thumbnail: "/case-studies/optimized/oneaurum-portfolio-thumbnail-4x3.jpg",
    tagline: "Customer, coach, and admin apps for a multi-location strength studio.",
    overview:
      "AURUM offers 20-minute strength training with a personal coach across multiple studios. Behind it is a fitness platform with separate apps for customers, coaches, and admins on one shared backend.",
    challenge:
      "Three groups use the same data in different ways: customers book sessions and track workouts, coaches manage schedules and client progress, and admins run staff and franchise operations across locations.",
    contribution:
      "Booking through a Mindbody integration, workout tracking, role-based access with AWS Cognito, and scheduled jobs for sync, reminders, and reporting, on Node.js, GraphQL, AWS Lambda, and PostgreSQL.",
    keyDecision:
      "One shared backend for all three apps, so a booking or a workout is recorded once and every role sees the same data.",
    stack: ["Node.js", "GraphQL", "AWS Lambda", "AWS Cognito", "PostgreSQL", "Mindbody"],
    result: "A platform built to run studio operations across multiple locations.",
    metrics: [
      { label: "Apps", value: "3" },
      { label: "Reach", value: "Multi-location" },
    ],
  },
  {
    id: "monadd",
    slug: "monadd",
    name: "Monadd",
    url: "https://monadd.io",
    domain: "Consumer SaaS / Subscription Management",
    category: "FinTech",
    thumbnail: "/case-studies/optimized/monadd-thumbnail-4x3.jpg",
    tagline: "One place to discover and manage the services linked to your home.",
    overview:
      "Monadd is a platform for discovering and managing the services and subscriptions linked to a home, so residents handle their household accounts in one place.",
    challenge:
      "Residents had to connect, add, and list all their service providers before the product was useful, so onboarding had to be clear and quick.",
    contribution:
      "Led the frontend: the dashboard for discovering and managing services, the provider onboarding flow, Google sign-in, Stripe payments, and integrations with Google Maps, Google Analytics, and Hotjar.",
    keyDecision:
      "Built the interface from reusable components, so new screens could be assembled from existing parts.",
    stack: ["React", "TypeScript", "Redux", "Redux Saga", "Google Authentication", "Stripe"],
    result:
      "A production SaaS that gives residents one dashboard for their household services.",
    metrics: [
      { label: "Role", value: "Frontend lead" },
      { label: "Sign-in", value: "Google" },
    ],
  },
  {
    id: "agentkevin",
    slug: "agentkevin",
    name: "AgentKevin",
    domain: "HealthTech / AI Agents / HIPAA",
    category: "Healthcare",
    thumbnail: "/case-studies/optimized/agentkevin-thumbnail-4x3.jpg",
    tagline: "AI patient intake assistant for chiropractic clinics.",
    overview:
      "An AI assistant for chiropractic clinics that handles patient intake and education at any hour. Patients open it from a QR code or an iPad kiosk, ask questions against the clinic's own knowledge base, and describe their symptoms.",
    challenge:
      "Providers need the patient's context before the appointment starts, and patient data has to stay inside a HIPAA-aligned design the whole way.",
    contribution:
      "The assistant, a RAG pipeline over each clinic's knowledge base, structured visit summaries that sync to the clinic's EHR, and access by QR code or iPad kiosk, with secure data handling.",
    stack: ["Next.js", "TypeScript", "Supabase", "RAG pipeline", "Google Places API"],
    result:
      "Providers get a structured summary of each patient before the visit.",
    metrics: [
      { label: "Access", value: "QR + kiosk" },
      { label: "Design", value: "HIPAA-aligned" },
    ],
  },
  {
    id: "deftgpt",
    slug: "deftgpt",
    name: "DeftGPT",
    domain: "AI SaaS / LLM Tooling",
    category: "AI & Data",
    thumbnail: "/case-studies/optimized/deftgpt-thumbnail-4x3.jpg",
    tagline: "Multi-model AI SaaS with prompt templates and workspaces.",
    overview:
      "DeftGPT was a SaaS product where users worked with several LLM providers from one interface. The product has since been discontinued.",
    challenge:
      "Teams needed to change prompts without breaking the flows that already depended on them, across more than one model provider.",
    contribution:
      "The routing layer that sends each request to the right model, versioned prompt templates, and workspace management for organizing users and their work.",
    keyDecision:
      "Prompt templates are versioned, so a team can change a prompt while existing flows keep working.",
    stack: ["Next.js", "Node.js", "OpenAI API", "LangChain", "PostgreSQL"],
    result:
      "AI features shipped inside a product that already had users.",
    metrics: [
      { label: "Routing", value: "Multi-model" },
      { label: "Prompts", value: "Versioned" },
    ],
  },
  {
    id: "nostudio",
    slug: "nostudio",
    name: "NoStudio",
    domain: "AI / E-commerce / Generative Imagery",
    category: "AI & Data",
    thumbnail: "/case-studies/optimized/nostudio-thumbnail-4x3.jpg",
    tagline: "AI product photography for fashion brands.",
    overview:
      "A SaaS platform where fashion brands generate photorealistic product images and virtual try-on visuals without a physical photoshoot.",
    challenge:
      "Image rendering takes time, so it could not block the app, and each brand's assets, credits, and team had to stay separate.",
    contribution:
      "Credit-based billing with Stripe, an asynchronous rendering pipeline, a dashboard for assets, history, and team collaboration, multi-tenant storage, and bulk export for stores on Shopify and WooCommerce.",
    stack: ["Next.js", "Supabase", "Stripe", "AI image generation", "Google Cloud Platform"],
    result:
      "Brands create product visuals in minutes without a physical photoshoot.",
    metrics: [
      { label: "Billing", value: "Credit-based" },
      { label: "Rendering", value: "Async" },
    ],
  },
  {
    id: "podplanner",
    slug: "podplanner",
    name: "PodPlanner",
    domain: "B2B SaaS / Media / Internal Tooling",
    category: "SaaS",
    thumbnail: "/case-studies/optimized/podplanner-thumbnail-4x3.jpg",
    tagline: "Production workspace for podcast teams running several shows.",
    overview:
      "An internal workspace for podcast teams that run several shows at once. It replaces scattered tools with one system that tracks each episode from idea to publishing.",
    challenge:
      "With several shows in production at once, nobody could see at a glance which episodes were on track and which needed attention.",
    contribution:
      "Episode dashboards with filters and search, a structured planning editor, role-based access, comments and notifications, platform link tracking, health status indicators, a readiness score, and AI-generated show notes from transcripts.",
    stack: ["Next.js", "TypeScript", "PostgreSQL", "LangChain", "OpenAI API"],
    result:
      "One workspace in place of scattered tools, with a clear view of every episode's status.",
    metrics: [
      { label: "Scope", value: "Multi-show" },
      { label: "Show notes", value: "AI-generated" },
    ],
  },
  {
    id: "forestly",
    slug: "forestly",
    name: "Forest.ly",
    url: "https://forest.ly",
    domain: "Sustainability / GreenTech",
    category: "SaaS",
    thumbnail: "/case-studies/optimized/forestly-thumbnail-4x3.jpg",
    tagline: "Bilingual climate protection platform with an admin dashboard.",
    overview:
      "Forest.ly is a climate protection platform built around forest restoration, with a German and English website and an admin dashboard.",
    challenge:
      "The platform had to work fully in two languages and take payments securely, with an admin side for running it day to day.",
    contribution:
      "Built from scratch: the bilingual website in Next.js with internationalization, a React admin dashboard with data visualizations, a Node.js REST API with Stripe payments, and deployment on AWS with GitHub Actions.",
    stack: ["Next.js", "React", "Node.js", "Express.js", "Stripe", "Cloudinary", "GitHub Actions"],
    result:
      "Live at forest.ly in German and English.",
    metrics: [
      { label: "Languages", value: "2" },
      { label: "Payments", value: "Stripe" },
    ],
  },
  {
    id: "youvouch",
    slug: "youvouch",
    name: "YouVouch",
    domain: "Professional Networking / Trust",
    category: "SaaS",
    thumbnail: "/case-studies/optimized/youvouch-thumbnail-4x3.jpg",
    tagline: "Professional networking built on vouching.",
    overview:
      "YouVouch is a professional networking platform built on vouching. Members vouch for each other and get introduced to people who can refer clients or mentor them.",
    challenge:
      "The product needed a web app and a mobile app that share the same data and sign-in.",
    contribution:
      "Led full-stack development of the React web app and the React Native mobile app, on Node.js and Firebase (Authentication, Firestore, Cloud Storage) with the OpenAI API.",
    stack: ["React", "React Native", "TypeScript", "Node.js", "Firebase", "OpenAI API"],
    result:
      "A web and mobile product in production.",
    metrics: [
      { label: "Clients", value: "Web + Mobile" },
      { label: "Backend", value: "Firebase" },
    ],
  },
  {
    id: "ai-support-agent",
    slug: "ai-support-agent",
    name: "AI Support Agent",
    domain: "AI Automation / Customer Support / RAG",
    category: "Automation",
    thumbnail: "/case-studies/optimized/customer-support-agent-thumbnail-4x3.jpg",
    tagline: "First-line support automation with n8n and RAG.",
    overview:
      "A plug-and-play AI support agent built in n8n. It answers repetitive first-line support questions from the company's own documentation.",
    challenge:
      "Repetitive first-line questions took up the support team's time, while unusual cases still needed a person.",
    contribution:
      "An n8n workflow that uses RAG to match each question against company documentation and draft an accurate answer, with escalation to a person for cases the documentation does not cover.",
    stack: ["n8n", "RAG", "Vector embeddings", "Gmail API"],
    result:
      "Routine questions are answered from documentation, and edge cases go to a person.",
    metrics: [
      { label: "Answers", value: "RAG-grounded" },
      { label: "Fallback", value: "Human" },
    ],
  },
  {
    id: "ai-voice-assistant",
    slug: "ai-voice-assistant",
    name: "AI Voice Assistant",
    domain: "AI Automation / Voice / Research",
    category: "Automation",
    thumbnail: "/case-studies/optimized/voice-ai-telegram-thumbnail-4x3.jpg",
    tagline: "Voice-to-voice research assistant on Telegram.",
    overview:
      "A voice-to-voice AI assistant on Telegram for research without typing or switching apps.",
    challenge:
      "Speech in, web research, and speech out had to work as one flow, including converting audio formats between services.",
    contribution:
      "An n8n pipeline that connects Telegram, ElevenLabs for speech, an LLM through OpenRouter, and Perplexity for search, with audio format conversion and asynchronous orchestration on a webhook-based design.",
    stack: ["n8n", "Telegram", "ElevenLabs", "OpenRouter", "Perplexity"],
    result:
      "A user sends a voice message and gets a researched answer back in speech.",
    metrics: [
      { label: "Interface", value: "Voice" },
      { label: "Channel", value: "Telegram" },
    ],
  },
  {
    id: "whatsapp-ai-assistant",
    slug: "whatsapp-ai-assistant",
    name: "WhatsApp AI Assistant",
    domain: "AI Automation / Multi-Agent / Productivity",
    category: "Automation",
    thumbnail: "/case-studies/optimized/whatsapp-ai-concierge-thumbnail-4x3.jpg",
    tagline: "Multi-agent assistant on WhatsApp with n8n and Gemini.",
    overview:
      "A multi-agent assistant on WhatsApp. Users schedule meetings, manage calendars, and query Google Workspace in plain language.",
    challenge:
      "One chat has to handle very different requests, so each message must reach the agent that can do the job.",
    contribution:
      "A router agent that detects intent and passes each request to a specialized agent, n8n workflow orchestration, Gemini for reasoning, conversation memory, asynchronous task handling, and a hand-off to a person when needed.",
    stack: ["n8n", "Gemini", "WhatsApp", "Google Calendar API", "Google Workspace APIs"],
    result:
      "Scheduling and workspace lookups happen in chat, with less manual work and app switching.",
    metrics: [
      { label: "Design", value: "Multi-agent" },
      { label: "Channel", value: "WhatsApp" },
    ],
  },
  {
    id: "ai-code-review-bot",
    slug: "ai-code-review-bot",
    name: "AI Code Review Bot",
    domain: "AI Automation / DevOps / Code Review",
    category: "Automation",
    thumbnail: "/case-studies/optimized/code-review-bot-thumbnail-4x3.jpg",
    tagline: "Pull request reviews on GitHub with Gemini.",
    overview:
      "An AI code review system for GitHub. It reviews each pull request and posts structured feedback as comments.",
    challenge:
      "Reviews had to start on their own for every pull request and keep working under API rate limits and errors.",
    contribution:
      "A webhook-triggered workflow that reads the diff through the GitHub API, generates feedback with Google Gemini, posts structured comments on the pull request, and can label it, with error handling and rate limiting.",
    stack: ["n8n", "GitHub API", "Gemini", "Webhooks"],
    result:
      "Every pull request gets a first review without anyone asking for it.",
    metrics: [
      { label: "Trigger", value: "Pull request" },
      { label: "Model", value: "Gemini" },
    ],
  },
  {
    id: "lead-generation-pipeline",
    slug: "lead-generation-pipeline",
    name: "Lead Generation & Outreach Pipeline",
    domain: "AI Automation / Sales / Outreach",
    category: "Automation",
    thumbnail: "/case-studies/optimized/b2b-leads-automation-thumbnail-4x3.jpg",
    tagline: "Slack-triggered prospecting automation in n8n.",
    overview:
      "An automation pipeline that replaces manual prospecting for sales teams. One Slack command starts it.",
    challenge:
      "Building prospect lists by hand took hours, and only verified, non-duplicate contacts should reach a campaign.",
    contribution:
      "A workflow that pulls leads from Apollo, validates email addresses with Million Verifier, and enrolls verified contacts into SmartReach sequences, with filtering, de-duplication, conditional routing, and data backups.",
    stack: ["n8n", "Slack", "Apollo.io", "Million Verifier", "SmartReach", "Amazon S3"],
    result:
      "One Slack command takes a team from a search to enrolled, verified contacts.",
    metrics: [
      { label: "Trigger", value: "Slack command" },
      { label: "Emails", value: "Verified" },
    ],
  },
  {
    id: "x-automation",
    slug: "x-automation",
    name: "Multi-Language X Automation",
    domain: "AI Automation / Social Media / Localization",
    category: "Automation",
    thumbnail: "/case-studies/optimized/ai-content-engine-thumbnail-4x3.jpg",
    tagline: "Daily posts in five languages with n8n and Claude.",
    overview:
      "A social media pipeline that turns product URLs in a Google Sheet into daily posts in five languages across several X accounts.",
    challenge:
      "Each account needs its own API setup and its own language, and a failed post must not stop the rest.",
    contribution:
      "Scraping, copywriting, translation, image processing, and scheduled posting from start to finish, with Claude writing the localized content, per-account API setup, retry logic, and error handling.",
    stack: ["n8n", "Claude", "X API", "Google Sheets", "Web scraping"],
    result:
      "Delivered as a portable n8n workflow that a non-technical team can run.",
    metrics: [
      { label: "Languages", value: "5" },
      { label: "Source", value: "Google Sheets" },
    ],
  },
  {
    id: "ultimate-media-agent",
    slug: "ultimate-media-agent",
    name: "Ultimate Media Agent",
    domain: "AI Automation / Multi-Agent / Media",
    category: "Automation",
    thumbnail: "/case-studies/optimized/ultimate-media-agent-thumbnail-4x3.jpg",
    tagline: "Multi-agent media automation in n8n.",
    overview:
      "A multi-agent automation system in n8n that replaces slow, manual media workflows, from content ingestion to publishing.",
    challenge:
      "Media work crossed many tools: messages, files, email, image and video creation, and posting to several platforms.",
    contribution:
      "A lead agent that takes a Telegram message and hands the work to specialized agents for email, Google Drive, creative work, and posting. It connects Telegram, Google Workspace, OpenAI, and Apify, publishes to platforms including X, TikTok, and Instagram, and logs each run.",
    stack: ["n8n", "OpenAI", "Telegram", "Google Workspace", "Apify", "LangChain"],
    result:
      "Content goes from a Telegram message to published posts through one automated pipeline.",
    metrics: [
      { label: "Design", value: "Multi-agent" },
      { label: "Entry", value: "Telegram" },
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((p) => p.slug === slug);
}
