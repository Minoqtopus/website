import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { PortfolioHero, PortfolioShowcase, PortfolioCTA } from "@/components/sections";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio - Minoqtopus | Custom Software Projects",
  description: "Real projects for funded startups and SMBs. Custom software development with seamless integrations and workflow automations. Ship in weeks, not months.",
  path: "/portfolio"
});

export default function PortfolioPage() {
  return (
    <div className="scroll-smooth">
      <PortfolioHero />
      <PortfolioShowcase />
      <PortfolioCTA />
    </div>
  );
}