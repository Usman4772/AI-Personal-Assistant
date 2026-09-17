"use client";

import { useEffect } from "react";
import { getGsap, ScrollTrigger } from "@/lib/gsap";

export function GsapRefresh({ tick }) {
  useEffect(() => {
    getGsap();
    const id = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
    return () => cancelAnimationFrame(id);
  }, [tick]);

  return null;
}
