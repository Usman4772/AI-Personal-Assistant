"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { philosophyPoints } from "@/lib/content";

export function PhilosophyGrid() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <div aria-hidden className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-30" />
      <Container className="relative z-10">
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="Why work with me"
            title="I take ownership of the outcome, not just the code."
            description="The difference between a software vendor and an engineering partner is accountability. I make sure the system works — in production, under load, after handover."
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {philosophyPoints.map((point, index) => (
            <Reveal
              key={point.title}
              delayMs={index * 70}
              variant={index % 2 === 0 ? "left" : "right"}
            >
              <article className="h-full rounded-[24px] border border-outline-variant/35 bg-white/80 p-6 shadow-[0_8px_32px_rgba(0,62,199,0.06)] backdrop-blur-md sm:p-7">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-xs font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-xl font-extrabold tracking-[-0.02em] text-on-surface">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant sm:text-[0.9375rem]">
                  {point.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
