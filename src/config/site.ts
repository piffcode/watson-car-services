type SiteConfig = {
  BUSINESS_NAME: string;
  PHONE_NUMBER: string;
  PRIMARY_CITY: string;
  ORIGIN_LAT_LNG: { lat: number; lng: number };
  SERVICE_RADIUS_MILES: number;
  SAME_DAY_RADIUS_MILES: number;

  BOOKING_CALENDLY_URL: string;
  REVIEWS_EMBED_HTML: string;
  MAP_EMBED_HTML: string;

  SERVICE_CITIES: string[];
  PRICING_PACKAGES: Array<{
    name: string;
    price: number;
    note: string;
    includes: string[];
  }>;

  BRAND_COPY: {
    HERO_TITLE: string;
    HERO_SUBTITLE: string;
    HOW_IT_WORKS: Array<{ title: string; desc: string }>;
  };
};

export const SITE: SiteConfig = {
  BUSINESS_NAME: "Watson’s Car Services",
  PHONE_NUMBER: "+1-973-555-0199",
  PRIMARY_CITY: "Newark, NJ",
  ORIGIN_LAT_LNG: { lat: 40.7357, lng: -74.1724 },
  SERVICE_RADIUS_MILES: 100,
  SAME_DAY_RADIUS_MILES: 50,
  BOOKING_CALENDLY_URL: "https://calendly.com/your-calendly-link-here",
  REVIEWS_EMBED_HTML: "",
  MAP_EMBED_HTML: "",
  SERVICE_CITIES: [
    "Newark",
    "Jersey City",
    "Hoboken",
    "Union City",
    "Elizabeth",
    "Irvington",
    "East Orange",
    "Paterson",
    "Clifton",
    "Edison",
    "Woodbridge",
    "Paramus",
    "Teaneck",
    "Fort Lee",
    "Bayonne"
  ],
  PRICING_PACKAGES: [
    {
      name: "Comfort Clean (Interior)",
      price: 149,
      note: "starting at",
      includes: [
        "Vacuum + wipe-down",
        "Windows inside",
        "Light stain attention",
        "Fresh finish (no heavy fragrance)"
      ]
    },
    {
      name: "Driveway Detail (Exterior)",
      price: 129,
      note: "starting at",
      includes: [
        "Hand wash + dry",
        "Wheel + tire clean",
        "Quick paint-safe shine",
        "Door jamb wipe"
      ]
    },
    {
      name: "Full Comfort Reset",
      price: 249,
      note: "starting at",
      includes: [
        "Interior Comfort Clean",
        "Exterior Driveway Detail",
        "Dash + trim refresh",
        "Final walkthrough with you"
      ]
    }
  ],
  BRAND_COPY: {
    HERO_TITLE: "Comfort-first car care — we come to you.",
    HERO_SUBTITLE:
      "Mobile detailing and basic repairs built around hospitality, convenience, and straightforward service. No runaround. No surprises.",
    HOW_IT_WORKS: [
      {
        title: "Book in minutes",
        desc: "Pick a time that fits your day. We’ll confirm details and show up ready."
      },
      {
        title: "We come to you",
        desc: "Home, work, or anywhere safe to park — you stay comfortable while we handle the car."
      },
      {
        title: "Straightforward finish",
        desc: "Clear pricing, clear communication, and a quick walkthrough when we’re done."
      }
    ]
  }
};


export const CONTACT = {
  telHref: `tel:${SITE.PHONE_NUMBER.replace(/[^+\d]/g, "")}`,
  smsHref: `sms:${SITE.PHONE_NUMBER.replace(/[^+\d]/g, "")}` // placeholder behavior varies by device
} as const;
