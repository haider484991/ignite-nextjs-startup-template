"use client";

import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import { track } from "@/lib/analytics";

/**
 * The section most startup templates leave out.
 * Founders end up building it by hand at the worst possible moment — the week
 * they start raising. Set `investors.enabled: false` to hide it.
 */
export default function Investors() {
  const { investors, contact } = siteConfig;
  if (!investors.enabled) return null;

  return (
    <section
      id="investors"
      className="border-y border-current/10 bg-current/[0.02] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-flame-500">
                {investors.heading}
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                {investors.body}
              </h2>
              <a
                href={`mailto:${contact.email}?subject=Investor%20deck%20request`}
                onClick={() => track("cta_clicked", { location: "investors" })}
                className="mt-8 inline-flex items-center gap-2 rounded-xl bg-flame-500 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-flame-600"
              >
                {investors.ctaLabel}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <dl className="grid gap-px overflow-hidden rounded-2xl bg-current/10 sm:grid-cols-2">
              {investors.points.map(([label, detail]) => (
                <div
                  key={label}
                  className="bg-white p-7 dark:bg-slate-975"
                >
                  <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-flame-500">
                    {label}
                  </dt>
                  <dd className="mt-2.5 text-sm leading-relaxed opacity-70">
                    {detail}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
