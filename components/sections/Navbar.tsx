"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";
import { siteConfig } from "@/config/site";
import { track } from "@/lib/analytics";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { waitlistMode } = siteConfig;

  // In waitlist mode there is no pricing or feature detail to link to.
  const links = waitlistMode
    ? [{ href: "#faq", label: "FAQ" }]
    : [
        { href: "#features", label: "Features" },
        { href: "#pricing", label: "Pricing" },
        { href: "#investors", label: "Investors" },
        { href: "#faq", label: "FAQ" },
      ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors ${
        scrolled
          ? "border-b border-white/10 bg-slate-975/80 backdrop-blur-xl"
          : ""
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-2.5" aria-label={`${siteConfig.name} — home`}>
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-flame-500 text-white">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z" />
            </svg>
          </span>
          <span className="text-lg font-bold tracking-tight text-white">
            {siteConfig.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-white/70 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <ThemeToggle className="text-white" />
          <a
            href={waitlistMode ? "#top" : "#pricing"}
            onClick={() => track("cta_clicked", { location: "navbar" })}
            className="hidden rounded-lg bg-flame-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-flame-600 sm:inline-block"
          >
            {waitlistMode ? "Join waitlist" : "Start free"}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white md:hidden"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-975 px-5 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/10 py-3.5 text-base font-medium text-white last:border-0"
            >
              {l.label}
            </a>
          ))}
          <a
            href={waitlistMode ? "#top" : "#pricing"}
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-flame-500 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            {waitlistMode ? "Join waitlist" : "Start free"}
          </a>
        </div>
      )}
    </header>
  );
}
