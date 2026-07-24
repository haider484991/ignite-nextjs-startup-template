"use client";

import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";
import { track } from "@/lib/analytics";

export default function Hero() {
  const { hero, waitlistMode, proof } = siteConfig;

  return (
    <section className="aurora relative overflow-hidden">
      <div className="grid-lines absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-5 pb-24 pt-24 text-center sm:pb-32 sm:pt-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-flame-100 ring-1 ring-white/15">
            <span className="h-1.5 w-1.5 rounded-full bg-flame-500" />
            {hero.badge}
          </span>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mx-auto mt-8 max-w-3xl text-4xl font-bold leading-[1.06] tracking-tight text-white sm:text-6xl">
            {hero.headline}
          </h1>
        </Reveal>

        <Reveal delay={150}>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/65">
            {hero.sub}
          </p>
        </Reveal>

        <Reveal delay={220}>
          <div className="mx-auto max-w-lg">
            {waitlistMode ? (
              <WaitlistForm onDark />
            ) : (
              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="#pricing"
                  onClick={() => track("cta_clicked", { location: "hero", label: hero.primaryCta })}
                  className="rounded-xl bg-flame-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-flame-600"
                >
                  {hero.primaryCta}
                </a>
                <a
                  href="#contact"
                  onClick={() => track("demo_requested", { location: "hero" })}
                  className="rounded-xl bg-white/10 px-8 py-4 font-semibold text-white ring-1 ring-white/20 backdrop-blur transition-colors hover:bg-white/20"
                >
                  {hero.secondaryCta}
                </a>
              </div>
            )}
          </div>
        </Reveal>

        {/* Traction metrics */}
        <Reveal delay={300}>
          <dl className="mx-auto mt-20 grid max-w-2xl grid-cols-3 gap-8">
            {proof.metrics.map((m) => (
              <div key={m.label}>
                <dt className="text-3xl font-bold text-white sm:text-4xl">
                  {m.value}
                </dt>
                <dd className="mt-1.5 text-xs uppercase tracking-wider text-white/45">
                  {m.label}
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
