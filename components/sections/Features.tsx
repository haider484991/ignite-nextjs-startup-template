import { siteConfig } from "@/config/site";
import Reveal from "@/components/Reveal";

export default function Features() {
  return (
    <section id="features" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-flame-500">
              Product
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
              Everything month-end needs. Nothing it doesn&rsquo;t.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60}>
              <article className="h-full rounded-2xl border border-current/10 p-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-flame-500/10 text-flame-500">
                  <span className="text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed opacity-65">
                  {f.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
