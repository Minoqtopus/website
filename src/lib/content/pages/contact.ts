export const contactCopy = {
  hero: {
    title: {
      part1: "Let's",
      highlight: "Connect"
    },
    subtitle: "Ready to start your next project or have questions?",
    subtitleHighlight: " We're here to help",
    subtitleEnd: " turn your ideas into reality.",
    trustIndicators: [
      { id: "response", text: "24-hour response time" },
      { id: "consultation", text: "Free consultation" },
      { id: "secure", text: "100% confidential" }
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
        title: "Enterprise Solutions",
        description: "For complex projects requiring detailed consultation",
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
          "Custom Development",
          "Product Support",
          "Partnership",
          "General Inquiry",
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
        answer: "We can typically start within 3-5 business days for most projects. For urgent needs, we offer expedited timelines. Our MVP development process delivers working solutions in 28 days."
      },
      {
        id: "pricing",
        question: "How do you handle pricing?",
        answer: "For quick projects, we work through Upwork with transparent hourly pricing. For larger engagements, we provide detailed project quotes after understanding your requirements."
      },
      {
        id: "support",
        question: "Do you provide ongoing support?",
        answer: "Yes! We offer various support packages ranging from basic maintenance to full ongoing development. All projects include a warranty period with free bug fixes."
      },
      {
        id: "technologies",
        question: "What technologies do you work with?",
        answer: "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, and various databases. We also build mobile apps, SaaS platforms, and custom integrations."
      },
      {
        id: "confidentiality",
        question: "How do you handle confidentiality?",
        answer: "We take confidentiality seriously. We're happy to sign NDAs before discussing your project, and all our work includes confidentiality agreements by default."
      }
    ]
  },
  cta: {
    title: "Still Have Questions?",
    subtitle: "Don't hesitate to reach out. We're here to help turn your ideas into reality.",
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "hello@minoqtopus.com",
    linkedinText: "Connect on LinkedIn"
  }
} as const;