"use client";

import { Container } from "@/components/Container";
import { DrawUnderline } from "@/components/DrawUnderline";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/XoButton";

export function AboutSection() {
  return (
    <section
      id="about"
      className="border-y border-outline-variant/30 bg-white/40 py-16 sm:py-20 backdrop-blur-sm"
    >
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal variant="left">
            <div className="relative mx-auto w-full max-w-sm">
              <div className="absolute -inset-4 rounded-full bg-primary-fixed/40 blur-2xl" aria-hidden />
              <img
                src="/profilePic.jpg"
                alt="Usman Ali"
                className="relative mx-auto h-64 w-64 rounded-full object-cover shadow-[0_20px_50px_rgba(0,62,199,0.18)] sm:h-72 sm:w-72"
              />
            </div>
          </Reveal>
          <div>
            <Reveal variant="down">
              <span className="inline-flex items-center gap-2.5 text-[13px] font-bold tracking-[0.1em] text-primary uppercase">
                <span className="h-2 w-2 rounded-full bg-primary shadow-[0_0_0_4px_rgba(0,62,199,0.14)]" />
                About
              </span>
            </Reveal>
            <Reveal variant="up" delayMs={60}>
              <h2 className="mt-5 text-[34px] font-extrabold tracking-[-0.035em] text-on-surface sm:text-[42px]">
                An engineering partner accountable for outcomes.
              </h2>
            </Reveal>
            <DrawUnderline className="mt-2 w-[min(100%,260px)]" />
            <Reveal variant="up" delayMs={100}>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
                I&apos;m Usman Ali, a full-stack developer from Jhelum, Pakistan. I ship Next.js
                products, Node APIs, and production UIs — with 1.5+ years in the field and a CS
                degree from the University of the Punjab (CGPA 3.66).
              </p>
            </Reveal>
            <Reveal className="mt-8" variant="pop" delayMs={140}>
              <Button href="#contact" variant="secondary">
                Get in touch
                <span aria-hidden>→</span>
              </Button>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
