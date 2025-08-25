"use client";

import { LandingHero } from "@/components/sections";
import { getOrganizationStructuredData } from "@/lib/seo";
import Script from "next/script";

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