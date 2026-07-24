import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

/**
 * Investor / customer logo wall.
 * Logos are rendered as wordmarks so the template ships with no image files
 * and no third-party trademarks. Swap in real SVGs when you have permission
 * to use them — and only then.
 */
export default function Proof() {
  return (
    <section className="border-y border-current/10 py-14">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] opacity-45">
            {siteConfig.proof.heading}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {siteConfig.proof.logos.map((l) => (
              <span
                key={l}
                className="text-lg font-semibold tracking-tight opacity-35 transition-opacity hover:opacity-60"
              >
                {l}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
