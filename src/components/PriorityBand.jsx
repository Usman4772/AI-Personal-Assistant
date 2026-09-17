"use client";

import { Container } from "@/components/Container";
import { DrawUnderline } from "@/components/DrawUnderline";
import { Reveal } from "@/components/Reveal";
import { priorityBand } from "@/lib/content";

export function PriorityBand() {
  return (
    <section className="py-10 sm:py-12">
      <Container>
        <Reveal variant="pop">
          <div className="relative overflow-hidden rounded-[28px] bg-ink px-6 py-16 text-center sm:px-10 sm:py-20 lg:py-24">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(0,82,255,0.28),_transparent_60%)]"
            />
            <div className="relative mx-auto max-w-3xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-secondary-container/40 bg-secondary-container/10 px-3.5 py-1 text-[12px] font-bold tracking-[0.1em] text-secondary-container uppercase">
                {priorityBand.badge}
              </span>
              <h2 className="mt-6 text-[34px] font-extrabold tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.15]">
                {priorityBand.line1Before}{" "}
                <span className="bg-gradient-to-r from-primary-container to-secondary-container bg-clip-text text-transparent">
                  {priorityBand.line1Accent}
                </span>
                <br />
                {priorityBand.line2Before}{" "}
                <span className="bg-gradient-to-r from-secondary-container to-primary-fixed bg-clip-text text-transparent">
                  {priorityBand.line2Accent}
                </span>
              </h2>
              <DrawUnderline className="mx-auto mt-3 w-[min(100%,260px)] text-secondary-container" />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
