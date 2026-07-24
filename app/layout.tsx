import type { Metadata } from "next";
import { siteConfig, organizationSchema, faqSchema } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "startup landing page template",
    "waitlist template",
    "landing page template",
    "Next.js template",
    "Tailwind CSS template",
    "coming soon template",
  ],
  authors: [{ name: "Pixel & Oak", url: "https://pixelandoak.com" }],
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

const themeInitScript = `
try {
  var t = localStorage.getItem("theme");
  if (t === "dark" || (!t && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema()) }}
        />
        {/*
          Drop your analytics snippet here and every event in this template
          starts reporting automatically — see lib/analytics.ts. Example:
          <script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js" />
        */}
      </head>
      <body className="bg-white font-sans text-slate-950 antialiased dark:bg-slate-975 dark:text-slate-100">
        {children}
      </body>
    </html>
  );
}
