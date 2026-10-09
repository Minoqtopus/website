export interface Job {
  id: string;
  slug: string;
  title: string;
  department: string;
  location: string;
  type: string;
  duration: string;
  postedAt: string;
  summary: string;
  overview: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave: string[];
  whatYouWillLearn: string[];
  benefits: string[];
}

export const jobs: Job[] = [
  {
    id: "upwork-leads-expert",
    slug: "upwork-leads-expert",
    title: "Lead Generation: Upwork Leads Expert",
    department: "Business Development",
    location: "Remote",
    type: "Full-time / Part-time",
    duration: "Ongoing",
    postedAt: "2026-08-10",
    summary:
      "Own Upwork lead generation for Minoqtopus. Find high-intent buyers, craft winning proposals, and fill our pipeline with qualified software development opportunities.",
    overview:
      "Minoqtopus is a software engineering studio trusted by startups and enterprises worldwide. We are hiring an Upwork Leads Expert to drive consistent, high-quality inbound and outbound lead generation on Upwork. You will identify the right clients, write persuasive proposals, nurture conversations, and hand off qualified opportunities to our sales and delivery team. This role is ideal for someone who already understands Upwork dynamics, proposal conversion, and B2B software services sales, and wants to grow with a premium engineering brand.",
    responsibilities: [
      "Source and qualify Upwork jobs that match Minoqtopus services: custom software, web, mobile, SaaS, and AI product engineering.",
      "Write tailored, high-converting proposals that highlight relevant case studies, outcomes, and our studio strengths.",
      "Maintain a daily/weekly outreach cadence to meet agreed lead and proposal volume targets.",
      "Research client profiles, budgets, and project briefs to prioritize the strongest opportunities.",
      "Respond quickly to client messages, clarify scope, and move warm leads toward discovery calls.",
      "Track proposal performance, reply rates, interview rates, and closed opportunities in a simple CRM or sheet.",
      "Collaborate with founders and delivery leads to refine positioning, pricing signals, and proposal templates.",
      "Protect brand quality: only pursue clients and projects that fit our premium service standards.",
      "Stay current on Upwork algorithm changes, bidding strategies, and competitor activity.",
      "Report weekly on pipeline health: proposals sent, responses, interviews booked, and revenue potential.",
    ],
    requirements: [
      "Proven experience generating leads and winning work on Upwork for software development or digital agencies.",
      "Strong written English with the ability to write clear, persuasive, client-ready proposals.",
      "Solid understanding of software development services and how to match client needs to technical capabilities.",
      "Ability to qualify leads based on budget, timeline, scope clarity, and client seriousness.",
      "Self-driven remote work habits with reliable daily output and transparent reporting.",
      "Comfortable working toward measurable targets (proposals, replies, interviews, and closed deals).",
      "Honest track record of average monthly sales contribution you can discuss and validate.",
    ],
    niceToHave: [
      "Experience selling custom software, SaaS builds, or enterprise digital products.",
      "Familiarity with LinkedIn or other B2B channels for supplementary lead generation.",
      "Basic CRM hygiene and pipeline forecasting experience.",
      "Existing network or Top Rated / agency-side Upwork profile history.",
    ],
    whatYouWillLearn: [
      "How a premium software studio positions and prices complex engineering work.",
      "Proposal frameworks that convert high-intent Upwork buyers into discovery calls.",
      "Pipeline discipline across lead volume, quality, and close rates.",
      "Close collaboration with founders on go-to-market messaging and offer design.",
    ],
    benefits: [
      "Remote role with flexible full-time or part-time options.",
      "Direct access to founders and influence over growth strategy.",
      "Performance-aligned growth path based on qualified pipeline and closed revenue.",
      "Work with a premium brand and real enterprise-grade case studies.",
      "Clear targets, fast feedback loops, and transparent reporting culture.",
    ],
  },
];

export function getJob(slug: string): Job | undefined {
  return jobs.find((job) => job.slug === slug);
}

export function getJobApplyHref(slug: string): string {
  return `/jobs/${slug}/apply`;
}
