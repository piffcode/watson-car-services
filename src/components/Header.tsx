"use client";

import Link from "next/link";
import { useState } from "react";
import { Container } from "./ui/Container";
import { SITE, CONTACT } from "@/config/site";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/booking", label: "Booking" },
  { href: "/service-area", label: "Service Area" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <Link href="/" className="font-extrabold tracking-tight">
            {SITE.BUSINESS_NAME}
          </Link>

          <nav className="hidden items-center gap-6 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-zinc-700 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href={CONTACT.telHref}
              className="text-sm font-semibold text-zinc-700 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {SITE.PHONE_NUMBER}
            </a>
            <Link
              href="/booking"
              className="rounded-lg bg-black px-3 py-2 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Book Now
            </Link>
          </div>

          <button
            className="md:hidden rounded-lg p-2 hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="block h-0.5 w-6 bg-black" />
            <span className="mt-1 block h-0.5 w-6 bg-black" />
            <span className="mt-1 block h-0.5 w-6 bg-black" />
          </button>
        </div>

        {open ? (
          <div className="md:hidden pb-4">
            <nav aria-label="Mobile">
              <ul className="flex flex-col gap-2">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold hover:bg-zinc-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="mt-3 flex gap-2">
              <a
                href={CONTACT.telHref}
                className="flex-1 rounded-lg bg-white px-3 py-2 text-center text-sm font-semibold ring-1 ring-zinc-200 hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Call
              </a>
              <Link
                href="/booking"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg bg-black px-3 py-2 text-center text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Book Now
              </Link>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
