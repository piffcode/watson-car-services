export function FAQ() {
  const items = [
    {
      q: "Do you really come to me?",
      a: "Yes — home, work, or wherever your car is safely parked. The goal is comfort and convenience."
    },
    {
      q: "How far do you travel?",
      a: "Scheduled appointments: up to 100 miles from Newark, NJ. Same-day may be available within 50 miles depending on availability."
    },
    {
      q: "Are your prices exact?",
      a: "We keep pricing straightforward. Some services start at a listed price and depend on vehicle size/condition — we’ll confirm before we begin."
    },
    {
      q: "What repairs do you do?",
      a: "Basic services like oil changes, tire replacement, window replacement, brake pad changes, and diagnostics."
    },
    {
      q: "What if I’m not sure what I need?",
      a: "Call for a quick consultation — we’ll point you in the right direction without the runaround."
    }
  ];

  return (
    <section className="rounded-2xl border border-zinc-200 bg-white p-6">
      <h2 className="text-lg font-extrabold tracking-tight">FAQ</h2>
      <dl className="mt-4 space-y-4">
        {items.map((it) => (
          <div key={it.q} className="rounded-xl bg-zinc-50 p-4">
            <dt className="text-sm font-semibold">{it.q}</dt>
            <dd className="mt-1 text-sm text-zinc-700">{it.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
