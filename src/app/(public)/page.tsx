import { Metadata } from "next";
import { LandingHero } from "@/components/sections";
import { getOrganizationStructuredData, generateMetadata } from "@/lib/seo";
import { homeMetadata } from "@/lib/content/metadata";
import Script from "next/script";

export const metadata: Metadata = generateMetadata(homeMetadata);

export default function Home() {
  const structuredData = getOrganizationStructuredData();

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="scroll-smooth">
        <LandingHero />
      </div>
    </>
  );
}