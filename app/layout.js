import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { createMetadata } from "@/lib/metadata";
import { getOrganizationSchema, siteConfig } from "@/lib/site";
import "./globals.css";

const manrope = localFont({
  src: "./fonts/Manrope-Variable.ttf",
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "business",
  ...createMetadata({ keywords: siteConfig.keywords }),
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f4c81",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={manrope.variable}>
      <body className="flex min-h-dvh flex-col">
        <a href="#main-content" className="skip-link">
          İçeriğe geç
        </a>
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-1 outline-none">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
        <JsonLd data={getOrganizationSchema()} />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
