import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactMethods } from "@/components/sections/ContactMethods";
import { ContactForm } from "@/components/sections/ContactForm";
import { ContactFAQ } from "@/components/sections/ContactFAQ";
import { ContactCTA } from "@/components/sections/ContactCTA";

export const metadata: Metadata = generateMetadata({
  title: "Contact - Minoqtopus | Let's Build Something Amazing",
  description: "Get in touch with Minoqtopus for custom development, product support, or partnership opportunities. 24-hour response time, free consultation.",
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