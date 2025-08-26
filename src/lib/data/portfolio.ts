export interface PortfolioProject {
  id: string;
  title: string;
  description: string;
  category: string;
  techStack: string[];
  image: string;
  caseStudyUrl: string;
  liveUrl?: string;
  color: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 'aurum-fit',
    title: 'AURUM Fit',
    description:
      'Science-based fitness platform offering 6-minute high-intensity workouts with isokinetic biofeedback technology.',
    category: 'HealthTech',
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Stripe',
      'PostgreSQL',
      'AWS',
      'GraphQL',
      'Tailwind CSS',
      'Electron.js',
      'WebSocket',
      'Redis',
    ],
    image: '/images/portfolio/aurum-fit.png',
    caseStudyUrl: 'https://www.notion.so/AURUM-Fit-Case-Study-25abf146f9d780c8bf77c6fc5a6aae62',
    liveUrl: 'https://aurumfit.com',
    color: 'from-[#00a862] to-[#00a86275]',
  },
  {
    id: 'impactly',
    title: 'Impactly.eu',
    description:
      'ESG technology platform providing sustainability screening and due diligence services with predictive analytics.',
    category: 'ESG Tech',
    techStack: [
      'Next.js',
      'TypeScript',
      'Python',
      'Django',
      'PostgreSQL',
      'AWS',
      'GraphQL',
      'Tailwind CSS',
      'Redis',
    ],
    image: '/images/portfolio/impactly.png',
    caseStudyUrl: 'https://www.notion.so/Impactly-Case-Study-25abf146f9d780509226d7a5432865eb',
    liveUrl: 'https://impactly.eu',
    color: 'from-[#2e7d32] to-[#2e7d3275]',
  },
  {
    id: 'wildai',
    title: 'Wild.ai',
    description:
      'AI-powered women\'s health platform optimizing training, nutrition, and recovery by tracking hormonal cycles.',
    category: 'FemTech',
    techStack: [
      'React',
      'Next.js',
      'Python',
      'Flutter',
      'Stripe',
      'Django',
      'PostgreSQL',
      'AWS',
      'Firebase Cloud Messaging',
      'Puppeteer',
    ],
    image: '/images/portfolio/wild-ai.png',
    caseStudyUrl: 'https://www.notion.so/Wild-ai-Case-Study-25abf146f9d78049b3ebd9f804be1023',
    liveUrl: 'https://wild.ai',
    color: 'from-black-800 to-green-600',
  },
  {
    id: 'monadd',
    title: 'Monadd.io',
    description:
      'Residential services management platform helping users manage home expenses and address changes automatically.',
    category: 'PropTech',
    techStack: [
      'React',
      'TypeScript',
      'Python',
      'Stripe',
      'Django',
      'PostgreSQL',
      'Google Cloud',
      'Gmail Integration',
    ],
    image: '/images/portfolio/monadd.png',
    caseStudyUrl: 'https://www.notion.so/Monadd-io-Case-Study-25abf146f9d780b4a368fbd1a7e288bf',
    liveUrl: 'https://monadd.io',
    color: 'from-[#854dff] to-[#854dff75]',
  },
  {
    id: 'zensory',
    title: 'The Zensory',
    description:
      'Neuroscience-backed workplace wellbeing platform helping organizations reduce burnout and improve focus.',
    category: 'WellnessTech',
    techStack: [
      'React',
      'React Native',
      'TypeScript',
      'Node.js',
      'Express.js',
      'Firebase',
      'AWS',
      'SSO Integration',
      'Chart.js',
      'Redis',
    ],
    image: '/images/portfolio/zensory.jpg',
    caseStudyUrl: 'https://www.notion.so/The-Zensory-Case-Study-25abf146f9d78029a155d0984ac1cd6f',
    liveUrl: 'https://thezensory.com',
    color: 'from-[#f46bd7] to-[#f46bd775]',
  },
  {
    id: 'viasprout',
    title: 'ViaSprout',
    description:
      'Private markets investment platform connecting sophisticated investors with curated opportunities.',
    category: 'FinTech',
    techStack: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'PostgreSQL',
      'AWS',
      'Enterprise Security',
      'Chart.js',
      'Tailwind CSS',
    ],
    image: '/images/portfolio/viasprout.png',
    caseStudyUrl: 'https://www.notion.so/ViaSprout-Case-Study-25abf146f9d780fe9f87daa8b35a19bf',
    liveUrl: 'https://viasprout.com',
    color: 'from-[#1e1e1e] to-[#1e1e1e75]',
  },
  {
    id: 'forestly',
    title: 'Forest.ly',
    description:
      'Climate protection platform allowing individuals and businesses to purchase and own forest land.',
    category: 'ClimateTech',
    techStack: [
      'React',
      'Next.js',
      'TypeScript',
      'Stripe',
      'Node.js',
      'Express.js',
      'MongoDB',
      'AWS',
      'Custom Charts',
      'CSS3',
    ],
    image: '/images/portfolio/forest-ly.png',
    caseStudyUrl: 'https://www.notion.so/Forest-ly-Case-Study-25abf146f9d78029b58ec437668f3ebf',
    liveUrl: 'https://forest.ly/',
    color: 'from-[#274b28] to-[#274b2875]',
  },
];