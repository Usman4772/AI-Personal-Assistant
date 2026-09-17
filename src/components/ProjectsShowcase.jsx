"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/XoButton";
import { projects } from "@/lib/content";

export function ProjectsShowcase() {
  return (
    <section id="projects" className="relative overflow-hidden py-16 sm:py-20">
      <div aria-hidden className="bg-grid-pattern pointer-events-none absolute inset-0 opacity-30" />
      <Container className="relative z-10">
        <Reveal variant="blur">
          <SectionHeading
            eyebrow="Selected Work"
            title="Systems and products I have shipped."
            description="A mix of community platforms, AI tooling, payments, and product UI — built to hold up past the demo."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal
              key={project.title}
              delayMs={index * 80}
              variant={index % 2 === 0 ? "left" : "right"}
            >
              <article className="flex h-full flex-col overflow-hidden rounded-[28px] border border-outline-variant/35 bg-white shadow-[0_12px_40px_rgba(0,62,199,0.08)]">
                {project.previewImage ? (
                  <div className="h-48 overflow-hidden bg-surface-container-low">
                    <img
                      src={project.previewImage}
                      alt=""
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
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-on-surface-variant">
                    {project.description}
                  </p>
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
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.liveLink ? (
                      <Button href={project.liveLink} size="sm" target="_blank" rel="noopener noreferrer">
                        Live Demo
                      </Button>
                    ) : null}
                    {project.githubLink ? (
                      <Button
                        href={project.githubLink}
                        variant="secondary"
                        size="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </Button>
                    ) : null}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
