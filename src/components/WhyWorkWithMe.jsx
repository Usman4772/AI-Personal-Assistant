"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { whyWorkWithMe } from "@/lib/content";

export function WhyWorkWithMe() {
  return (
    <section id="why" className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <Reveal variant="blur">
          <SectionHeading eyebrow="Why work with me" title="More Than Just Writing Code" />
        </Reveal>

        <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-outline-variant/35 bg-outline-variant/35 md:grid-cols-2">
          {whyWorkWithMe.map((block, index) => (
            <Reveal key={block.title} className="h-full bg-white" delayMs={index * 70} variant="up">
              <article className="h-full p-7 sm:p-8">
                <p className="font-mono text-[11px] font-semibold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-on-surface">
                  {block.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-on-surface-variant sm:text-[15px]">
                  {block.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
