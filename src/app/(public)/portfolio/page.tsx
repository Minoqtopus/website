import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { PageHero, PortfolioShowcase, PageCTA } from "@/components/sections";
import { portfolioCopy } from "@/lib/content/pages/portfolio";
import { portfolioMetadata } from "@/lib/content/metadata";

export const metadata: Metadata = generateMetadata(portfolioMetadata);

export default function PortfolioPage() {
  const { hero, cta } = portfolioCopy;
  
  return (
    <div className="scroll-smooth">
      <PageHero {...hero} />
      <PortfolioShowcase />
      <PageCTA {...cta} />
    </div>
  );
}