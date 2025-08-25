import { PageCTA, PageHero, ProductsShowcase, ComingSoon } from "@/components/sections";
import { generateMetadata } from "@/lib/seo";
import { PRODUCTS_LIVE } from "@/config/app";
import { productsCopy } from "@/lib/content/pages/products";
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
  const { hero, cta } = productsCopy;
  
  if (!PRODUCTS_LIVE) {
    return <ComingSoon />;
  }

  return (
    <div className="scroll-smooth">
      <PageHero {...hero} />
      <ProductsShowcase />
      <PageCTA {...cta} />
    </div>
  );
}