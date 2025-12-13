import type { Metadata } from "next";
import { SITE } from "@/config/site";

export function baseMetadata(partial?: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const title = partial?.title
    ? `${partial.title} | ${SITE.BUSINESS_NAME}`
    : SITE.BUSINESS_NAME;

  const description =
    partial?.description ??
    "Mobile detailing and basic repairs in Newark, NJ and surrounding areas — comfort-first, hospitality-driven, straightforward service.";

  const url = partial?.path ? `https://example.com${partial.path}` : "https://example.com";

  return {
    title,
    description,
    metadataBase: new URL("https://example.com"),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.BUSINESS_NAME,
      type: "website",
      locale: "en_US"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function localBusinessJsonLd() {
  // Keep claims conservative — no certifications/insured/licensed claims here.
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.BUSINESS_NAME,
    description:
      "Mobile detailing and basic repairs built around comfort, hospitality, and convenience. We come to you.",
    areaServed: {
      "@type": "City",
      name: SITE.PRIMARY_CITY
    },
    telephone: SITE.PHONE_NUMBER,
    url: "https://example.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Newark",
      addressRegion: "NJ",
      addressCountry: "US"
    }
  };
}
