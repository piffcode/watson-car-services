import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { baseMetadata } from "@/lib/seo";
import { ReviewsEmbed } from "@/components/ReviewsEmbed";

export const metadata = baseMetadata({
  title: "Reviews",
  path: "/reviews",
  description: "Customer feedback for Watson’s Car Services."
});

export default function ReviewsPage() {
  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-extrabold tracking-tight">Reviews</h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-700">
          Comfort-first service is the whole point — here’s what customers say.
        </p>

        <div className="mt-6">
          <ReviewsEmbed />
        </div>

        <div className="mt-6">
          <Link
            href="/booking"
            className="inline-flex rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Book Now
          </Link>
        </div>
      </div>
    </Container>
  );
}
