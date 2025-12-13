"use client";

import { useId, useState, type ReactNode } from "react";

export function Tabs({
  tabs
}: {
  tabs: Array<{ label: string; content: ReactNode }>;
}) {
  const baseId = useId();
  const [active, setActive] = useState(0);

  return (
    <div>
      <div
        role="tablist"
        aria-label="Service categories"
        className="flex gap-2 rounded-xl bg-zinc-100 p-1"
      >
        {tabs.map((t, idx) => {
          const selected = idx === active;
          return (
            <button
              key={t.label}
              id={`${baseId}-tab-${idx}`}
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel-${idx}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(idx)}
              className={[
                "flex-1 rounded-lg px-3 py-2 text-sm font-semibold transition",
                selected ? "bg-white shadow-sm" : "hover:bg-white/60"
              ].join(" ")}
            >
              {t.label}
            </button>
          );
        })}
      </div>

      {tabs.map((t, idx) => {
        const selected = idx === active;
        return (
          <div
            key={t.label}
            id={`${baseId}-panel-${idx}`}
            role="tabpanel"
            aria-labelledby={`${baseId}-tab-${idx}`}
            hidden={!selected}
            className="mt-4"
          >
            {selected ? t.content : null}
          </div>
        );
      })}
    </div>
  );
}
