export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  valueProposition: string;
  features: string[];
  pricing: {
    startingPrice: string;
    billingPeriod: string;
    currency: string;
  };
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  cta: {
    primary: string;
    secondary: string;
  };
  urls: {
    demo?: string;
    trial?: string;
    learnMore: string;
  };
  status: 'live' | 'beta' | 'coming-soon';
  color: string;
}

export const products: Product[] = [
  {
    id: "project-manager",
    name: "ProjectFlow", 
    tagline: "Smart Project Management Made Simple",
    description: "Streamline your projects with an intuitive platform that adapts to any workflow - whether you're a freelancer, team, or organization.",
    valueProposition: "Complete projects 40% faster while keeping everyone aligned and informed.",
    features: [
      "Task & Project Management",
      "Time Tracking & Reporting", 
      "Team Collaboration",
      "Client Communication Portal",
      "File Sharing & Storage",
      "Mobile & Desktop Apps"
    ],
    pricing: {
      startingPrice: "29",
      billingPeriod: "month",
      currency: "USD"
    },
    benefits: [
      {
        icon: "chart",
        title: "Stay Organized",
        description: "Keep all your projects and tasks in one place"
      },
      {
        icon: "clock", 
        title: "Save Time",
        description: "Automate repetitive tasks and streamline workflows"
      },
      {
        icon: "users",
        title: "Better Collaboration",
        description: "Keep everyone on the same page with real-time updates"
      }
    ],
    cta: {
      primary: "Start Free Trial",
      secondary: "View Demo"
    },
    urls: {
      demo: "https://projectflow.demo.minoqtopus.com",
      trial: "https://app.projectflow.com/signup",
      learnMore: "https://projectflow.minoqtopus.com"
    },
    status: "live",
    color: "from-blue-600 to-blue-700"
  },
  {
    id: "notion-templates",
    name: "NotionKit",
    tagline: "Premium Notion Templates & Systems", 
    description: "Transform your productivity with our collection of beautiful, functional Notion templates for personal and professional use.",
    valueProposition: "Get organized instantly with pre-built systems that save you 20+ hours of setup time.",
    features: [
      "50+ Premium Templates",
      "Personal Productivity Systems",
      "Project Management Templates",
      "Goal Tracking & Habits", 
      "Knowledge Management",
      "Lifetime Updates"
    ],
    pricing: {
      startingPrice: "47",
      billingPeriod: "one-time",
      currency: "USD"
    },
    benefits: [
      {
        icon: "star",
        title: "Instant Setup",
        description: "Copy and customize templates in minutes, not hours"
      },
      {
        icon: "clock",
        title: "Proven Systems",
        description: "Battle-tested templates used by thousands of people"
      },
      {
        icon: "trending",
        title: "Stay Productive",
        description: "Organize your entire life with beautifully designed systems"
      }
    ],
    cta: {
      primary: "Get Templates",
      secondary: "View Preview"
    },
    urls: {
      demo: "https://notionkit.minoqtopus.com/preview",
      learnMore: "https://notionkit.minoqtopus.com"
    },
    status: "live",
    color: "from-green-600 to-green-700"
  },
  {
    id: "analytics-dashboard",
    name: "DataViz",
    tagline: "Beautiful Analytics for Everyone",
    description: "Turn your data into beautiful, actionable insights with our easy-to-use analytics platform designed for creators and professionals.",
    valueProposition: "Make better decisions with clear, beautiful analytics that anyone can understand and use.",
    features: [
      "Custom Dashboard Builder",
      "Data Import & Integration", 
      "Beautiful Visualizations",
      "Automated Reports",
      "Team Sharing & Collaboration",
      "Export & Presentation Tools"
    ],
    pricing: {
      startingPrice: "19",
      billingPeriod: "month", 
      currency: "USD"
    },
    benefits: [
      {
        icon: "analytics",
        title: "Clear Insights",
        description: "Turn complex data into simple, actionable insights"
      },
      {
        icon: "target",
        title: "Easy to Use", 
        description: "No technical skills required - anyone can create dashboards"
      },
      {
        icon: "growth",
        title: "Make Better Decisions",
        description: "Data-driven insights help you grow and improve"
      }
    ],
    cta: {
      primary: "Try Free",
      secondary: "See Examples"
    },
    urls: {
      trial: "https://dataviz.minoqtopus.com/signup",
      demo: "https://dataviz.demo.minoqtopus.com",
      learnMore: "https://dataviz.minoqtopus.com"
    },
    status: "beta",
    color: "from-purple-600 to-purple-700"
  }
];