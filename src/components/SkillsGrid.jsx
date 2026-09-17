"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { skills } from "@/lib/content";

export function SkillsGrid() {
  return (
    <section id="skills" className="relative overflow-hidden py-16 sm:py-20">
      <Container className="relative z-10">
        <Reveal variant="up">
          <SectionHeading
            eyebrow="Capabilities"
            title="A stack battle-tested in production."
            description="Frontend, backend, and delivery — the tools I use to ship systems that last."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {skills.map((group, index) => (
            <Reveal
              key={group.group}
              delayMs={index * 90}
              variant={index === 0 ? "left" : index === 2 ? "right" : "up"}
            >
              <article className="h-full rounded-[24px] border border-outline-variant/35 bg-white p-6 shadow-[0_8px_32px_rgba(0,62,199,0.06)]">
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-primary-fixed text-sm font-bold text-primary">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-lg font-extrabold text-on-surface">{group.group}</h3>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item.name} className="flex items-center justify-between text-sm">
                      <span className="font-medium text-on-surface">{item.name}</span>
                      <span className="font-mono text-[11px] text-outline">{item.level}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
