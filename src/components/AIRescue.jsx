"use client";

import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { aiRescue } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

function Flow({ flow, variant }) {
  const isAfter = variant === "after";

  return (
    <article
      className={
        isAfter
          ? "rounded-[28px] border border-primary/20 bg-white p-6 shadow-[0_16px_40px_rgba(0,62,199,0.08)] sm:p-8"
          : "rounded-[28px] border border-outline-variant/35 bg-surface-container-low p-6 sm:p-8"
      }
    >
      <p
        className={
          isAfter
            ? "text-[11px] font-bold tracking-[0.14em] text-primary uppercase"
            : "text-[11px] font-bold tracking-[0.14em] text-outline uppercase"
        }
      >
        {flow.label}
      </p>
      <ol className="mt-6">
        {flow.steps.map((step, index) => (
          <li key={step} data-ai-step={variant} className="flex flex-col items-start">
            <div
              className={
                isAfter
                  ? "rounded-full border border-primary/20 bg-primary-fixed px-4 py-2 text-sm font-semibold text-on-surface"
                  : "rounded-full border border-outline-variant/40 bg-white px-4 py-2 text-sm font-medium text-on-surface-variant"
              }
            >
              {step}
            </div>
            {index < flow.steps.length - 1 ? (
              <span
                aria-hidden
                className={
                  isAfter
                    ? "my-1 ml-5 h-6 w-px bg-gradient-to-b from-primary to-secondary-container"
                    : "my-1 ml-5 h-6 w-px bg-outline-variant/50"
                }
              />
            ) : null}
          </li>
        ))}
      </ol>
    </article>
  );
}

export function AIRescue() {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const gsap = getGsap();
    const before = section.querySelectorAll('[data-ai-step="before"]');
    const after = section.querySelectorAll('[data-ai-step="after"]');

    const show = () => {
      [...before, ...after].forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    };

    const ctx = gsap.context(() => {
      gsap.set(before, { opacity: 0, x: -18 });
      gsap.set(after, { opacity: 0, x: 18 });

      gsap.to(before, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 70%", once: true },
      });

      gsap.to(after, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.08,
        delay: 0.25,
        ease: "power3.out",
        scrollTrigger: { trigger: section, start: "top 70%", once: true },
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
    <section ref={sectionRef} id="ai" className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="AI-built projects"
            title="Built With AI but Stuck Now?"
            description="AI can help you build quickly — but as your project grows, debugging, maintaining and extending AI-generated code can become challenging."
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-5 lg:grid-cols-[1fr_auto_1fr]">
          <Flow flow={aiRescue.before} variant="before" />
          <div className="hidden items-center self-center lg:flex" aria-hidden>
            <span className="rounded-full border border-outline-variant/40 bg-white px-3 py-2 font-mono text-xs font-semibold text-primary">
              →
            </span>
          </div>
          <Flow flow={aiRescue.after} variant="after" />
        </div>

        <Reveal variant="fade" className="mt-10">
          <p className="text-center font-mono text-sm font-semibold tracking-wide text-primary">
            {aiRescue.footer}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
