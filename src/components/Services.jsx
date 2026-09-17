"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/lib/content";

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="Capabilities"
            title="What Can I Help You With?"
          />
        </Reveal>

        <Reveal className="mt-12 grid gap-3 sm:grid-cols-2 xl:grid-cols-4" stagger={0.07} variant="up">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="rounded-2xl border border-outline-variant/35 bg-white px-5 py-5 shadow-[0_6px_20px_rgba(0,62,199,0.05)] transition-colors hover:border-primary/30"
              >
                <p className="font-mono text-[11px] font-semibold tracking-wide text-outline">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-[16px] font-extrabold tracking-tight text-on-surface">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  {service.body}
                </p>
              </article>
            ))}
        </Reveal>
      </Container>
    </section>
  );
}
