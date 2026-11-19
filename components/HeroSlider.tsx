"use client";

import Image from "next/image";
import { useState, type AnimationEvent } from "react";
import { Garment } from "@/components/Garment";
import type { HeroSlide } from "@/lib/site";

type ComingSoon = { label: string; eyebrow: string; words: string[]; line: string };

type Props = { slides: HeroSlide[]; comingSoon: ComingSoon };

// How long each slide stays (ms). The progress bar under the active control runs for this long and moves
// the slider on when it finishes, so pausing the bar (Pause button) also pauses the slider.
const PRODUCT_MS = 5000;
const COMING_SOON_MS = 6500;

export function HeroSlider({ slides, comingSoon }: Props) {
  const total = slides.length + 1; // + the "Coming soon" slide
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const isComingSoon = (i: number) => i === slides.length;

  function onBarEnd(e: AnimationEvent<HTMLSpanElement>) {
    if (e.target !== e.currentTarget) return;
    setActive((i) => (i + 1) % total);
  }

  const controls = [
    ...slides.map((s) => ({ label: s.label, kind: s.kind as HeroSlide["kind"] | null })),
    { label: comingSoon.label, kind: null },
  ];

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Trevoran first collection"
      className="hero relative isolate h-[100svh] min-h-[560px] overflow-hidden bg-navy"
    >
      <div aria-live={paused ? "polite" : "off"}>
        {slides.map((s, i) => (
          <div
            key={s.kind}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} of ${total}: ${s.title}`}
            aria-hidden={active !== i}
            inert={active !== i}
            className={`hero-slide absolute inset-0 ${active === i ? "is-active" : ""}`}
          >
            {/* Photo: full screen on phones, right-hand 60% on laptops */}
            <div className="absolute inset-0 overflow-hidden lg:left-[38%]">
              <Image
                src={s.photo.src}
                alt={s.photo.alt}
                fill
                preload={i === 0}
                loading="eager" // every slide is shown within seconds, so load them all straight away
                sizes="(min-width: 1024px) 62vw, 100vw"
                className="hero-photo object-cover"
                style={{ objectPosition: s.focus ?? "50% 30%" }}
              />
              {/* Fades that blend the photo into the navy page and keep the text readable */}
              <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/45 to-navy/10 lg:hidden" />
              <div className="absolute inset-y-0 left-0 hidden w-3/5 bg-linear-to-r from-navy via-navy/55 to-transparent lg:block" />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-navy/80 to-transparent" />
              <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-navy/70 to-transparent" />
            </div>

            <div className="hero-text absolute inset-x-0 bottom-28 px-5 sm:bottom-32 sm:px-10 lg:inset-y-0 lg:flex lg:w-[52%] lg:flex-col lg:justify-center lg:pr-16 lg:pl-page">
              <p className="hero-in flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.28em] text-camel" style={{ animationDelay: "150ms" }}>
                <span aria-hidden className="hero-rule h-px w-8 bg-camel" />
                {s.eyebrow}
              </p>
              <h2 className="mt-4 overflow-hidden pb-2 font-display text-[4.2rem] leading-[0.95] font-normal sm:text-8xl lg:text-[min(9rem,15vh)]">
                <span className="hero-title block">{s.title}</span>
              </h2>
              <p className="hero-in mt-4 max-w-sm text-base leading-relaxed text-ivory/80 sm:text-lg" style={{ animationDelay: "450ms" }}>
                {s.line}
              </p>
              <p className="hero-in mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-ivory/25 bg-navy/40 px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.24em] backdrop-blur-sm" style={{ animationDelay: "600ms" }}>
                <span aria-hidden className="pulse-dot h-1.5 w-1.5 rounded-full bg-camel" />
                Coming soon
              </p>
            </div>
          </div>
        ))}

        {/* Last slide: the three photos side by side, dimmed, with "Coming soon" animating in on top */}
        <div
          role="group"
          aria-roledescription="slide"
          aria-label={`${total} of ${total}: ${comingSoon.words.join(" ")}`}
          aria-hidden={!isComingSoon(active)}
          inert={!isComingSoon(active)}
          className={`hero-slide absolute inset-0 ${isComingSoon(active) ? "is-active" : ""}`}
        >
          <div aria-hidden className="absolute inset-0 grid grid-cols-3">
            {slides.map((s, i) => (
              <div key={s.kind} className="relative overflow-hidden">
                <Image
                  src={s.photo.src}
                  alt=""
                  fill
                  sizes="34vw"
                  className="triptych-photo object-cover grayscale"
                  style={{ objectPosition: s.focus ?? "50% 30%", animationDelay: `${i * 120}ms` }}
                />
              </div>
            ))}
            <div className="absolute inset-0 bg-navy/80" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--color-navy)_85%)]" />
          </div>

          <div className="hero-text relative flex h-full flex-col items-center justify-center px-5 pb-16 text-center">
            <p className="hero-in text-[0.7rem] font-medium uppercase tracking-[0.4em] text-camel" style={{ animationDelay: "100ms" }}>
              {comingSoon.eyebrow}
            </p>
            <h2
              aria-label={comingSoon.words.join(" ")}
              className="mt-5 font-display text-[4.4rem] leading-[0.92] font-normal sm:text-[8rem] lg:text-[min(11rem,19vh)]"
            >
              {comingSoon.words.map((word, w) => {
                // letters before this word, so the letters keep rising one after another across both words
                const before = comingSoon.words.slice(0, w).join("").length;
                return (
                  <span
                    key={word}
                    aria-hidden
                    className={`block overflow-hidden pb-[0.08em] ${w === 1 ? "italic text-camel" : ""}`}
                  >
                    {Array.from(word).map((ch, c) => (
                      <span
                        key={c}
                        className="cs-letter inline-block"
                        style={{ animationDelay: `${250 + (before + c) * 70}ms` }}
                      >
                        {ch}
                      </span>
                    ))}
                  </span>
                );
              })}
            </h2>
            <span aria-hidden className="cs-line mt-7 block h-px w-40 bg-camel" />
            <p className="hero-in mt-7 max-w-md text-base leading-relaxed text-ivory/80 sm:text-lg" style={{ animationDelay: "1300ms" }}>
              {comingSoon.line}
            </p>
          </div>
        </div>
      </div>

      {/* Controls: one per slide, each with a progress bar; plus pause / play */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex items-end gap-3 px-5 pb-6 sm:gap-5 sm:px-10 sm:pb-8 lg:px-page">
        <ol className="grid flex-1 grid-cols-4 gap-2 sm:gap-4">
          {controls.map((c, i) => (
            <li key={c.label}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show slide ${i + 1} of ${total}: ${c.label}`}
                aria-current={active === i ? "true" : undefined}
                className={`group flex w-full flex-col gap-2 text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-camel ${
                  active === i ? "text-ivory" : "text-ivory/50 hover:text-ivory/80"
                }`}
              >
                {/* nowrap + tighter letter spacing on small phones, so "T-shirts" never breaks onto two lines */}
                <span className="flex items-center gap-2 text-[0.6rem] font-medium tracking-[0.1em] whitespace-nowrap uppercase min-[360px]:text-[0.65rem] min-[360px]:tracking-[0.16em] sm:text-xs sm:tracking-[0.2em]">
                  {c.kind ? (
                    <Garment kind={c.kind} strokeWidth={1.4} className="hidden h-5 w-5 sm:block" />
                  ) : (
                    <span aria-hidden className="hidden h-5 w-5 items-center justify-center sm:flex">
                      <span className="h-1.5 w-1.5 rounded-full bg-camel" />
                    </span>
                  )}
                  {c.label}
                </span>
                <span className="relative block h-0.5 w-full overflow-hidden bg-ivory/20">
                  {active === i && (
                    <span
                      key={active}
                      className="hero-progress absolute inset-0 origin-left bg-camel"
                      style={{
                        animationDuration: `${isComingSoon(i) ? COMING_SOON_MS : PRODUCT_MS}ms`,
                        animationPlayState: paused ? "paused" : "running",
                      }}
                      onAnimationEnd={onBarEnd}
                    />
                  )}
                </span>
              </button>
            </li>
          ))}
        </ol>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Play slideshow" : "Pause slideshow"}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ivory/30 text-ivory transition-colors hover:bg-ivory hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-camel"
        >
          {paused ? (
            <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current">
              <path d="M4 2.5v11l9-5.5z" />
            </svg>
          ) : (
            <svg aria-hidden viewBox="0 0 16 16" className="h-3.5 w-3.5 fill-current">
              <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}
