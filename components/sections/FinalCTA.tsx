"use client";

import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import WaitlistForm from "@/components/WaitlistForm";
import { track } from "@/lib/analytics";

export default function FinalCTA() {
  const { waitlistMode, contact } = siteConfig;

  return (
    <section id="contact" className="px-5 py-16">
      <div className="aurora relative mx-auto max-w-5xl overflow-hidden rounded-3xl px-6 py-20 text-center sm:px-12">
        <div className="grid-lines absolute inset-0" aria-hidden="true" />
        <div className="relative">
          <Reveal>
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
              {waitlistMode
                ? "Be first through the door"
                : "Close your next month in an afternoon"}
            </h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mx-auto mt-5 max-w-lg text-white/65">
              {waitlistMode
                ? "We are onboarding companies in waitlist order. Add your email and we will be in touch when it is your turn."
                : "Start free, no card required. Most teams are reconciling within a day."}
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto max-w-lg">
              {waitlistMode ? (
                <WaitlistForm onDark />
              ) : (
                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                  <a
                    href="#pricing"
                    onClick={() => track("cta_clicked", { location: "final" })}
                    className="rounded-xl bg-flame-500 px-8 py-4 font-semibold text-white transition-colors hover:bg-flame-600"
                  >
                    Start free trial
                  </a>
                  <a
                    href={`mailto:${contact.email}`}
                    onClick={() => track("demo_requested", { location: "final" })}
                    className="rounded-xl bg-white/10 px-8 py-4 font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-white/20"
                  >
                    Book a demo
                  </a>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
