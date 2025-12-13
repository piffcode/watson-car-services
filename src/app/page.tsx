import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { baseMetadata } from "@/lib/seo";
import { SITE, CONTACT } from "@/config/site";
import { ServiceAreaChecker } from "@/components/ServiceAreaChecker";
import { PricingPreview } from "@/components/PricingPreview";
import { ReviewsEmbed } from "@/components/ReviewsEmbed";
import { FAQ } from "@/components/FAQ";

export const metadata = baseMetadata({
  title: "Mobile car services built around comfort",
  path: "/"
});

export default function HomePage() {
  return (
    <div>
      <section className="border-b border-zinc-200 bg-white">
        <Container>
          <div className="grid gap-10 py-12 md:grid-cols-2 md:items-center">
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                {SITE.BRAND_COPY.HERO_TITLE}
              </h1>
              <p className="mt-4 text-base text-zinc-700">
                {SITE.BRAND_COPY.HERO_SUBTITLE}
              </p>

              <div className="mt-6 flex flex-col gap-2 sm:flex-row">
                <Link
                  href="/booking"
                  className="rounded-lg bg-black px-5 py-3 text-center text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Book an appointment
                </Link>
                <a
                  href={CONTACT.telHref}
                  className="rounded-lg bg-white px-5 py-3 text-center text-sm font-semibold ring-1 ring-zinc-200 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Call for consultation
                </a>
              </div>

              <div className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm text-zinc-700">
                <div className="font-semibold">Same-day:</div>
                <div className="mt-1">
                  <span className="font-semibold">May be available</span> within{" "}
                  {SITE.SAME_DAY_RADIUS_MILES} miles (availability-based).
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6">
              <div className="text-sm font-semibold text-zinc-700">
                What we do
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-800">
                <li><span className="font-semibold">Mobile detailing:</span> interior + exterior</li>
                <li><span className="font-semibold">Basic repairs:</span> oil, tires, windows, brakes, diagnostics</li>
                <li><span className="font-semibold">Comfort:</span> hospitality + convenience, no surprises</li>
              </ul>

              <div className="mt-5">
                <ServiceAreaChecker compact />
              </div>

              <div className="mt-4 text-xs text-zinc-600">
                Tip: For best results, enter a 5-digit ZIP.
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section className="py-10">
          <h2 className="text-lg font-extrabold tracking-tight">How it works</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3">
            {SITE.BRAND_COPY.HOW_IT_WORKS.map((s) => (
              <div key={s.title} className="rounded-2xl border border-zinc-200 bg-white p-6">
                <div className="text-sm font-extrabold">{s.title}</div>
                <p className="mt-2 text-sm text-zinc-700">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 pb-10 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-extrabold tracking-tight">Detailing</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Interior and exterior packages designed for comfort — clean, fresh, and straightforward.
            </p>
            <Link
              href="/services"
              className="mt-4 inline-flex rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              View packages
            </Link>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-extrabold tracking-tight">Basic repairs</h2>
            <p className="mt-2 text-sm text-zinc-700">
              Oil changes, brakes, tires, windows, and diagnostics — handled with clear communication and no runaround.
            </p>
            <Link
              href="/services"
              className="mt-4 inline-flex rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              See repair services
            </Link>
          </div>
        </section>

        <section className="pb-10">
          <PricingPreview />
        </section>

        <section className="pb-10">
          <ServiceAreaChecker />
        </section>

        <section className="pb-10">
          <ReviewsEmbed />
        </section>

        <section className="pb-12">
          <FAQ />
        </section>
      </Container>
    </div>
  );
}
