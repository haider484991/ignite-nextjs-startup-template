"use client";

import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";
import { track } from "@/lib/analytics";

/**
 * Native <details>/<summary> accordion — works with zero JavaScript, is
 * keyboard accessible for free, and is announced correctly by screen readers.
 * Also emitted as FAQPage structured data (see app/layout.tsx).
 */
export default function FAQ() {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Questions we actually get asked
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {siteConfig.faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 50}>
              <details
                className="group rounded-2xl border border-current/10 px-6"
                onToggle={(e) => {
                  if ((e.currentTarget as HTMLDetailsElement).open) {
                    track("faq_opened", { question: f.q });
                  }
                }}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-medium">
                  {f.q}
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="shrink-0 text-flame-500 transition-transform group-open:rotate-45"
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="pb-5 pr-8 text-sm leading-relaxed opacity-70">
                  {f.a}
                </p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
