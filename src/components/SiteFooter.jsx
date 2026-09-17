"use client";

import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant/30 bg-white/50 pt-16 pb-8 backdrop-blur-sm">
      <Container>
        <div className="mb-12 grid gap-10 lg:grid-cols-[1.4fr_1fr_1.3fr]">
          <Reveal variant="left">
            <div>
              <div className="inline-flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold text-white">
                  U
                </span>
                <span className="font-display text-sm font-extrabold">{site.name}</span>
              </div>
              <p className="mt-4 mb-5 max-w-[300px] text-sm leading-relaxed text-on-surface-variant">
                Full-stack systems, reliable APIs, and interfaces that hold up in production.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-semibold text-primary hover:text-primary-container"
              >
                {site.email}
              </a>
            </div>
          </Reveal>

          <Reveal variant="up" delayMs={60}>
            <div>
              <h5 className="mb-5 text-[12px] font-bold tracking-[0.1em] text-outline uppercase">
                Explore
              </h5>
              <ul className="space-y-3">
                {[
                  ["#about", "About"],
                  ["#projects", "Projects"],
                  ["#skills", "Skills"],
                  ["#experience", "Experience"],
                  ["#process", "How I work"],
                  ["#contact", "Contact"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-sm text-on-surface-variant transition-colors hover:text-primary">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal variant="right" delayMs={100}>
            <div>
              <h5 className="mb-5 text-[12px] font-bold tracking-[0.1em] text-outline uppercase">
                Connect
              </h5>
              <div className="rounded-2xl border border-outline-variant/40 bg-white px-4 py-3.5 shadow-sm">
                <p className="text-[11px] font-bold tracking-[0.1em] text-outline uppercase">
                  {site.name}
                </p>
                <a href={site.phoneHref} className="mt-2 block text-sm font-medium text-on-surface hover:text-primary">
                  {site.phone}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1.5 block text-sm text-primary hover:text-primary-container"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal variant="fade">
          <div className="flex flex-col gap-2 border-t border-outline-variant/30 pt-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-outline">
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <a href="#home" className="text-sm text-outline hover:text-primary">
              Back to chat ↑
            </a>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
