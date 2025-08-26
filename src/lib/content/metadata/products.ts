import type { MetadataConfig } from '@/types';

export const productsMetadata = {
  live: {
    title: "Products - Minoqtopus | Ready-Made Software Solutions",
    description: "Production-ready software products for startups and SMBs. Skip custom development with our battle-tested solutions. Deploy in days, not weeks.",
    keywords: "software products, ready-made solutions, startup products, SMB software, production ready, quick deployment",
    path: "/products",
    image: "/og-products.png"
  } as MetadataConfig,
  
  comingSoon: {
    title: "Products Coming Soon - Minoqtopus | Custom Software Development",
    description: "Exciting products in development! While you wait, get custom software solutions tailored to your needs. Ship production-ready applications in weeks.",
    keywords: "coming soon, products development, custom software, startup solutions, SMB development",
    path: "/products",
    image: "/og-products-coming-soon.png"
  } as MetadataConfig
} as const;