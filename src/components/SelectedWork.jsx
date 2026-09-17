"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/XoButton";
import { projects } from "@/lib/content";

export function SelectedWork() {
  return (
    <section id="projects" className="relative overflow-hidden py-20 sm:py-24">
      <div aria-hidden className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-30" />
      <Container className="relative z-10">
        <Reveal variant="blur">
          <SectionHeading eyebrow="Selected Work" title="Projects I've Worked On" />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const href = project.liveLink || project.githubLink;
            return (
              <Reveal
                key={project.title}
                delayMs={index * 80}
                variant={index % 2 === 0 ? "left" : "right"}
              >
                <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-outline-variant/35 bg-white shadow-[0_12px_40px_rgba(0,62,199,0.08)]">
                  {project.previewImage ? (
                    <div className="h-44 overflow-hidden bg-surface-container-low sm:h-48">
                      <img
                        src={project.previewImage}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex items-center justify-between gap-3">
                      <span className="rounded-full bg-primary-fixed px-3 py-1 text-[11px] font-bold tracking-[0.08em] text-primary uppercase">
                        {project.tag}
                      </span>
                      <span className="text-xs font-bold text-outline">{project.number}</span>
                    </div>
                    <h3 className="mt-4 text-2xl font-extrabold tracking-tight text-on-surface">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-on-surface-variant">
                      {project.description}
                    </p>
                    {project.workedOn ? (
                      <div className="mt-4">
                        <p className="text-[11px] font-bold tracking-[0.1em] text-outline uppercase">
                          What I Worked On
                        </p>
                        <p className="mt-1.5 text-sm leading-relaxed text-on-surface">
                          {project.workedOn}
                        </p>
                      </div>
                    ) : null}
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-surface-container-low px-2.5 py-1 font-mono text-[11px] text-on-surface-variant"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {href ? (
                      <div className="mt-6">
                        <Button href={href} size="sm" target="_blank" rel="noopener noreferrer">
                          View Project
                        </Button>
                      </div>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
