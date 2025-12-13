"use client";

import { useMemo, useState } from "react";
import { SITE, CONTACT } from "@/config/site";
import { checkServiceArea } from "@/lib/serviceArea";

export function ServiceAreaChecker({ compact }: { compact?: boolean }) {
  const [value, setValue] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  const result = useMemo(() => {
    if (!submitted) return null;
    return checkServiceArea(submitted);
  }, [submitted]);

  return (
    <section className={compact ? "" : "rounded-2xl border border-zinc-200 bg-white p-6"}>
      <div className={compact ? "" : ""}>
        <h2 className="text-lg font-extrabold tracking-tight">
          Check Service Availability
        </h2>
        <p className="mt-1 text-sm text-zinc-700">
          Enter a ZIP or address. We’ll estimate using ZIP distance from{" "}
          <span className="font-semibold">{SITE.PRIMARY_CITY}</span>.
        </p>

        <form
          className="mt-4 flex flex-col gap-2 sm:flex-row"
          onSubmit={(e) => {
            e.preventDefault();
            setSubmitted(value);
          }}
        >
          <label className="sr-only" htmlFor="service-area-input">
            Address or ZIP
          </label>
          <input
            id="service-area-input"
            inputMode="text"
            autoComplete="postal-code"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="ZIP or address (ZIP recommended)"
            className="flex-1 rounded-lg border border-zinc-300 bg-white px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black"
          />
          <button
            type="submit"
            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Check
          </button>
        </form>

        {result ? (
          <div
            className={[
              "mt-4 rounded-xl p-4 text-sm",
              result.ok ? "bg-emerald-50 text-emerald-900" : "bg-zinc-50 text-zinc-900"
            ].join(" ")}
            role="status"
            aria-live="polite"
          >
            {result.ok ? (
              <div>
                <div className="font-semibold">
                  You’re in our service area — book now.
                </div>
                <div className="mt-1">
                  ZIP-based estimate: about{" "}
                  <span className="font-semibold">{result.miles.toFixed(1)} miles</span>{" "}
                  from Newark, NJ.
                </div>
                <div className="mt-2 text-xs text-emerald-900/80">
                  Same-day {result.sameDayLikely ? "may be available" : "may be limited"}{" "}
                  (availability-based). If timing matters, call us.
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="/booking"
                    className="rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Book Now
                  </a>
                  <a
                    href={CONTACT.telHref}
                    className="rounded-lg bg-white px-3 py-2 text-xs font-semibold ring-1 ring-zinc-200 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >
                    Call for consultation
                  </a>
                </div>
              </div>
            ) : (
              <div>
                {result.reason === "invalid-input" ? (
                  <div>
                    <div className="font-semibold">Please enter a 5-digit ZIP (recommended).</div>
                    <div className="mt-1 text-xs text-zinc-600">
                      We can only provide a ZIP-based estimate in this starter build.
                    </div>
                  </div>
                ) : result.reason === "zip-not-found" ? (
                  <div>
                    <div className="font-semibold">
                      We couldn’t estimate that ZIP yet.
                    </div>
                    <div className="mt-1 text-xs text-zinc-600">
                      This starter includes a small ZIP dataset sample. Try a nearby ZIP, or call for help.
                    </div>
                    <div className="mt-3">
                      <a
                        href={CONTACT.telHref}
                        className="inline-flex rounded-lg bg-white px-3 py-2 text-xs font-semibold ring-1 ring-zinc-200 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Call for consultation
                      </a>
                    </div>
                  </div>
                ) : (
                  <div>
                    <div className="font-semibold">Currently outside our service area.</div>
                    <div className="mt-1">
                      ZIP-based estimate: about{" "}
                      <span className="font-semibold">{(result.miles ?? 0).toFixed(1)} miles</span>{" "}
                      from Newark, NJ (scheduled limit: {SITE.SERVICE_RADIUS_MILES} miles).
                    </div>
                    <div className="mt-2 text-xs text-zinc-600">
                      If you’re near the edge, call — we’ll tell you what’s realistic.
                    </div>
                    <div className="mt-3">
                      <a
                        href={CONTACT.telHref}
                        className="inline-flex rounded-lg bg-white px-3 py-2 text-xs font-semibold ring-1 ring-zinc-200 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        Call for consultation
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="mt-3 text-xs text-zinc-600">
              Mode: <span className="font-semibold">ZIP-based estimate</span>. TODO: Add real address geocoding + caching if desired.
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
