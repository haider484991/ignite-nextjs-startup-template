"use client";

import { useEffect, useRef } from "react";
import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import { track, trackOnceOnView } from "@/lib/analytics";

export default function Pricing() {
  const ref = useRef<HTMLElement>(null);

  // Fires `pricing_viewed` the first time this section is actually seen —
  // the single most useful drop-off signal on a landing page.
  useEffect(() => trackOnceOnView(ref.current, "pricing_viewed"), []);

  return (
    <section ref={ref} id="pricing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-flame-500">
              Pricing
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Priced per entity, not per seat
            </h2>
            <p className="mt-4 opacity-65">
              Because charging your whole finance team to look at the same
              numbers is a strange way to run a business.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {siteConfig.pricing.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div
                className={`flex h-full flex-col rounded-2xl p-8 ${
                  p.featured
                    ? "bg-slate-975 text-white ring-2 ring-flame-500 dark:bg-white/5"
                    : "border border-current/10"
                }`}
              >
                {p.featured && (
                  <span className="mb-4 w-fit rounded-full bg-flame-500 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm opacity-60">{p.blurb}</p>
                <p className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-bold tracking-tight">
                    {p.price}
                  </span>
                  <span className="text-sm opacity-55">{p.period}</span>
                </p>

                <ul className="mt-7 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5 text-sm">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mt-0.5 shrink-0 text-flame-500"
                        aria-hidden="true"
                      >
                        <path d="m5 13 4 4L19 7" />
                      </svg>
                      <span className="opacity-80">{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  onClick={() =>
                    track("cta_clicked", { location: "pricing", plan: p.name })
                  }
                  className={`mt-8 rounded-xl px-6 py-3.5 text-center font-semibold transition-colors ${
                    p.featured
                      ? "bg-flame-500 text-white hover:bg-flame-600"
                      : "border border-current/15 hover:bg-current/5"
                  }`}
                >
                  {p.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
