import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { PageHero, PortfolioShowcase, PageCTA } from "@/components/sections";
import { portfolioCopy } from "@/lib/content/pages/portfolio";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio - Minoqtopus | Custom Software Projects",
  description: "Real projects for funded startups and SMBs. Custom software development with seamless integrations and workflow automations. Ship in weeks, not months.",
  path: "/portfolio"
});

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