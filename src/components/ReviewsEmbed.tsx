"use client";

import { SITE } from "@/config/site";

const FALLBACK = [
  {
    name: "Jordan P.",
    text:
      "They came to my job, kept everything simple, and the car looked brand new. Zero stress."
  },
  {
    name: "Alicia M.",
    text:
      "Straightforward pricing and a really comfortable experience — felt taken care of the whole time."
  },
  {
    name: "Sam R.",
    text:
      "Fast, friendly, and no runaround. The convenience alone is worth it."
  }
];

export function ReviewsEmbed() {
  const hasEmbed = Boolean(SITE.REVIEWS_EMBED_HTML && SITE.REVIEWS_EMBED_HTML.trim().length > 0);

  if (!hasEmbed) {
    return (
      <div className="rounded-2xl border border-zinc-200 bg-white p-6">
        <h3 className="text-lg font-extrabold tracking-tight">Reviews</h3>
        <p className="mt-1 text-sm text-zinc-700">
          (Embed not configured yet.) Here are a few placeholder testimonials.
        </p>

        <div className="mt-5 grid gap-4 md:grid-cols-3">
          {FALLBACK.map((t) => (
            <figure key={t.name} className="rounded-xl bg-zinc-50 p-4">
              <blockquote className="text-sm text-zinc-800">“{t.text}”</blockquote>
              <figcaption className="mt-3 text-xs font-semibold text-zinc-700">
                — {t.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-4 text-xs text-zinc-600">
          TODO: Paste your Google reviews widget embed HTML into{" "}
          <code>REVIEWS_EMBED_HTML</code> in <code>src/config/site.ts</code>.
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h3 className="text-lg font-extrabold tracking-tight">Reviews</h3>
      <p className="mt-1 text-sm text-zinc-700">
        Real feedback from customers who wanted comfort and convenience.
      </p>

      {/* Rendering third-party embed HTML. Only paste trusted code. */}
      <div
        className="mt-4"
        dangerouslySetInnerHTML={{ __html: SITE.REVIEWS_EMBED_HTML }}
      />
    </div>
  );
}
