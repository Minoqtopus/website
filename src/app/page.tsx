import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import CaseStudies from "@/components/sections/CaseStudies";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { homeMetadata } from "@/lib/seo";

export const metadata: Metadata = homeMetadata;

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <CaseStudies />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
