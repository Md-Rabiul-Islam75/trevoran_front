import Image from "next/image";
import type { ReactNode } from "react";
import { Garment } from "@/components/Garment";
import { HeroSlider } from "@/components/HeroSlider";
import { PromiseIcon } from "@/components/PromiseIcon";
import { contactLinks, site } from "@/lib/site";

function Eyebrow({ children, tone = "camel" }: { children: ReactNode; tone?: "camel" | "bronze" }) {
  const color = tone === "camel" ? "text-camel" : "text-bronze";
  const rule = tone === "camel" ? "bg-camel" : "bg-bronze";
  return (
    <p className={`flex items-center gap-3 text-xs font-medium uppercase tracking-[0.28em] ${color}`}>
      <span aria-hidden className={`h-px w-8 ${rule}`} />
      {children}
    </p>
  );
}

// The gold V from the logo, used as a separator in the moving text band.
function Chevron({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 20 16" className={className} fill="currentColor">
      <path d="M0 0l6 2.2L10 9l4-6.8L20 0l-10 16z" />
    </svg>
  );
}

function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-between gap-3 px-5 pt-5 sm:px-10 sm:pt-7 lg:px-page">
      <a href="#top" className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-camel">
        <Image src={site.logo} alt={site.name} width={974} height={177} preload className="h-7 w-auto sm:h-10" />
      </a>
      <nav aria-label="Sections" className="hidden items-center gap-9 lg:flex">
        {site.nav.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="text-xs font-medium uppercase tracking-[0.24em] text-ivory/75 transition-colors hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-camel"
          >
            {item.label}
          </a>
        ))}
      </nav>
      {/* Hidden below 360px wide: there is no room beside the logo, and every slide already says "Coming soon" */}
      <span className="hidden items-center gap-2 rounded-full border border-camel/60 bg-navy/30 px-3 py-1.5 text-[0.6rem] font-medium tracking-[0.18em] whitespace-nowrap uppercase backdrop-blur-sm min-[360px]:inline-flex sm:px-3.5 sm:text-[0.65rem] sm:tracking-[0.24em]">
        <span aria-hidden className="pulse-dot h-1.5 w-1.5 rounded-full bg-camel" />
        Coming soon
      </span>
    </header>
  );
}

