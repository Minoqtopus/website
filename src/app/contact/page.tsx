import { Mail, Phone, MapPin, Clock } from "lucide-react";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contactMetadata } from "@/lib/seo";

export const metadata = contactMetadata;

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "minoqtopus.agency@gmail.com",
    href: "mailto:minoqtopus.agency@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 (313) 404-4978",
    href: "tel:+923134044978",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Lahore, Pakistan",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Let's build something"
        highlight="remarkable."
        description="Tell us about your project. We'll respond within 24 hours with a tailored plan."
      />

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-16">
            <div className="lg:col-span-2">
              <h2 className="font-display text-2xl font-bold text-stone-950 mb-8">
                Get in touch
              </h2>
              <div className="space-y-6">
                {contactInfo.map((item) => {
                  const content = (
                    <>
                      <div className="w-11 h-11 rounded-xl bg-stone-100 flex items-center justify-center text-stone-600 group-hover:bg-gold-600/10 group-hover:text-gold-600 transition-colors duration-200 shrink-0">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-stone-400 mb-0.5">
                          {item.label}
                        </div>
                        <div className="text-stone-950 font-medium group-hover:text-gold-600 transition-colors duration-200">
                          {item.value}
                        </div>
                      </div>
                    </>
                  );

                  if (item.href) {
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-4 group cursor-pointer"
                      >
                        {content}
                      </a>
                    );
                  }

                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      {content}
                    </div>
                  );
                })}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-stone-50 border border-stone-200/80">
                <p className="text-sm text-stone-500 leading-relaxed">
                  <span className="font-semibold text-stone-950">
                    Prefer a call?
                  </span>{" "}
                  Book a free 30 minute consultation call to discuss your project
                  goals, timeline, and how we can help.
                </p>
              </div>
            </div>

            <div className="lg:col-span-3">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
