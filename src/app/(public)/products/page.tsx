import { ProductsCTA, ProductsHero, ProductsShowcase } from "@/components/sections";
import { ComingSoon } from "@/components/sections/ComingSoon";
import { generateMetadata } from "@/lib/seo";
import { PRODUCTS_LIVE } from "@/config/app";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata({
  title: PRODUCTS_LIVE 
    ? "Products - Minoqtopus | Digital Solutions & Templates"
    : "Products Coming Soon - Minoqtopus",
  description: PRODUCTS_LIVE
    ? "Discover our collection of premium software tools, templates, and digital solutions. From project management to Notion templates - we build tools that work."
    : "Amazing digital products are coming soon. Premium solutions crafted with care, built by developers for everyone.",
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