"use client";

import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { productJourney } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

export function ProductJourney() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const line = lineRef.current;
    if (!section || !line) return;

    if (prefersReducedMotion()) {
      line.style.transform = "scaleX(1)";
      return;
    }

    const gsap = getGsap();
    const steps = section.querySelectorAll("[data-journey-step]");

    const show = () => {
      line.style.transform = "scaleX(1)";
      steps.forEach((step) => {
        step.style.opacity = "1";
        step.style.transform = "none";
      });
    };

    const ctx = gsap.context(() => {
      gsap.set(line, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(steps, { opacity: 0, y: 24 });

      gsap.to(line, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          end: "top 30%",
          scrub: 0.5,
        },
      });

      gsap.to(steps, {
        opacity: 1,
        y: 0,
        duration: 0.55,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 72%",
          once: true,
        },
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
    <section
      ref={sectionRef}
      id="journey"
      className="relative overflow-hidden py-20 sm:py-24"
    >
      <div aria-hidden className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-30" />
      <Container className="relative z-10">
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="From Idea to Working Product"
            title="From Idea to Production"
            description="A clear path from your initial idea to a working product."
          />
        </Reveal>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute top-[22px] right-6 left-6 hidden h-px bg-outline-variant/35 lg:block"
          >
            <div
              ref={lineRef}
              data-product-line
              className="h-full w-full origin-left bg-gradient-to-r from-primary via-secondary to-secondary-container"
            />
          </div>

          <ol className="grid gap-6 sm:grid-cols-2 lg:grid-cols-6 lg:gap-3">
            {productJourney.map((step, index) => (
              <li key={step.number} data-journey-step className="relative">
                <div className="flex items-start gap-3 lg:flex-col lg:items-center lg:text-center">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-white text-[12px] font-bold text-primary shadow-[0_0_0_4px_#f7f9fb,0_8px_20px_rgba(0,82,255,0.16)]">
                    {step.number}
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12px] font-extrabold tracking-[0.12em] text-on-surface uppercase">
                      {step.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                      {step.body}
                    </p>
                    {index < productJourney.length - 1 ? (
                      <span
                        aria-hidden
                        className="mt-4 ml-1 block h-6 w-px bg-gradient-to-b from-primary to-secondary-container lg:hidden"
                      />
                    ) : null}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <Reveal variant="fade" className="mt-12">
          <p className="text-center font-mono text-sm font-semibold tracking-wide text-primary">
            Idea → Working Product
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
