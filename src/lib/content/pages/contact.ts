export const contactCopy = {
  hero: {
    title: {
      part1: "Let's",
      highlight: "Connect"
    },
    subtitle: "Ready to build custom software with seamless integrations?",
    subtitleHighlight: " Let's discuss your project",
    subtitleEnd: " and ship it in weeks.",
    trustIndicators: [
      { id: "response", text: "Quick Response" },
      { id: "consultation", text: "Free Consultation" },
      { id: "obligations", text: "No Obligations" }
    ]
  },
  methods: {
    title: "Choose Your Path",
    subtitle: "Different ways to connect based on your needs",
    options: [
      {
        id: "quick-project",
        title: "Quick Projects",
        description: "For small to medium projects with clear scope",
        action: "Hire on Upwork",
        actionType: "external",
        url: "", // Will use APP_CONFIG.upworkUrl
        icon: "rocket",
        recommended: true
      },
      {
        id: "custom-development",
        title: "Custom Development",
        description: "Full-lifecycle software with integrations and automations",
        action: "Schedule Call",
        actionType: "external", 
        url: "", // Will use APP_CONFIG.calendlyUrl
        icon: "building"
      },
      {
        id: "general-inquiry",
        title: "General Inquiries",
        description: "Questions, partnerships, or other matters",
        action: "Send Message",
        actionType: "form",
        icon: "message"
      }
    ]
  },
  form: {
    title: "Send Us a Message",
    subtitle: "We'll get back to you within 24 hours",
    fields: {
      name: {
        label: "Your Name",
        placeholder: "John Doe",
        required: true
      },
      email: {
        label: "Email Address",
        placeholder: "john@company.com",
        required: true
      },
      company: {
        label: "Company (Optional)",
        placeholder: "Company Name",
        required: false
      },
      projectType: {
        label: "Project Type",
        placeholder: "Select project type",
        required: true,
        options: [
          "Custom Software Development",
          "API Integrations",
          "Workflow Automation",
          "Full-Stack Application",
          "Partnership",
          "Other"
        ]
      },
      budget: {
        label: "Budget Range (Optional)",
        placeholder: "Select budget range",
        required: false,
        options: [
          "Under $5,000",
          "$5,000 - $15,000",
          "$15,000 - $50,000",
          "$50,000+",
          "Not sure yet"
        ]
      },
      message: {
        label: "Your Message",
        placeholder: "Tell us about your project or inquiry...",
        required: true
      }
    },
    submitButton: "Send Message",
    successMessage: "Thank you! We'll be in touch within 24 hours.",
    errorMessage: "Something went wrong. Please try again or email us directly."
  },
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Quick answers to common questions",
    questions: [
      {
        id: "timeline",
        question: "How quickly can you start on my project?",
        answer: "We can typically start within 3-5 business days for most projects. For urgent needs, we offer expedited timelines. We deliver production software in weeks, not months."
      },
      {
        id: "technologies",
        question: "What technologies do you work with?",
        answer: "We build full-stack applications using modern technologies: React, Next.js, TypeScript, Node.js, and Nest.js for web development; Flutter for mobile apps; MongoDB, PostgreSQL, and MySQL for databases.\n\nWe excel at third-party integrations (Stripe, Slack, HubSpot, etc.) and workflow automations (n8n, custom solutions)."
      },
      {
        id: "mobile",
        question: "Do you build mobile apps too?",
        answer: "Yes! We build cross-platform mobile applications using Flutter. We can create iOS and Android apps that integrate seamlessly with your web platform and share the same backend infrastructure."
      },
      {
        id: "integrations",
        question: "Can you help with API integrations?",
        answer: "Absolutely. We specialize in connecting systems - whether it's payment processors like Stripe, CRMs like HubSpot, communication tools like Slack, or custom APIs. We make your software talk to everything else seamlessly."
      },
      {
        id: "migration",
        question: "Can you migrate our existing system?",
        answer: "Yes, we handle system migrations and modernization projects. We'll audit your current system, plan a safe migration strategy, and move your data and functionality to modern infrastructure with minimal downtime."
      },
      {
        id: "existing-code",
        question: "Do you work with existing codebases?",
        answer: "Definitely. We're experienced in code audits, refactoring, adding new features, and building integrations into legacy systems. We'll work with your existing technology choices and improve upon them."
      }
    ]
  },
  cta: {
    title: "Still Have Questions?",
    subtitle: "Don't hesitate to reach out. We're here to build your next software product with the integrations you need.",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@minoqtopus.com",
    linkedinText: "Connect on LinkedIn"
  }
} as const;