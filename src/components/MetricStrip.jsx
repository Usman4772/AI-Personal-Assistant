"use client";

import { useLayoutEffect, useRef } from "react";
import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { metrics } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";

function parseMetricValue(value) {
  const match = value.match(/^([\d.]+)(.*)$/);
  if (!match) return { num: 0, suffix: value };
  return { num: Number(match[1]), suffix: match[2] ?? "" };
}

export function MetricStrip() {
  const gridRef = useRef(null);

  useLayoutEffect(() => {
    const grid = gridRef.current;
    if (!grid || prefersReducedMotion()) return;

    const gsap = getGsap();
    const values = grid.querySelectorAll("[data-metric-value]");

    const ctx = gsap.context(() => {
      values.forEach((el) => {
        const raw = el.dataset.value ?? "0";
        const { num, suffix } = parseMetricValue(raw);
        const counter = { val: 0 };

        gsap.to(counter, {
          val: num,
          duration: 1.35,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
          onUpdate: () => {
            const rounded = Number.isInteger(num)
              ? Math.round(counter.val)
              : Math.round(counter.val * 10) / 10;
            el.textContent = `${rounded}${suffix}`;
          },
        });
      });
    }, grid);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden py-20 sm:py-24" aria-label="Key metrics">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_15%_40%,rgba(0,238,252,0.16),transparent_65%)]"
      />
      <Container className="relative z-10">
        <Reveal variant="up">
          <SectionHeading eyebrow="Results" title="Systems that hold up in production." />
        </Reveal>

        <div className="glass-panel relative mt-12 overflow-hidden rounded-[28px] p-4 sm:p-5">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-y-0 right-0 w-[40%] bg-gradient-to-l from-[#b8d4ff]/45 via-[#d6e8ff]/20 to-transparent"
          />
          <dl ref={gridRef} className="relative z-10 grid grid-cols-2 gap-3 md:grid-cols-4">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="flex flex-col rounded-[20px] border border-[#e8ebf0] bg-white px-4 py-7 text-center shadow-[0_4px_16px_rgba(15,23,42,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,62,199,0.1)] sm:px-5 md:py-9"
              >
                <dd
                  data-metric-value
                  data-value={metric.value}
                  className="text-[32px] leading-none font-extrabold tracking-[-0.04em] text-primary tabular-nums md:text-[40px]"
                >
                  {metric.value}
                </dd>
                <dt className="mt-3 text-[12px] font-bold tracking-[0.08em] text-on-surface uppercase">
                  {metric.label}
                </dt>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                  {metric.description}
                </p>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
