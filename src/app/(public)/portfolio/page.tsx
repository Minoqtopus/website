import { Metadata } from "next";
import { generateMetadata } from "@/lib/seo";
import { PortfolioHero, PortfolioShowcase, PortfolioCTA } from "@/components/sections";

export const metadata: Metadata = generateMetadata({
  title: "Portfolio - Minoqtopus | MVP Projects & Case Studies",
  description: "Discover our successful MVP projects and case studies. From concept to production-ready solutions in 28 days.",
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