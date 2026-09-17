"use client";

import { useLayoutEffect, useRef } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

const fromMap = {
  up: { opacity: 0, y: 40 },
  down: { opacity: 0, y: -28 },
  left: { opacity: 0, x: -48 },
  right: { opacity: 0, x: 48 },
  pop: { opacity: 0, scale: 0.92, y: 20 },
  fade: { opacity: 0 },
  blur: { opacity: 0, y: 24, filter: "blur(8px)" },
};

export function Reveal({
  children,
  className = "",
  delayMs = 0,
  variant = "up",
  duration = 0.75,
  stagger,
  once = true,
  start = "top 90%",
}) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const show = () => {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.filter = "none";
      Array.from(el.children).forEach((child) => {
        child.style.opacity = "1";
        child.style.transform = "none";
        child.style.filter = "none";
      });
    };

    if (prefersReducedMotion()) {
      show();
      return;
    }

    const gsap = getGsap();
    const targets = stagger ? Array.from(el.children) : [el];

    if (targets.length === 0) {
      show();
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { ...fromMap[variant] },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration,
          delay: delayMs / 1000,
          stagger: stagger ?? 0,
          ease: variant === "pop" ? "back.out(1.5)" : "power3.out",
          clearProps: "filter",
          scrollTrigger: {
            trigger: el,
            start,
            once,
            toggleActions: "play none none none",
          },
          onComplete: () => {
            el.style.opacity = "1";
          },
        },
      );
    }, el);

    const fallback = window.setTimeout(show, 2200);

    return () => {
      window.clearTimeout(fallback);
      ctx.revert();
      show();
    };
  }, [delayMs, duration, once, start, stagger, variant]);

  return (
    <div ref={ref} className={cn("opacity-100", className)}>
      {children}
    </div>
  );
}
