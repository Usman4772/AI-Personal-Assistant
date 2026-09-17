"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Button } from "@/components/XoButton";
import { navLinks, site } from "@/lib/content";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function SiteHeader({ isChatting, onReset }) {
  const [open, setOpen] = useState(false);
  const desktopNavRef = useRef(null);
  const mobileBarRef = useRef(null);

  useEffect(() => {
    if (isChatting) setOpen(false);
  }, [isChatting]);

  useLayoutEffect(() => {
    if (prefersReducedMotion()) return;
    const gsap = getGsap();
    const targets = [desktopNavRef.current, mobileBarRef.current].filter(Boolean);
    if (targets.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y: -28 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.05 },
      );
    });

    return () => ctx.revert();
  }, []);

  if (isChatting) {
    return (
      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center border-b border-outline-variant/40 bg-white/75 p-3 backdrop-blur-xl">
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-2 rounded-full border border-outline-variant/40 bg-white px-3 py-1.5 shadow-sm"
          aria-label="Back to homepage"
        >
          <img src="/avatar.png" alt="" className="h-8 w-8 rounded-full object-cover" />
          <span className="text-xs font-bold tracking-wide text-on-surface">Back home</span>
        </button>
      </div>
    );
  }

  return (
    <>
      <nav
        ref={desktopNavRef}
        className="fixed top-6 left-1/2 z-50 hidden w-[calc(100%-40px)] max-w-[1280px] -translate-x-1/2 items-center justify-between rounded-xl border border-white/20 bg-surface/60 px-8 py-3 shadow-[0_8px_32px_0_rgba(0,82,255,0.08),0_0_20px_rgba(0,82,255,0.15)] backdrop-blur-xl lg:flex"
      >
        <a href="#home" className="inline-flex items-center gap-2.5" aria-label="Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-sm font-bold text-white">
            U
          </span>
          <span className="font-display text-sm font-extrabold tracking-tight text-on-surface">
            {site.name}
          </span>
        </a>
        <div className="flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-bold tracking-wide text-on-surface transition-colors duration-200 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>
        <Button
          href="#contact"
          size="sm"
          className="shadow-[0_0_15px_rgba(0,82,255,0.4)] hover:scale-105 hover:shadow-[0_0_25px_rgba(0,82,255,0.6)]"
        >
          Start a Project
        </Button>
      </nav>

      <header
        ref={mobileBarRef}
        className="sticky top-0 z-40 flex items-center justify-between border-b border-surface-dim bg-surface/80 px-5 py-4 backdrop-blur-md lg:hidden"
      >
        <a href="#home" className="inline-flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ink text-xs font-bold text-white">
            U
          </span>
          <span className="text-sm font-extrabold text-on-surface">Usman</span>
        </a>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant/50 text-on-surface"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-4 bg-current transition-transform",
                open ? "top-1.5 rotate-45" : "top-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 block h-0.5 w-4 bg-current transition-opacity",
                open ? "opacity-0" : "opacity-100",
              )}
            />
            <span
              className={cn(
                "absolute left-0 block h-0.5 w-4 bg-current transition-transform",
                open ? "top-1.5 -rotate-45" : "top-3",
              )}
            />
          </span>
        </button>
      </header>

      <div
        className={cn(
          "fixed inset-x-0 top-[65px] z-40 border-b border-outline-variant/40 bg-surface/95 backdrop-blur-xl lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-base font-semibold text-on-surface hover:bg-surface-container"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3">
            <Button href="#contact" className="w-full" onClick={() => setOpen(false)}>
              Start a Project
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
