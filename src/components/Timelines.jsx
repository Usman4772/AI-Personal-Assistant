"use client";

import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { journeySteps, processHub, processSteps } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

function Timeline({ id, eyebrow, title, description, steps }) {
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

    const ctx = gsap.context(() => {
      gsap.set(line, { scaleY: 0, transformOrigin: "top center" });
      gsap.set(markers, { scale: 0, opacity: 0 });
      gsap.set(cards, { opacity: 0, y: 40 });

      gsap.to(line, {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: list,
          start: "top 70%",
          end: "bottom 35%",
          scrub: 0.6,
        },
      });

      markers.forEach((marker) => {
        gsap.to(marker, {
          scale: 1,
          opacity: 1,
          duration: 0.45,
          ease: "back.out(2)",
          scrollTrigger: {
            trigger: marker,
            start: "top 82%",
            once: true,
          },
        });
      });

      cards.forEach((card, index) => {
        const fromLeft = index % 2 === 0;
        gsap.fromTo(
          card,
          {
            opacity: 0,
            x: fromLeft ? -56 : 56,
            y: 28,
            rotate: fromLeft ? -1.5 : 1.5,
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              once: true,
            },
          },
        );
      });
    }, section);

    return () => ctx.revert();
  }, [steps]);

  return (
    <section
      ref={sectionRef}
      id={id}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      <div aria-hidden className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-40" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(0,238,252,0.12),transparent_60%)]"
      />

      <Container className="relative z-10">
        <Reveal variant="blur">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} align="center" />
        </Reveal>

        <div className="relative mx-auto mt-14 max-w-4xl">
          <div
            aria-hidden
            className="absolute top-3 bottom-3 left-4 w-px overflow-hidden bg-outline-variant/35 md:left-1/2 md:-translate-x-px"
          >
            <div
              ref={lineRef}
              data-journey-line
              className="h-full w-full origin-top bg-gradient-to-b from-primary via-secondary to-secondary-container"
            />
          </div>

          <ol ref={listRef} className="relative space-y-8 md:space-y-12">
            {steps.map((step, index) => {
              const left = index % 2 === 0;
              return (
                <li
                  key={step.number}
                  id={step.title === "BS Computer Science" ? "education" : undefined}
                  className="relative md:grid md:grid-cols-2 md:gap-10"
                >
                  <span
                    data-step-marker
                    aria-hidden
                    className="absolute top-6 left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-ink text-xs font-bold text-white shadow-[0_0_0_4px_rgba(247,249,251,1),0_0_20px_rgba(0,82,255,0.35)] md:left-1/2"
                  >
                    {index + 1}
                  </span>

                  <div
                    className={cn(
                      "ml-10 md:ml-0",
                      left ? "md:col-start-1 md:pr-8 md:text-left" : "md:col-start-2 md:pl-8",
                      !left && "md:row-start-1",
                    )}
                  >
                    <article
                      data-step-card
                      className="rounded-[24px] border border-outline-variant/35 bg-white p-5 shadow-[0_8px_28px_rgba(15,23,42,0.06)] sm:rounded-[28px] sm:p-6"
                    >
                      <p className="text-[11px] font-bold tracking-[0.08em] text-outline uppercase">
                        {step.meta || `Step ${index + 1}`}
                      </p>
                      <h3 className="mt-2 text-xl font-extrabold tracking-tight text-on-surface">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-on-surface-variant sm:text-[15px]">
                        {step.body}
                      </p>
                    </article>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}

export function JourneyTimeline() {
  return (
    <Timeline
      id="experience"
      eyebrow="Professional Journey"
      title="Leaf by leaf — a path you can follow."
      description="Education and roles appear one node at a time as you scroll the timeline."
      steps={journeySteps}
    />
  );
}

export function ProcessTimeline() {
  return (
    <Timeline
      id="process"
      eyebrow={processHub.eyebrow}
      title={processHub.headline}
      description={processHub.support}
      steps={processSteps}
    />
  );
}
