"use client";

import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { howIWorkSteps } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

export function ProcessTimeline() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const listRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    const list = listRef.current;
    if (!section || !line || !list) return;

    if (prefersReducedMotion()) {
      line.style.transform = "scaleY(1)";
      return;
    }

    const gsap = getGsap();
    const markers = list.querySelectorAll("[data-step-marker]");
    const cards = list.querySelectorAll("[data-step-card]");

    const show = () => {
      line.style.transform = "scaleY(1)";
      markers.forEach((marker) => {
        marker.style.opacity = "1";
        marker.style.transform = "none";
      });
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.transform = "none";
      });
    };

    const ctx = gsap.context(() => {
      gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(markers, { scale: 0, opacity: 0 });
      gsap.set(cards, { opacity: 0, y: 28 });

      gsap.to(line, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: list,
          start: "top 75%",
          end: "bottom 40%",
          scrub: 0.6,
        },
      });

      markers.forEach((marker) => {
        gsap.to(marker, {
          scale: 1,
          opacity: 1,
          duration: 0.4,
          ease: "power3.out",
          scrollTrigger: { trigger: marker, start: "top 86%", once: true },
        });
      });

      cards.forEach((card) => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 88%", once: true },
        });
      });
    }, section);

    const fallback = window.setTimeout(show, 2200);

    return () => {
      window.clearTimeout(fallback);
      ctx.revert();
      show();
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="relative overflow-hidden py-20 sm:py-24">
      <Container className="relative z-10">
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="How I Work"
            title="A Simple Process From Start to Launch"
          />
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-3xl">
          <div
            aria-hidden
            className="absolute top-3 bottom-3 left-4 w-px overflow-hidden bg-outline-variant/35 sm:left-6"
          >
            <div
              ref={lineRef}
              data-journey-line
              className="h-full w-full origin-top bg-gradient-to-b from-primary via-secondary to-secondary-container"
            />
          </div>

          <ol ref={listRef} className="relative space-y-5">
            {howIWorkSteps.map((step, index) => (
              <li key={step.number} className="relative pl-14 sm:pl-20">
                <span
                  data-step-marker
                  aria-hidden
                  className="absolute top-4 left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-ink text-[11px] font-bold text-white shadow-[0_0_0_4px_rgba(247,249,251,1)] sm:left-6"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div data-step-card className="rounded-2xl border border-outline-variant/30 bg-white/80 px-5 py-4 backdrop-blur-sm">
                  <p className="text-[11px] font-bold tracking-[0.12em] text-outline uppercase">
                    {step.number} — {step.title}
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed text-on-surface-variant sm:text-[15px]">
                    {step.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Reveal variant="fade" className="mt-12">
          <p className="text-center font-mono text-sm font-semibold tracking-wide text-primary">
            Clear Communication Throughout Every Step
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
