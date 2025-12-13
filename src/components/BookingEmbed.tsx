"use client";

import { useEffect } from "react";
import { SITE } from "@/config/site";

declare global {
  interface Window {
    Calendly?: any;
  }
}

export function BookingEmbed() {
  useEffect(() => {
    // Load Calendly embed script once
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    );
    if (existing) return;

    const s = document.createElement("script");
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);

    return () => {
      // do not remove script — avoids reloading if user navigates back
    };
  }, []);

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white">
      <div className="p-4">
        <h2 className="text-lg font-extrabold tracking-tight">Book your appointment</h2>
        <p className="mt-1 text-sm text-zinc-700">
          Choose a time that fits your day. We’ll follow up if we need any details.
        </p>
      </div>

      {/* Calendly inline widget */}
      <div
        className="calendly-inline-widget"
        data-url={SITE.BOOKING_CALENDLY_URL}
        style={{ minWidth: "320px", height: "780px" }}
        aria-label="Calendly booking widget"
      />
      <div className="px-4 pb-4 text-xs text-zinc-600">
        TODO: Update <code>BOOKING_CALENDLY_URL</code> in <code>src/config/site.ts</code>.
      </div>
    </div>
  );
}
