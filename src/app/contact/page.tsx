"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SITE, CONTACT } from "@/config/site";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "success">("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  return (
    <Container>
      <div className="py-10">
        <h1 className="text-3xl font-extrabold tracking-tight">Contact</h1>
        <p className="mt-3 max-w-2xl text-sm text-zinc-700">
          Prefer to talk it through? Call or text. Want to send details? Use the form.
        </p>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-extrabold tracking-tight">Quick contact</h2>
            <div className="mt-4 space-y-3 text-sm">
              <div>
                <div className="font-semibold">Call</div>
                <a className="hover:underline" href={CONTACT.telHref}>
                  {SITE.PHONE_NUMBER}
                </a>
              </div>

              <div>
                <div className="font-semibold">Text</div>
                <a className="hover:underline" href={CONTACT.smsHref}>
                  (Tap to text)
                </a>
              </div>

              <div>
                <div className="font-semibold">Email</div>
                <div className="text-zinc-700">hello@watsons-car-services.example (placeholder)</div>
              </div>

              <div className="rounded-xl bg-zinc-50 p-4">
                <div className="font-semibold">Hours (placeholder)</div>
                <div className="mt-1 text-zinc-700">
                  Mon–Sat: 9am–6pm<br />
                  Sun: By request
                </div>
                <div className="mt-2 text-xs text-zinc-600">
                  Service area reminder: up to 100 miles scheduled from Newark, NJ.
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 bg-white p-6">
            <h2 className="text-lg font-extrabold tracking-tight">Message us</h2>

            {status === "success" ? (
              <div className="mt-4 rounded-xl bg-emerald-50 p-4 text-sm text-emerald-900">
                <div className="font-semibold">Message received (stub).</div>
                <div className="mt-1">
                  This starter doesn’t include a backend. Check the console output in dev tools.
                </div>
              </div>
            ) : null}

            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Contact form submission (stub):", form);
                setStatus("success");
              }}
            >
              <div>
                <label className="text-sm font-semibold" htmlFor="name">Name</label>
                <input
                  id="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold" htmlFor="phone">Phone</label>
                <input
                  id="phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black"
                  required
                />
              </div>

              <div>
                <label className="text-sm font-semibold" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 h-28 w-full rounded-lg border border-zinc-300 px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-black"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Send message
              </button>

              <p className="text-xs text-zinc-600">
                TODO: Replace stub handler with an API route / email provider.
              </p>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
}
