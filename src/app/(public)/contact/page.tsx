import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { PageHero, ContactMethods, ContactForm, ContactFAQ, PageCTA } from "@/components/sections";
import { contactCopy } from "@/lib/content/pages/contact";
import { contactMetadata } from "@/lib/content/metadata";

export const metadata: Metadata = generateMetadata(contactMetadata);

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