export const contactCopy = {
  header: {
    title: "Contact Us",
    description: "Ready to turn your idea into reality? Let's discuss your project and how we can help you launch in 4 weeks."
  },
  form: {
    fields: {
      firstName: {
        label: "First Name",
        placeholder: ""
      },
      lastName: {
        label: "Last Name",
        placeholder: ""
      },
      email: {
        label: "Email",
        placeholder: ""
      },
      company: {
        label: "Company (Optional)",
        placeholder: ""
      },
      projectType: {
        label: "Project Type",
        placeholder: "Select a project type",
        options: [
          { value: "mvp", label: "MVP Development" },
          { value: "webapp", label: "Web Application" },
          { value: "mobile", label: "Mobile App" },
          { value: "saas", label: "SaaS Platform" },
          { value: "ecommerce", label: "E-commerce" },
          { value: "other", label: "Other" }
        ]
      },
      message: {
        label: "Tell us about your project",
        placeholder: "Describe your idea, goals, and timeline..."
      },
      budget: {
        label: "Budget Range",
        placeholder: "Select budget range",
        options: [
          { value: "10k-25k", label: "$10k - $25k" },
          { value: "25k-50k", label: "$25k - $50k" },
          { value: "50k-100k", label: "$50k - $100k" },
          { value: "100k+", label: "$100k+" }
        ]
      }
    },
    submitButton: "Send Message"
  },
  contactInfo: {
    title: "Other ways to reach us",
    email: "hello@minoqtopus.com",
    phone: "+1 (234) 567-8900"
  }
} as const;