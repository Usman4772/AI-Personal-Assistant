"use client";

import { AboutSection } from "@/components/AboutSection";
import { ContactCTA } from "@/components/ContactCTA";
import { MetricStrip } from "@/components/MetricStrip";
import { PhilosophyGrid } from "@/components/PhilosophyGrid";
import { PriorityBand } from "@/components/PriorityBand";
import { ProjectsShowcase } from "@/components/ProjectsShowcase";
import { SiteFooter } from "@/components/SiteFooter";
import { SkillsGrid } from "@/components/SkillsGrid";
import { JourneyTimeline, ProcessTimeline } from "@/components/Timelines";

export default function PortfolioSections() {
  return (
    <div className="relative z-10">
      <MetricStrip />
      <AboutSection />
      <ProjectsShowcase />
      <SkillsGrid />
      <JourneyTimeline />
      <ProcessTimeline />
      <PriorityBand />
      <PhilosophyGrid />
      <ContactCTA />
      <SiteFooter />
    </div>
  );
}
