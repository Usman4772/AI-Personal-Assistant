"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { projectPaths } from "@/lib/content";

function PathColumn({ path, tone = "light" }) {
  const isDark = tone === "dark";

  return (
    <article
      className={
        isDark
          ? "relative overflow-hidden rounded-[28px] border border-white/10 bg-ink p-6 text-white shadow-[0_16px_40px_rgba(15,23,42,0.18)] sm:p-8"
          : "relative overflow-hidden rounded-[28px] border border-outline-variant/35 bg-white p-6 shadow-[0_16px_40px_rgba(0,62,199,0.06)] sm:p-8"
      }
    >
      <div
        aria-hidden
        className={
          isDark
            ? "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-primary-container/25 blur-2xl"
            : "pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-secondary-container/25 blur-2xl"
        }
      />
      <p
        className={
          isDark
            ? "text-[11px] font-bold tracking-[0.14em] text-secondary-container uppercase"
            : "text-[11px] font-bold tracking-[0.14em] text-primary uppercase"
        }
      >
        {isDark ? "Existing product" : "New product"}
      </p>
      <h3 className="mt-3 text-2xl font-extrabold tracking-tight">{path.title}</h3>

      <ol className="relative mt-8 space-y-0">
        {path.items.map((item, index) => (
          <li key={item} className="relative flex gap-4 pb-5 last:pb-0">
            {index < path.items.length - 1 ? (
              <span
                aria-hidden
                className={
                  isDark
                    ? "absolute top-7 left-[11px] h-[calc(100%-12px)] w-px bg-white/15"
                    : "absolute top-7 left-[11px] h-[calc(100%-12px)] w-px bg-outline-variant/50"
                }
              />
            ) : null}
            <span
              className={
                isDark
                  ? "relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-secondary-container/40 bg-ink text-[10px] font-bold text-secondary-container"
                  : "relative z-10 mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary-fixed text-[10px] font-bold text-primary"
              }
            >
              {index + 1}
            </span>
            <p className={isDark ? "text-sm text-white/80" : "text-sm text-on-surface-variant"}>
              {item}
            </p>
          </li>
        ))}
      </ol>

      <p
        className={
          isDark
            ? "mt-8 border-t border-white/10 pt-5 font-mono text-sm font-semibold text-secondary-container"
            : "mt-8 border-t border-outline-variant/30 pt-5 font-mono text-sm font-semibold text-primary"
        }
      >
        {path.footer}
      </p>
    </article>
  );
}

export function ProjectPath() {
  return (
    <section id="start" className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="Where we start"
            title="Wherever You Are, We Can Start From There."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal variant="left">
            <PathColumn path={projectPaths.scratch} tone="light" />
          </Reveal>
          <Reveal variant="right" delayMs={80}>
            <PathColumn path={projectPaths.existing} tone="dark" />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
