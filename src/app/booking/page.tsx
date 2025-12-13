import { Container } from "@/components/ui/Container";
import { baseMetadata } from "@/lib/seo";
import { SITE, CONTACT } from "@/config/site";
import { ServiceAreaChecker } from "@/components/ServiceAreaChecker";
import { BookingEmbed } from "@/components/BookingEmbed";

export const metadata = baseMetadata({
  title: "Booking",
  path: "/booking",
  description: "Book an appointment online or call for consultation."
});

export default function BookingPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-extrabold tracking-tight">Booking</h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-700">
          Book online in minutes. If you prefer, call for a quick consultation.
        </p>

        <div className="mt-6">
          <ServiceAreaChecker />
        </div>

        <div className="mt-6 rounded-2xl border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-extrabold tracking-tight">Same-day policy</h2>
          <p className="mt-2 text-sm text-zinc-700">
            Same-day service <span className="font-semibold">may be available</span> within{" "}
            {SITE.SAME_DAY_RADIUS_MILES} miles depending on availability and schedule.
          </p>
          <a
            href={CONTACT.telHref}
            className="mt-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold ring-1 ring-zinc-200 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Call for consultation
          </a>
        </div>

        <div className="mt-6">
          <BookingEmbed />
        </div>
      </div>
    </Container>
  );
}
