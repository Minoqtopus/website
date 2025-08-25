import { ProductsCTA, ProductsHero, ProductsShowcase } from "@/components/sections";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { generateMetadata } from "@/lib/seo";
import { PRODUCTS_LIVE } from "@/config/app";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: PRODUCTS_LIVE 
    ? "Solutions We Build - Minoqtopus | Custom Software Examples"
    : "Solutions Coming Soon - Minoqtopus",
  description: PRODUCTS_LIVE
    ? "Examples of custom software solutions we build: SaaS platforms, automation tools, and integrated systems. Tailored to your business needs with full API integrations."
    : "Custom software solution examples coming soon. See the types of products we build for funded startups and SMBs.",
  path: "/products"
});

export default function ProductsPage() {
  if (!PRODUCTS_LIVE) {
    return <ComingSoon />;
  }

  return (
    <div className="scroll-smooth">
      <ProductsHero />
      <ProductsShowcase />
      <ProductsCTA />
    </div>
  );
}