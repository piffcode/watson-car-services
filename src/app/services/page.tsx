import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Tabs } from "@/components/ui/Tabs";
import { baseMetadata } from "@/lib/seo";
import { SITE, CONTACT } from "@/config/site";

export const metadata = baseMetadata({
  title: "Services",
  path: "/services",
  description:
    "Mobile detailing and basic repairs — comfort-first, hospitality-driven, and straightforward."
});

function Detailing() {
  const packages = [
    {
      name: "Comfort Clean (Interior)",
      price: "$149 starting at",
      bullets: [
        "Vacuum + wipe-down",
        "Windows inside",
        "Light stain attention",
        "Fresh finish (no heavy fragrance)"
      ]
    },
    {
      name: "Driveway Detail (Exterior)",
      price: "$129 starting at",
      bullets: [
        "Hand wash + dry",
        "Wheel + tire clean",
        "Quick paint-safe shine",
        "Door jamb wipe"
      ]
    },
    {
      name: "Full Comfort Reset",
      price: "$249 starting at",
      bullets: [
        "Interior + exterior package",
        "Dash + trim refresh",
        "Final walkthrough with you"
      ]
    }
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {packages.map((p) => (
        <div key={p.name} className="rounded-2xl border border-zinc-200 bg-white p-6">
          <div className="text-sm font-extrabold">{p.name}</div>
          <div className="mt-2 text-2xl font-extrabold">{p.price}</div>
          <ul className="mt-3 space-y-2 text-sm text-zinc-700">
            {p.bullets.map((b) => (
              <li key={b} className="flex gap-2">
                <span aria-hidden="true">•</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/booking"
            className="mt-4 inline-flex rounded-lg bg-black px-3 py-2 text-xs font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Book Now
          </Link>
          <p className="mt-3 text-xs text-zinc-600">
            Pricing is a starting point and may vary by vehicle size/condition.
          </p>
        </div>
      ))}
    </div>
  );
}

function Repairs() {
  const items = [
    "Oil change",
    "Tire replacement",
    "Window replacement",
    "Brake pad changes",
    "Diagnostics (to identify what’s actually going on)"
  ];

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h3 className="text-lg font-extrabold tracking-tight">Common repair services</h3>
      <ul className="mt-4 space-y-2 text-sm text-zinc-700">
        {items.map((x) => (
          <li key={x} className="flex gap-2">
            <span aria-hidden="true">•</span>
            <span>{x}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <Link
          href="/booking"
          className="rounded-lg bg-black px-4 py-2 text-center text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Book an appointment
        </Link>
        <a
          href={CONTACT.telHref}
          className="rounded-lg bg-white px-4 py-2 text-center text-sm font-semibold ring-1 ring-zinc-200 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Call for consultation
        </a>
      </div>

      <div className="mt-4 rounded-xl bg-zinc-50 p-4 text-sm text-zinc-700">
        <div className="font-semibold">Not sure what you need?</div>
        <div className="mt-1">
          Call us — we’ll keep it straightforward and point you to the right service.
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-extrabold tracking-tight">Services</h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-700">
          We’re not just selling car services — we’re selling <span className="font-semibold">comfort</span>.
          Mobile, convenient, and straightforward.
        </p>

        <div className="mt-8">
          <Tabs
            tabs={[
              { label: "Detailing", content: <Detailing /> },
              { label: "Repairs", content: <Repairs /> }
            ]}
          />
        </div>
      </div>
    </Container>
  );
}