function Marquee() {
  // Two identical copies side by side; the track slides left by one copy and repeats.
  return (
    <div aria-hidden className="overflow-hidden border-y border-ivory/10 bg-navy py-5 sm:py-6">
      <div className="marquee-track flex w-max">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {site.marquee.map((word) => (
              <span key={word} className="flex items-center">
                <span className="px-6 font-display text-2xl whitespace-nowrap text-ivory/85 italic sm:px-9 sm:text-3xl">
                  {word}
                </span>
                <Chevron className="h-3 w-4 text-camel" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function Collection() {
  const c = site.collection;
  return (
    <section id="collection" aria-labelledby="collection-title" className="pique py-20 text-navy sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <div className="reveal grid gap-6 lg:grid-cols-2 lg:items-end">
          <div>
            <Eyebrow tone="bronze">{c.eyebrow}</Eyebrow>
            <h2 id="collection-title" className="mt-5 font-display text-5xl text-balance leading-[1.02] font-normal sm:text-6xl xl:text-7xl">
              {c.title.before} <em className="text-bronze">{c.title.emphasis}</em>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-navy/70 lg:justify-self-end">{c.intro}</p>
        </div>

        {/* Phones and small tablets: swipe sideways through the cards (scroll-px keeps the page margin
            when a card snaps into place). From 768px wide: three columns. */}
        <ul className="reveal no-scrollbar -mx-5 mt-14 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:-mx-10 sm:scroll-px-10 sm:px-10 md:mx-0 md:grid md:grid-cols-3 md:gap-6 md:overflow-visible md:px-0 md:pb-0">
          {c.items.map((item, i) => (
            <li key={item.kind} className="w-[78%] shrink-0 snap-start sm:w-[46%] md:w-auto">
              <article className="group">
                <div className="relative aspect-4/5 overflow-hidden rounded-sm bg-ivory-2">
                  <Image
                    src={item.photo.src}
                    alt={item.photo.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 46vw, 78vw"
                    className="object-cover transition-transform duration-1200 ease-out group-hover:scale-105"
                  />
                  {/* The same garment on a model: fades in on hover (laptops) */}
                  <Image
                    src={item.model.src}
                    alt={item.model.alt}
                    fill
                    sizes="(min-width: 768px) 33vw, (min-width: 640px) 46vw, 78vw"
                    className="object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                  />
                  <span className="absolute top-4 left-4 rounded-full bg-navy px-3 py-1 text-[0.6rem] font-medium tracking-[0.24em] text-ivory uppercase">
                    Coming soon
                  </span>
                  <span className="absolute top-3 right-4 font-display text-2xl text-ivory drop-shadow-md">
                    0{i + 1}
                  </span>
                  {/* Small "on model" picture, so phones (no hover) see it too */}
                  <div
                    aria-hidden
                    className="absolute right-3 bottom-3 w-[28%] overflow-hidden rounded-sm border-2 border-ivory shadow-lg transition-opacity duration-500 group-hover:opacity-0"
                  >
                    <div className="relative aspect-4/5">
                      <Image src={item.model.src} alt="" fill sizes="140px" className="object-cover" />
                    </div>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-3xl font-normal">{item.name}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-navy/70">{item.line}</p>
                  </div>
                  <Garment kind={item.kind} strokeWidth={1.3} className="h-10 w-10 shrink-0 text-navy/55" />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Look({ look }: { look: (typeof site.lookbook.looks)[number] }) {
  return (
    <figure className="reveal relative aspect-4/5 overflow-hidden rounded-sm bg-navy-2">
      {/* parallax-img: drifts slowly while the page scrolls (globals.css) */}
      <Image
        src={look.src}
        alt={look.alt}
        fill
        sizes="(min-width: 1024px) 30vw, 50vw"
        className="parallax-img object-cover"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-navy/85 to-transparent px-4 pt-12 pb-4 text-[0.65rem] font-medium tracking-[0.24em] uppercase sm:text-xs">
        {look.caption}
      </figcaption>
    </figure>
  );
}

function Lookbook() {
  const l = site.lookbook;
  const [first, second, third] = l.looks;

  return (
    <section id="lookbook" aria-labelledby="lookbook-title" className="py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-10 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-20 lg:px-16">
        <div className="reveal lg:sticky lg:top-16 lg:self-start lg:pt-16">
          <Eyebrow>{l.eyebrow}</Eyebrow>
          <h2 id="lookbook-title" className="mt-5 font-display text-5xl text-balance leading-[1.02] font-normal sm:text-6xl xl:text-7xl">
            {l.title.before} <em className="text-camel">{l.title.emphasis}</em>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ivory/75">{l.text}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          <div className="flex flex-col gap-3 sm:gap-5">
            <Look look={first} />
            <Look look={third} />
          </div>
          <div className="flex flex-col gap-3 pt-16 sm:gap-5 sm:pt-28">
            <Look look={second} />
            <div className="reveal flex flex-1 flex-col justify-center rounded-sm border border-camel/30 p-5 sm:p-8">
              <p className="text-[0.65rem] font-medium tracking-[0.28em] text-camel uppercase sm:text-xs">Made for</p>
              <ul className="mt-3 space-y-1">
                {l.moments.map((m) => (
                  <li key={m} className="font-display text-2xl italic sm:text-4xl">
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function OurPromise() {
  const p = site.promise;
  return (
    <section id="promise" aria-labelledby="promise-title" className="bg-ivory py-20 text-navy sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-10 lg:px-16">
        <div className="reveal">
          <Eyebrow tone="bronze">{p.eyebrow}</Eyebrow>
          <h2 id="promise-title" className="mt-5 font-display text-5xl text-balance leading-[1.02] font-normal sm:text-6xl">
            {p.title.before} <em className="text-bronze">{p.title.emphasis}</em>
          </h2>
        </div>
        <ul className="reveal mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {p.items.map((item) => (
            <li key={item.title} className="border-t border-navy/15 pt-7">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-navy/20 text-navy">
                <PromiseIcon kind={item.icon} className="h-7 w-7" />
              </span>
              <h3 className="mt-6 font-display text-2xl font-normal">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-navy/70">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Launch() {
  const links = contactLinks();
  const l = site.launch;
  return (
    <section aria-labelledby="launch-title" className="relative isolate overflow-hidden py-24 text-center sm:py-32">
      {/* Faint photo behind, fading into the navy */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <Image src={site.hero.slides[0].photo.src} alt="" fill sizes="100vw" className="object-cover object-[50%_25%] opacity-20" />
        <div className="absolute inset-0 bg-linear-to-b from-navy via-navy/70 to-navy" />
      </div>
      <div className="mx-auto max-w-3xl px-5 sm:px-10">
        <Image
          src={site.logoFull}
          alt={`${site.wordmark}, Men's outfit. Style meets confidence.`}
          width={974}
          height={283}
          sizes="(min-width: 640px) 560px, 90vw"
          className="reveal mx-auto h-auto w-[min(560px,90%)]"
        />
        <h2 id="launch-title" className="reveal mt-16 font-display text-5xl text-balance leading-[1.04] font-normal sm:text-6xl">
          {l.title.before} <em className="text-camel">{l.title.emphasis}</em>
        </h2>
        <p className="reveal mx-auto mt-6 max-w-md text-lg leading-relaxed text-ivory/75">{l.text}</p>

        {links.length > 0 && (
          <div className="reveal mt-10">
            <h3 className="text-[0.7rem] font-medium tracking-[0.24em] text-ivory/55 uppercase">{l.linksTitle}</h3>
            <ul className="mt-4 flex flex-wrap justify-center gap-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="inline-flex rounded-full border border-ivory/25 px-5 py-2.5 text-sm transition-colors hover:bg-ivory hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-camel"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-ivory/10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16">
        <Image src={site.logo} alt={site.name} width={974} height={177} className="h-7 w-auto self-start lg:self-auto" />
        <nav aria-label="Footer" className="flex flex-wrap gap-x-7 gap-y-2">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs tracking-[0.2em] text-ivory/60 uppercase transition-colors hover:text-ivory focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-camel"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <p className="text-xs text-ivory/50">
          © {site.name} · {site.domain}
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main id="top">
      <h1 className="sr-only">{site.name}: men&apos;s shirts, t-shirts and polo shirts. Coming soon.</h1>
      <div className="relative">
        <Header />
        <HeroSlider slides={site.hero.slides} comingSoon={site.hero.comingSoon} />
      </div>
      <Marquee />
      <Collection />
      <Lookbook />
      <OurPromise />
      <Launch />
      <Footer />
    </main>
  );
}
