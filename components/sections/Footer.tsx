import { siteConfig } from "@/config/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-5 pb-12">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-6 border-t border-current/10 pt-8 sm:flex-row sm:items-center">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-flame-500 text-white">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5z" />
            </svg>
          </span>
          <span className="font-bold tracking-tight">{siteConfig.name}</span>
        </div>

        <div className="flex flex-wrap gap-5 text-sm">
          <a href={siteConfig.social.x} target="_blank" rel="noopener noreferrer" className="opacity-65 hover:opacity-100">
            X
          </a>
          <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="opacity-65 hover:opacity-100">
            LinkedIn
          </a>
          <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="opacity-65 hover:opacity-100">
            GitHub
          </a>
          <a href={`mailto:${siteConfig.contact.email}`} className="opacity-65 hover:opacity-100">
            Contact
          </a>
        </div>
      </div>

      <div className="mx-auto mt-6 flex max-w-6xl flex-col justify-between gap-2 text-xs opacity-50 sm:flex-row">
        <span>
          © {year} {siteConfig.name}. All rights reserved.
        </span>
        <span>{siteConfig.footerNote}</span>
      </div>
    </footer>
  );
}
