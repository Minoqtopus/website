export const portfolioCopy = {
  header: {
    title: "Portfolio",
    description: "See how we've helped businesses launch successful products in record time."
  },
  projects: [
    {
      title: "E-Commerce Platform",
      description: "Built a complete e-commerce solution from concept to launch in 4 weeks.",
      technologies: ["React", "Node.js", "Stripe"]
    },
    {
      title: "SaaS Analytics Tool",
      description: "Developed a data analytics dashboard with real-time insights.",
      technologies: ["Next.js", "PostgreSQL", "Chart.js"]
    },
    {
      title: "Mobile App MVP",
      description: "Created a cross-platform mobile app with user authentication and core features.",
      technologies: ["React Native", "Firebase", "Redux"]
    },
    {
      title: "Fintech Solution",
      description: "Built a secure financial services platform with payment processing.",
      technologies: ["Vue.js", "Express", "MongoDB"]
    }
  ],
  cta: {
    text: "Start Your Project",
    href: "/contact"
  }
} as const;