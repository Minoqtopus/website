import { PageCTA, PageHero, ProductsShowcase, ComingSoon } from "@/components/sections";
import { generateMetadata } from "@/lib/seo";
import { PRODUCTS_LIVE } from "@/config/app";
import { productsCopy } from "@/lib/content/pages/products";
import { productsMetadata } from "@/lib/content/metadata";
import { Metadata } from "next";

export const metadata: Metadata = generateMetadata(
  PRODUCTS_LIVE ? productsMetadata.live : productsMetadata.comingSoon
);

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