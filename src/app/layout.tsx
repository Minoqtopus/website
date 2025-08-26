import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { pageMetadata } from "@/lib/seo";
import "./globals.css";

const montserrat = Montserrat({
  weight: ['100', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

// Use enhanced home page metadata
export const metadata: Metadata = pageMetadata.home();

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
        <meta name="msapplication-TileColor" content="#1a7753" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Minoqtopus" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
