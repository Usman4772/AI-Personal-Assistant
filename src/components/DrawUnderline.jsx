"use client";

import { useLayoutEffect, useRef } from "react";
import { getGsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";

export function DrawUnderline({ className = "", immediate = false }) {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useLayoutEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;

    if (prefersReducedMotion()) {
      path.style.strokeDashoffset = "0";
      return;
    }

    const gsap = getGsap();
    const length = path.getTotalLength();

    const ctx = gsap.context(() => {
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      if (immediate) {
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.05,
          delay: 0.45,
          ease: "power2.inOut",
        });
      } else {
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: svg,
            start: "top 88%",
            end: "top 55%",
            scrub: 0.55,
          },
        });
      }
    }, svg);

    return () => ctx.revert();
  }, [immediate]);

  return (
    <svg
      ref={svgRef}
      aria-hidden
      viewBox="0 0 280 14"
      fill="none"
      className={cn("mt-1 h-3.5 w-[min(100%,280px)] text-primary", className)}
    >
      <path
        ref={pathRef}
        d="M4 10C48 3.5 96 1.5 140 2.5C184 3.5 228 7 276 11"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
