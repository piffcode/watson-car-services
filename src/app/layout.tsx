import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StickyMobileCta } from "@/components/StickyMobileCta";
import { baseMetadata, localBusinessJsonLd } from "@/lib/seo";

import "./globals.css";

export const metadata: Metadata = baseMetadata({
  title: "Comfort-first mobile detailing & repairs",
  description:
    "Watson’s Car Services — mobile detailing and basic repairs in Newark, NJ and surrounding areas. We come to you for comfort, convenience, and straightforward service."
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          // JSON-LD is safe here (controlled by our code)
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd()) }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:ring-2 focus:ring-black"
        >
          Skip to content
        </a>

        <Header />

        <main id="main" className="pb-24 md:pb-0">
          {children}
        </main>

        <Footer />
        <StickyMobileCta />
      </body>
    </html>
  );
}
