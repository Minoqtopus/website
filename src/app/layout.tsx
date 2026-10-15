import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StructuredData from "@/components/seo/StructuredData";
import RevealScript from "@/components/motion/RevealScript";
import EngagementTracker from "@/components/analytics/EngagementTracker";

// Set in Vercel so local development never writes into the live property.
const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  // next/font generates a metric-matched fallback from these, so swapping in
  // the real face does not reflow the text around it.
  adjustFontFallback: true,
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://minoqtopus.com"
  ),
  manifest: "/site.webmanifest",
  // Re-issue this token from Google Search Console for the minoqtopus.com
  // property; the previous value belonged to the old domain.
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
        verification: {
          google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
        },
      }
    : {}),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="font-body antialiased">
        <StructuredData />
        <RevealScript />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        {GA_ID ? (
          <>
            <EngagementTracker />
            {/*
              Loaded with `lazyOnload` rather than next/third-parties'
              GoogleAnalytics, which defaults to `afterInteractive` and does
              not expose a strategy prop. gtag.js costs real main-thread time,
              so it waits until the browser is idle instead of competing with
              hydration. Events queue on dataLayer meanwhile and flush once
              gtag.js arrives, so nothing is lost.

              The `set` call ahead of `config` restricts GA4 to measurement
              only — no advertising signals, no personalisation, IP anonymised
              — which is what the privacy policy states we do.
            */}
            <Script id="ga-init" strategy="lazyOnload">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());
gtag('set',{'anonymize_ip':true,'allow_google_signals':false,'allow_ad_personalization_signals':false});
gtag('config','${GA_ID}');`}
            </Script>
            <Script
              id="ga-src"
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            />
          </>
        ) : null}
      </body>
    </html>
  );
}
