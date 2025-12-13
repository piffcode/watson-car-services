import Link from "next/link";
import { Container } from "./ui/Container";
import { SITE, CONTACT } from "@/config/site";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container>
        <div className="grid gap-8 py-10 md:grid-cols-3">
          <div>
            <div className="text-lg font-extrabold">{SITE.BUSINESS_NAME}</div>
            <p className="mt-2 text-sm text-zinc-700">
              Comfort-first mobile detailing and basic repairs — we come to you.
              Straightforward service. No nonsense.
            </p>

            <div className="mt-4 flex gap-2">
              <Link
                href="/booking"
                className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book Now
              </Link>
              <a
                href={CONTACT.telHref}
                className="rounded-lg bg-white px-4 py-2 text-sm font-semibold ring-1 ring-zinc-200 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Call
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Service area</div>
            <p className="mt-2 text-sm text-zinc-700">
              Scheduled appointments: up to{" "}
              <span className="font-semibold">{SITE.SERVICE_RADIUS_MILES} miles</span>{" "}
              from {SITE.PRIMARY_CITY}.
            </p>
            <p className="mt-2 text-sm text-zinc-700">
              Same-day:{" "}
              <span className="font-semibold">may be available</span> within{" "}
              {SITE.SAME_DAY_RADIUS_MILES} miles (availability-based).
            </p>
            <p className="mt-3 text-sm text-zinc-700">
              Nearby cities: {SITE.SERVICE_CITIES.slice(0, 6).join(", ")}…
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Links</div>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link className="hover:underline" href="/services">Services</Link></li>
              <li><Link className="hover:underline" href="/service-area">Service Area</Link></li>
              <li><Link className="hover:underline" href="/reviews">Reviews</Link></li>
              <li><Link className="hover:underline" href="/contact">Contact</Link></li>
            </ul>

            <div className="mt-4 text-sm">
              <div className="font-semibold">Phone</div>
              <a className="hover:underline" href={CONTACT.telHref}>
                {SITE.PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-zinc-200 py-6 text-xs text-zinc-600">
          © {new Date().getFullYear()} {SITE.BUSINESS_NAME}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
