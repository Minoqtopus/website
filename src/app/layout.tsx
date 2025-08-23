import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-lato",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Minoqtopus - Build Your MVP in 4 Weeks | Rapid Software Development",
  description: "Transform your startup idea into a production-ready MVP in just 28 days. Expert software development with enterprise-grade security, scalable architecture, and proven results. Get to market 6x faster.",
  keywords: "MVP development, rapid prototyping, startup development, software development, 4 week MVP, minimum viable product, agile development, web application development, mobile app development, SaaS development",
  authors: [{ name: "Minoqtopus Inc." }],
  creator: "Minoqtopus Inc.",
  publisher: "Minoqtopus Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://minoqtopus.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Minoqtopus - Build Your MVP in 4 Weeks',
    description: 'Transform your startup idea into a production-ready MVP in just 28 days. Get to market 6x faster with enterprise-grade security and scalable architecture.',
    url: 'https://minoqtopus.com',
    siteName: 'Minoqtopus',
    images: [
      {
        url: '/images/brand/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Minoqtopus - MVP Development in 4 Weeks',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Minoqtopus - Build Your MVP in 4 Weeks',
    description: 'Transform your startup idea into a production-ready MVP in just 28 days. Get to market 6x faster.',
    images: ['/images/brand/og-image.png'],
    creator: '@minoqtopus',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#1a7753" />
        <meta name="msapplication-TileColor" content="#1a7753" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Minoqtopus" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
