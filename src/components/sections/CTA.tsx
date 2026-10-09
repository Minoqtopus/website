import { ArrowUpRight } from "lucide-react";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="py-28 bg-stone-50 relative overflow-hidden border-t border-stone-200/80">
      <div className="absolute inset-0 dot-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/5 rounded-full blur-[120px]" />

      <div className="relative max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-stone-950 tracking-tight leading-[1.1] mb-6">
          Ready to build something{" "}
          <span className="text-gold-600">extraordinary?</span>
        </h2>
        <p className="text-stone-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
          Let&apos;s discuss your vision. We&apos;ll show you how world-class
          engineering can accelerate your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Book a Consultation
            <ArrowUpRight className="w-5 h-5" />
          </Button>
          <Button href="mailto:minoqtopus.agency@gmail.com" variant="outline" size="lg">
            minoqtopus.agency@gmail.com
          </Button>
        </div>
      </div>
    </section>
  );
}
