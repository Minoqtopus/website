export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  caseStudyUrl: string;
  liveUrl?: string;
  color: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "fintech-mvp",
    title: "FinTech Payment Platform",
    description: "Secure payment processing MVP with multi-currency support and real-time transaction tracking",
    category: "FinTech",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    caseStudyUrl: "https://notion.so/your-workspace/fintech-case-study",
    liveUrl: "https://fintech-platform.demo.com",
    color: "from-blue-500 to-blue-600"
  },
  {
    id: "saas-analytics",
    title: "SaaS Analytics Dashboard",
    description: "Comprehensive analytics platform with real-time metrics and user journey analysis",
    category: "SaaS",
    techStack: ["React", "Node.js", "MongoDB", "Chart.js"],
    caseStudyUrl: "https://notion.so/your-workspace/saas-analytics-case-study",
    liveUrl: "https://analytics-dashboard.demo.com",
    color: "from-purple-500 to-purple-600"
  },
  {
    id: "marketplace-mvp",
    title: "E-commerce Marketplace",
    description: "Full-featured marketplace connecting local artisans with global buyers",
    category: "E-commerce",
    techStack: ["Next.js", "Prisma", "PostgreSQL", "Stripe"],
    caseStudyUrl: "https://notion.so/your-workspace/marketplace-case-study",
    liveUrl: "https://artisan-marketplace.demo.com",
    color: "from-green-500 to-green-600"
  },
  {
    id: "healthcare-mvp",
    title: "Healthcare Scheduling System",
    description: "Patient appointment management with automated reminders and telehealth integration",
    category: "Healthcare",
    techStack: ["Vue.js", "Express", "MySQL", "Twilio"],
    caseStudyUrl: "https://notion.so/your-workspace/healthcare-case-study",
    color: "from-red-500 to-red-600"
  },
  {
    id: "education-platform",
    title: "Online Learning Platform",
    description: "Interactive course platform with video streaming and progress tracking",
    category: "EdTech",
    techStack: ["React", "Django", "PostgreSQL", "AWS"],
    caseStudyUrl: "https://notion.so/your-workspace/edtech-case-study",
    liveUrl: "https://learning-platform.demo.com",
    color: "from-indigo-500 to-indigo-600"
  },
  {
    id: "logistics-tracker",
    title: "Logistics Tracking System",
    description: "Real-time shipment tracking with automated notifications and route optimization",
    category: "Logistics",
    techStack: ["Angular", "Node.js", "MongoDB", "Google Maps"],
    caseStudyUrl: "https://notion.so/your-workspace/logistics-case-study",
    color: "from-orange-500 to-orange-600"
  },
  {
    id: "social-network",
    title: "Professional Network Platform",
    description: "Niche social network for industry professionals with networking features",
    category: "Social",
    techStack: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
    caseStudyUrl: "https://notion.so/your-workspace/social-network-case-study",
    liveUrl: "https://professional-network.demo.com",
    color: "from-pink-500 to-pink-600"
  },
  {
    id: "iot-dashboard",
    title: "IoT Monitoring Dashboard",
    description: "Real-time IoT device monitoring with alerts and data visualization",
    category: "IoT",
    techStack: ["React", "Python", "InfluxDB", "Grafana"],
    caseStudyUrl: "https://notion.so/your-workspace/iot-dashboard-case-study",
    color: "from-teal-500 to-teal-600"
  }
];