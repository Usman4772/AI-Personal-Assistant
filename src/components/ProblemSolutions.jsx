"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { problemSolutions } from "@/lib/content";
import { cn } from "@/lib/utils";

function IdeaVisual() {
  return (
    <div className="relative h-24 overflow-hidden rounded-2xl bg-gradient-to-br from-primary-fixed/70 to-white">
      <svg viewBox="0 0 180 96" className="h-full w-full" aria-hidden>
        <circle cx="90" cy="48" r="16" fill="#0052ff" opacity="0.16" />
        <circle cx="90" cy="48" r="7" fill="#0052ff" />
        <circle cx="42" cy="28" r="4" fill="#00eefc" />
        <circle cx="148" cy="30" r="4" fill="#003ec7" />
        <circle cx="40" cy="70" r="3.5" fill="#003ec7" />
        <circle cx="150" cy="68" r="3.5" fill="#00eefc" />
        <path d="M74 42 L50 32 M74 54 L48 68 M106 42 L140 32 M106 54 L142 66" stroke="#003ec7" strokeOpacity="0.35" strokeWidth="1.4" />
      </svg>
    </div>
  );
}

function FeatureVisual() {
  return (
    <div className="relative flex h-24 items-center justify-center gap-2 overflow-hidden rounded-2xl bg-surface-container-low">
      <span className="h-10 w-10 rounded-xl border border-outline-variant/50 bg-white" />
      <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-lg font-bold text-white shadow-[0_8px_20px_rgba(0,82,255,0.28)]">
        +
      </span>
      <span className="h-10 w-10 rounded-xl border border-dashed border-primary/40 bg-primary-fixed/60" />
    </div>
  );
}

function ProblemVisual() {
  return (
    <div className="relative h-24 overflow-hidden rounded-2xl bg-ink px-4 py-3 font-mono">
      <p className="text-[10px] text-red-300">error · uncaught exception</p>
      <p className="mt-1 text-[11px] text-white/80">integration.timeout()</p>
      <p className="mt-2 text-[10px] text-white/40">at service.js:42</p>
      <div className="absolute right-3 bottom-3 h-1.5 w-16 rounded-full bg-red-400/70" />
    </div>
  );
}

function AiVisual() {
  return (
    <div className="relative h-24 overflow-hidden rounded-2xl border border-outline-variant/40 bg-white px-4 py-3">
      <div className="mb-2 flex gap-1">
        <span className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
        <span className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
        <span className="h-1.5 w-1.5 rounded-full bg-outline-variant" />
      </div>
      <p className="font-mono text-[11px] text-on-surface-variant">
        <span className="text-primary">const</span> mvp = generate()
      </p>
      <p className="mt-1 font-mono text-[11px] text-outline">mvp.fix() // again</p>
    </div>
  );
}

const visuals = {
  idea: IdeaVisual,
  feature: FeatureVisual,
  problems: ProblemVisual,
  ai: AiVisual,
};

const cardStyles = {
  idea: "md:-translate-y-2 lg:col-span-1",
  feature: "md:translate-y-4",
  problems: "md:-translate-y-1 bg-white",
  ai: "md:translate-y-6",
};

export function ProblemSolutions() {
  return (
    <section id="problems" className="relative overflow-hidden py-20 sm:py-24">
      <Container>
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="Problems I Help Solve"
            title="Stuck With Your Project? Let's Move It Forward."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {problemSolutions.map((card, index) => {
            const Visual = visuals[card.id];
            return (
              <Reveal key={card.id} delayMs={index * 80} variant="up">
                <article
                  className={cn(
                    "flex h-full flex-col overflow-hidden rounded-[28px] border border-outline-variant/35 bg-white p-5 shadow-[0_10px_32px_rgba(0,62,199,0.06)] sm:p-6",
                    cardStyles[card.id],
                  )}
                >
                  <Visual />
                  <h3 className="mt-5 text-xl font-extrabold tracking-tight text-on-surface">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                    {card.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
