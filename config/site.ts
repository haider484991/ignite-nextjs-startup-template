/**
 * ─────────────────────────────────────────────────────────────────────────────
 * IGNITE — single source of truth
 * ─────────────────────────────────────────────────────────────────────────────
 * One flag changes everything: `waitlistMode`.
 *
 *   waitlistMode: true   → a focused pre-launch capture page (hero + email +
 *                          proof + FAQ). Pricing, features, and the investor
 *                          block are hidden. This is what you want before you
 *                          have a product to show.
 *
 *   waitlistMode: false  → the full launch landing page.
 *
 * Flip it on launch day, run `npm run build`, and redeploy — that is the whole
 * migration. You do not maintain two sites, and no content is thrown away.
 *
 * (This template is a static export, so the flag is read at build time.)
 */

export const siteConfig = {
  name: "Ignite",
  title: "Ignite — Ship your startup's landing page today",
  description:
    "The startup landing page template with waitlist mode, investor-ready sections, and analytics pre-wired. Built with Next.js 15 and Tailwind CSS v4.",
  url: "https://ignite.example.com",

  /** ← THE FLAG. See the note above. */
  waitlistMode: false,

  contact: {
    email: "founders@ignite.example.com",
  },

  social: {
    x: "https://x.com/",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/",
  },

  hero: {
    badge: "Pre-launch · Y2K Batch",
    headline: "Close your books in an afternoon, not a fortnight.",
    sub: "Ignite reconciles your invoices, receipts, and bank feed automatically — so month-end takes an afternoon instead of two weeks of spreadsheet archaeology.",
    /** Shown in waitlist mode under the email field. */
    waitlistNote: "Join 2,100+ founders on the waitlist. No spam, one launch email.",
    /** Shown in launch mode instead of the email capture. */
    primaryCta: "Start free trial",
    secondaryCta: "Book a demo",
  },

  /**
   * Social proof numbers. Keep these HONEST — inflated traction is the fastest
   * way to lose a founder's credibility with both users and investors.
   */
  proof: {
    heading: "Backed by people who have done this before",
    logos: ["Northwind", "Aperture", "Cobalt VC", "Studio Nine", "Vantage"],
    metrics: [
      { value: "2,100+", label: "On the waitlist" },
      { value: "$1.4M", label: "Pre-seed raised" },
      { value: "11 days", label: "Avg. close time saved" },
    ],
  },

  features: [
    {
      title: "Automatic reconciliation",
      body: "Bank feed in, matched transactions out. Ignite learns your chart of accounts in the first week and stops asking after that.",
    },
    {
      title: "Receipts that file themselves",
      body: "Forward an email or snap a photo. We extract the line items, match them to the card charge, and attach the evidence.",
    },
    {
      title: "Close checklist",
      body: "Every month-end task, who owns it, and what is blocking it — so nobody discovers an unreconciled account on the last day.",
    },
    {
      title: "Audit trail by default",
      body: "Every change is versioned and attributed. When your accountant asks why a number moved, the answer takes ten seconds.",
    },
    {
      title: "Works with your ledger",
      body: "Two-way sync with Xero, QuickBooks, and NetSuite. Ignite sits on top of what you already run — no migration project.",
    },
    {
      title: "Real support",
      body: "A shared Slack channel with actual accountants, not a chatbot that suggests you read the documentation.",
    },
  ],

  pricing: [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      blurb: "For pre-revenue and early startups.",
      features: ["1 entity", "Up to 500 transactions/mo", "Xero or QuickBooks sync", "Email support"],
      cta: "Start free trial",
      featured: false,
    },
    {
      name: "Growth",
      price: "$149",
      period: "/month",
      blurb: "For teams that have a real month-end.",
      features: ["3 entities", "Up to 5,000 transactions/mo", "Close checklist & approvals", "Shared Slack channel", "Audit trail export"],
      cta: "Start free trial",
      featured: true,
    },
    {
      name: "Scale",
      price: "Custom",
      period: "",
      blurb: "Multi-entity, consolidated, audited.",
      features: ["Unlimited entities", "Consolidation & FX", "NetSuite sync", "SSO & SCIM", "Dedicated accountant"],
      cta: "Talk to us",
      featured: false,
    },
  ],

  /** Investor block — shown in launch mode. Set `enabled: false` to hide. */
  investors: {
    enabled: true,
    heading: "For investors",
    body: "We are building the financial close layer for the 400,000 startups that outgrew a spreadsheet but cannot justify a controller.",
    points: [
      ["Market", "$4.2B spent annually on outsourced bookkeeping by seed and Series A companies."],
      ["Wedge", "Reconciliation is the most painful, most repeated, most automatable step — and the one that creates the data moat."],
      ["Traction", "2,100 waitlist signups in 9 weeks with zero paid acquisition."],
      ["Team", "Two ex-Stripe engineers and a chartered accountant who spent six years closing books at scale."],
    ],
    ctaLabel: "Request the deck",
  },

  faqs: [
    {
      q: "When do you launch?",
      a: "Private beta is running now with 40 companies. General availability is planned for Q4. Join the waitlist and you will get access in the order you signed up.",
    },
    {
      q: "Do you replace my accountant?",
      a: "No, and we would be suspicious of anyone who said yes. Ignite removes the mechanical work so your accountant spends their time on judgement calls instead of matching receipts.",
    },
    {
      q: "Which ledgers do you support?",
      a: "Xero and QuickBooks Online today, with two-way sync. NetSuite is in private beta on the Scale plan.",
    },
    {
      q: "How is my financial data handled?",
      a: "Bank connections are read-only and go through a regulated aggregator — we never hold your banking credentials. Data is encrypted at rest and in transit, and you can export or delete everything at any time.",
    },
  ],

  /**
   * Where the waitlist form posts. Leave empty to use the built-in demo
   * confirmation. Works with any form endpoint: Formspree, ConvertKit,
   * Mailchimp, Loops, Resend, or your own API route.
   */
  waitlistAction: "",

  footerNote: "Built with the free Ignite template by Pixel & Oak.",
} as const;

export type SiteConfig = typeof siteConfig;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    email: siteConfig.contact.email,
    sameAs: [siteConfig.social.x, siteConfig.social.linkedin, siteConfig.social.github],
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteConfig.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
