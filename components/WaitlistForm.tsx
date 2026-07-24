"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";
import { track } from "@/lib/analytics";

/**
 * Waitlist capture.
 *
 * Posts to `siteConfig.waitlistAction` when set (Formspree, ConvertKit,
 * Mailchimp, Loops, Resend, your own API route). While it is empty, the form
 * shows a built-in confirmation so the template works immediately.
 *
 * Fires `waitlist_submitted` — see lib/analytics.ts.
 */
export default function WaitlistForm({
  onDark = false,
}: {
  onDark?: boolean;
}) {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const usesBackend = siteConfig.waitlistAction !== "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    track("waitlist_submitted", { mode: usesBackend ? "live" : "demo" });
    if (!usesBackend) {
      e.preventDefault();
      setSent(true);
    }
  }

  if (sent) {
    return (
      <div
        className={`mt-8 flex items-start gap-3.5 rounded-2xl p-5 ${
          onDark
            ? "bg-white/10 text-white ring-1 ring-white/15"
            : "border border-emerald-500/30 bg-emerald-50 dark:bg-emerald-500/10"
        }`}
      >
        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-white">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="m5 13 4 4L19 7" />
          </svg>
        </span>
        <div className="text-sm leading-relaxed">
          <strong className="font-semibold">You&rsquo;re on the list.</strong>{" "}
          This is the built-in demo confirmation — set{" "}
          <code className="rounded bg-black/10 px-1.5 py-0.5 text-xs dark:bg-white/15">
            waitlistAction
          </code>{" "}
          in <code className="text-xs">config/site.ts</code> to start collecting
          real signups.
        </div>
      </div>
    );
  }

  return (
    <form
      action={usesBackend ? siteConfig.waitlistAction : undefined}
      method={usesBackend ? "POST" : undefined}
      onSubmit={handleSubmit}
      className="mt-8"
    >
      <div className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="waitlist-email" className="sr-only">
          Email address
        </label>
        <input
          id="waitlist-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`input sm:flex-1 ${onDark ? "input-on-dark" : ""}`}
        />
        <button
          type="submit"
          className="rounded-xl bg-flame-500 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-flame-600"
        >
          Join the waitlist
        </button>
      </div>
      <p
        className={`mt-3 text-sm ${onDark ? "text-white/55" : "opacity-55"}`}
      >
        {siteConfig.hero.waitlistNote}
      </p>
    </form>
  );
}
