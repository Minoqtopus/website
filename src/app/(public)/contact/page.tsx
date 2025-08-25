import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { PageHero, ContactMethods, ContactForm, ContactFAQ, PageCTA } from "@/components/sections";
import { contactCopy } from "@/lib/content/pages/contact";

export const metadata: Metadata = generateMetadata({
  title: "Contact - Minoqtopus | Custom Software & Integrations",
  description: "Get in touch for custom software development, API integrations, and workflow automations. Serving funded startups and SMBs globally. 24-hour response, free consultation.",
  path: "/contact"
});

export default function ContactPage() {
  const { hero, cta } = contactCopy;
  
  return (
    <div className="scroll-smooth">
      <PageHero {...hero} />
      <ContactMethods />
      <ContactForm />
      <ContactFAQ />
      <PageCTA {...cta} />
    </div>
  );
}