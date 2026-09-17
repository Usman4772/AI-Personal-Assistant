"use client";

import { AIRescue } from "@/components/AIRescue";
import { FinalCTA } from "@/components/FinalCTA";
import { ProblemSolutions } from "@/components/ProblemSolutions";
import { ProcessTimeline } from "@/components/ProcessTimeline";
import { ProductJourney } from "@/components/ProductJourney";
import { ProjectPath } from "@/components/ProjectPath";
import { SelectedWork } from "@/components/SelectedWork";
import { Services } from "@/components/Services";
import { SiteFooter } from "@/components/SiteFooter";
import { WhyWorkWithMe } from "@/components/WhyWorkWithMe";

export default function PortfolioSections() {
  return (
    <div className="relative z-10">
      <ProblemSolutions />
      <ProductJourney />
      <Services />
      <ProjectPath />
      <AIRescue />
      <SelectedWork />
      <ProcessTimeline />
      <WhyWorkWithMe />
      <FinalCTA />
      <SiteFooter />
    </div>
  );
}
