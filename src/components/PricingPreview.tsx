import Link from "next/link";
import { SITE } from "@/config/site";

export function PricingPreview() {
  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6">
      <div className="flex items-end justify-between gap-4">
        <h2 className="text-lg font-extrabold tracking-tight">Pricing preview</h2>
        <Link
          href="/services"
          className="text-sm font-semibold hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          See all services
        </Link>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {SITE.PRICING_PACKAGES.slice(0, 3).map((p) => (
          <div key={p.name} className="rounded-2xl bg-zinc-50 p-5">
            <div className="text-sm font-extrabold">{p.name}</div>
            <div className="mt-2 text-2xl font-extrabold">
              ${p.price}
              <span className="ml-2 text-xs font-semibold text-zinc-600">
                {p.note}
              </span>
            </div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-700">
              {p.includes.map((x) => (
                <li key={x} className="flex gap-2">
                  <span aria-hidden="true">•</span>
                  <span>{x}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/booking"
              className="mt-4 inline-flex rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-zinc-600">
        Prices shown are placeholders and should be reviewed for your real packages.
      </p>
    </section>
  );
}
