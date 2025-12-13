import Link from "next/link";
import { CONTACT } from "@/config/site";

export function StickyMobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-zinc-200 bg-white p-3 md:hidden">
      <div className="mx-auto flex max-w-6xl gap-2 px-1">
        <Link
          href="/booking"
          className="flex-1 rounded-lg bg-black px-4 py-3 text-center text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Book Now
        </Link>
        <a
          href={CONTACT.telHref}
          className="flex-1 rounded-lg bg-white px-4 py-3 text-center text-sm font-semibold ring-1 ring-zinc-200 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Call
        </a>
      </div>
    </div>
  );
}
