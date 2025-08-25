import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactMethods } from "@/components/sections/ContactMethods";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactFAQ } from "@/components/sections/ContactFAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = generateMetadata({
  title: "Contact - Minoqtopus | Custom Software & Integrations",
  description: "Get in touch for custom software development, API integrations, and workflow automations. Serving funded startups and SMBs globally. 24-hour response, free consultation.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <div className="scroll-smooth">
      <ContactHero />
      <ContactMethods />
      <ContactForm />
      <ContactFAQ />
      <ContactCTA />
    </div>
  );
}