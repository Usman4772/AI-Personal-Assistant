"use client";

import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/XoButton";
import { Container } from "@/components/Container";
import { DrawUnderline } from "@/components/DrawUnderline";
import { HeroMacbook } from "@/components/HeroMacbook";
import { homeHero } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

export function HeroClone() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    if (prefersReducedMotion()) return;

    const gsap = getGsap();
    const badge = section.querySelector("[data-hero-badge]");
    const title = section.querySelector("[data-hero-title]");
    const support = section.querySelector("[data-hero-support]");
    const ctas = section.querySelector("[data-hero-ctas]");
    const visual = section.querySelector("[data-hero-visual]");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (badge) {
        gsap.set(badge, { opacity: 0, y: 20 });
        tl.to(badge, { opacity: 1, y: 0, duration: 0.55 }, 0.05);
      }
      if (title) {
        gsap.set(title, { opacity: 0, y: 36 });
        tl.to(title, { opacity: 1, y: 0, duration: 0.8 }, 0.15);
      }
      if (support) {
        gsap.set(support, { opacity: 0, y: 24 });
        tl.to(support, { opacity: 1, y: 0, duration: 0.65 }, 0.35);
      }
      if (ctas) {
        gsap.set(ctas, { opacity: 0, y: 20, scale: 0.97 });
        tl.to(ctas, { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.35)" }, 0.5);
      }
      if (visual) {
        gsap.set(visual, { opacity: 0, x: 64 });
        tl.to(visual, { opacity: 1, x: 0, duration: 0.95 }, 0.2);
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-36 lg:pt-28 lg:pb-40"
    >
      <Container className="relative z-10 w-full">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12 xl:gap-16">
          <div className="max-w-xl">
            <div
              data-hero-badge
              className="glass-card mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-secondary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-secondary" />
              </span>
              <span className="text-[12px] font-bold tracking-[0.08em] text-on-surface uppercase">
                {homeHero.badge}
              </span>
            </div>

            <div data-hero-title>
              <h1 className="text-[40px] leading-[1.06] font-extrabold tracking-[-0.035em] text-on-surface sm:text-[52px] lg:text-[60px] lg:leading-[1.04] xl:text-[68px]">
                {homeHero.headlineLead}{" "}
                <span className="bg-gradient-to-r from-primary to-secondary-container bg-clip-text text-transparent">
                  {homeHero.headlineAccent}
                </span>
              </h1>
              <DrawUnderline immediate className="mt-2 w-[min(70%,240px)]" />
            </div>

            <p
              data-hero-support
              className="mt-6 max-w-[520px] text-base leading-relaxed text-on-surface-variant sm:text-lg sm:leading-8"
            >
              {homeHero.support}
            </p>

            <div
              data-hero-ctas
              className="mt-8 inline-flex max-w-full flex-col gap-0 rounded-full border border-outline-variant/40 bg-white p-1 shadow-[0_2px_10px_rgba(0,62,199,0.06)] sm:flex-row sm:items-center"
            >
              <Button
                href={homeHero.primaryCta.href}
                className="bg-primary-container shadow-[0_4px_14px_rgba(0,82,255,0.28)] hover:bg-primary"
              >
                {homeHero.primaryCta.label}
              </Button>
              <Button
                href={homeHero.secondaryCta.href}
                variant="ghost"
                className="text-on-surface-variant hover:bg-transparent hover:text-on-surface"
              >
                {homeHero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div data-hero-visual className="lg:justify-self-end">
            <HeroMacbook />
          </div>
        </div>
      </Container>
    </section>
  );
}
