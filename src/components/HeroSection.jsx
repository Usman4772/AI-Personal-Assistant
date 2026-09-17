"use client";

import { useState, useEffect } from "react";

export default function HeroSection({ children }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-5 z-0" />

      <div
        className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse z-0"
        style={{
          backgroundColor: "#000000",
          opacity: 0.03,
          transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          top: "20%",
          left: "10%",
        }}
      />
      <div
        className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse delay-1000 z-0"
        style={{
          backgroundColor: "#000000",
          opacity: 0.02,
          transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
          bottom: "20%",
          right: "10%",
        }}
      />

      <div className="relative z-20 w-full h-full">{children}</div>
    </section>
  );
}
