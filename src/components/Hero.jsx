"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/XoButton";
import { Container } from "@/components/Container";
import { DrawUnderline } from "@/components/DrawUnderline";
import { homeHero } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

export function Hero() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const badge = section.querySelector("[data-hero-badge]");
    const title = section.querySelector("[data-hero-title]");
    const support = section.querySelector("[data-hero-support]");
    const ctas = Array.from(section.querySelectorAll("[data-hero-ctas]"));
    const visual = section.querySelector("[data-hero-visual]");
    const targets = [badge, title, support, visual, ...ctas].filter(Boolean);

    const show = () => {
      targets.forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
        el.style.filter = "none";
      });
    };

    if (prefersReducedMotion()) {
      show();
      return;
    }

    const gsap = getGsap();
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
      if (visual) {
        gsap.set(visual, { opacity: 0, y: 28, scale: 0.97 });
        tl.to(visual, { opacity: 1, y: 0, scale: 1, duration: 0.9 }, 0.22);
      }
      if (ctas.length) {
        gsap.set(ctas, { opacity: 0, y: 20 });
        tl.to(ctas, { opacity: 1, y: 0, duration: 0.6 }, 0.55);
      }
    }, section);

    const fallback = window.setTimeout(show, 1800);

    return () => {
      window.clearTimeout(fallback);
      ctx.revert();
      show();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24 pb-16 lg:pt-28 lg:pb-20"
    >
      <Container className="relative z-10 w-full">
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12 xl:gap-16">
          <div className="order-1 max-w-xl">
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
              <h1 className="text-[36px] leading-[1.06] font-extrabold tracking-[-0.035em] text-on-surface sm:text-[48px] lg:text-[56px] lg:leading-[1.04] xl:text-[62px]">
                I Build, Improve &{" "}
                <span className="bg-gradient-to-r from-primary to-secondary-container bg-clip-text text-transparent">
                  Fix Web Applications.
                </span>
              </h1>
              <DrawUnderline immediate className="mt-2 w-[min(70%,240px)]" />
            </div>

            <div data-hero-support className="mt-6 space-y-3">
              <p className="max-w-[540px] text-base leading-relaxed text-on-surface-variant sm:text-lg sm:leading-8">
                {homeHero.support}
              </p>
              <p className="max-w-[520px] text-sm leading-relaxed text-outline sm:text-[15px]">
                {homeHero.extra}
              </p>
            </div>

            <div
              data-hero-ctas
              className="mt-8 hidden max-w-full rounded-full border border-outline-variant/40 bg-white p-1 shadow-[0_2px_10px_rgba(0,62,199,0.06)] sm:inline-flex sm:flex-row sm:items-center lg:inline-flex"
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

          <div data-hero-visual className="order-2 lg:justify-self-end">
            <div className="relative mx-auto w-full max-w-[520px] bg-transparent">
              <Image
                src={homeHero.image}
                alt={homeHero.imageAlt}
                width={1536}
                height={1024}
                priority
                sizes="(max-width: 1024px) 90vw, 520px"
                className="h-auto w-full bg-transparent object-contain"
              />
            </div>
          </div>

            <div data-hero-ctas className="order-3 flex flex-col gap-3 sm:hidden">
            <Button
              href={homeHero.primaryCta.href}
              className="w-full bg-primary-container shadow-[0_4px_14px_rgba(0,82,255,0.28)] hover:bg-primary"
            >
              {homeHero.primaryCta.label}
            </Button>
            <Button href={homeHero.secondaryCta.href} variant="secondary" className="w-full">
              {homeHero.secondaryCta.label}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
