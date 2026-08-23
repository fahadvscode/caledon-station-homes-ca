import type { Metadata } from "next";
import { Instrument_Sans, Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { Analytics, GtmNoscript } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { siteOrganizationSchema, websiteSchema } from "@/lib/schema";
import { isPlaceholderId } from "@/lib/analytics";
import { PAGE_META, SITE_NAME, SITE_URL } from "@/lib/content";
import { buildMetadata } from "@/lib/seo";
import "./globals.css";

const instrument = Instrument_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-instrument",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-inter",
});

const gsc = process.env.NEXT_PUBLIC_GSC_VERIFICATION;
const bing = process.env.NEXT_PUBLIC_BING_VERIFICATION;
const gscReady = Boolean(gsc && !isPlaceholderId(gsc, "GSC"));
const bingReady = Boolean(bing && !isPlaceholderId(bing, "BING"));

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  ...buildMetadata(PAGE_META.home),
  title: {
    default: PAGE_META.home.title,
    template: "%s",
  },
  applicationName: SITE_NAME,
  ...(gscReady || bingReady
    ? {
        verification: {
          ...(gscReady ? { google: gsc } : {}),
          ...(bingReady ? { other: { "msvalidate.01": bing as string } } : {}),
        },
      }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-CA" className={`${instrument.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <GtmNoscript />
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={websiteSchema()} />
        <JsonLd data={siteOrganizationSchema()} />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
        <StickyMobileCta />
        <Analytics />
      </body>
    </html>
  );
}
