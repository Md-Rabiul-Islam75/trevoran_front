import Image from "next/image";
import { Garment } from "@/components/Garment";
import { contactLinks, site } from "@/lib/site";

function Wordmark() {
  if (site.logo) {
    return <Image src={site.logo} alt={site.name} width={180} height={48} priority className="h-10 w-auto" />;
  }
  return (
    <span className="flex flex-col leading-none" aria-label={site.name}>
      <span className="font-display text-[1.35rem] font-medium tracking-[0.34em]">{site.wordmark}</span>
      <span className="mt-1.5 text-[0.6rem] font-medium uppercase tracking-[0.5em] text-camel">Clothing</span>
    </span>
  );
}

export default function Home() {
  const links = contactLinks();

  return (
    <main className="cs-grid">
      <header className="area-header flex items-center justify-between px-5 pt-6 sm:px-10 lg:px-16 lg:pt-10">
        <Wordmark />
        <span className="text-[0.7rem] uppercase tracking-[0.24em] text-ivory/60">Menswear</span>
      </header>

      {/* Picture panel: the drawn polo until a real photo is set in lib/site.ts */}
      <div className="area-panel px-5 pt-6 sm:px-10 lg:p-0">
        <div className="pique stitch relative aspect-[5/4] overflow-hidden rounded-sm sm:aspect-[16/10] lg:aspect-auto lg:h-full lg:rounded-none">
          {site.heroImage ? (
            <Image
              src={site.heroImage}
              alt={site.heroImageAlt}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 flex items-center justify-center pb-6 text-navy">
                <Garment
                  kind="polo"
                  fill="var(--color-ivory-2)"
                  strokeWidth={1.6}
                  className="rise h-[66%] w-auto lg:h-[58%]"
                  style={{ animationDelay: "150ms" }}
                />
              </div>
              <p className="absolute inset-x-0 bottom-7 text-center text-[0.65rem] uppercase tracking-[0.32em] text-navy/55 lg:bottom-12">
                Polo · T-shirt · Shirt
              </p>
            </>
          )}
        </div>
      </div>

      <section className="area-content flex flex-col justify-center px-5 py-12 sm:px-10 lg:px-16 lg:py-10">
        <p className="rise flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] text-camel">
          <span aria-hidden className="h-px w-8 bg-camel" />
          {site.eyebrow}
        </p>

        <h1
          className="rise mt-6 max-w-[13ch] font-display text-[2.7rem] leading-[1.04] font-normal sm:text-6xl lg:text-[min(4.25rem,7.4vh)]"
          style={{ animationDelay: "80ms" }}
        >
          {site.headline.before} <em className="text-camel">{site.headline.emphasis}</em>
        </h1>

        <p
          className="rise mt-6 max-w-md text-base leading-relaxed text-ivory/75 sm:text-lg"
          style={{ animationDelay: "160ms" }}
        >
          {site.intro}
        </p>

        <div className="rise mt-10" style={{ animationDelay: "240ms" }}>
          <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ivory/55">{site.collectionTitle}</h2>
          <ul className="mt-4 grid max-w-md grid-cols-3 gap-3">
            {site.collection.map((item) => (
              <li
                key={item.kind}
                className="flex flex-col items-center gap-2 rounded-sm border border-dashed border-ivory/20 px-2 pt-4 pb-3 text-center"
              >
                <Garment kind={item.kind} strokeWidth={1.3} className="h-12 w-12 text-ivory" />
                <span className="text-sm">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>

        {links.length > 0 && (
          <div className="rise mt-10" style={{ animationDelay: "320ms" }}>
            <h2 className="text-[0.7rem] font-medium uppercase tracking-[0.24em] text-ivory/55">Follow the launch</h2>
            <ul className="mt-4 flex flex-wrap gap-2">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex rounded-full border border-ivory/25 px-4 py-2 text-sm transition-colors hover:bg-ivory hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-camel"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      <footer className="area-footer mx-5 flex flex-wrap items-center justify-between gap-2 border-t border-ivory/10 py-6 text-xs text-ivory/50 sm:mx-10 lg:mx-16">
        <span>© {site.name}</span>
        <span>{site.domain}</span>
      </footer>
    </main>
  );
}
