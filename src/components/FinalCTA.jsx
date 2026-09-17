"use client";

import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/Container";
import { DrawUnderline } from "@/components/DrawUnderline";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/XoButton";
import InterviewModal from "@/components/InterviewModal";
import { homeCta, site } from "@/lib/content";

export function FinalCTA() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <section id="contact" className="py-20 sm:py-24 md:py-28">
      <Container>
        <Reveal variant="pop">
          <div className="relative flex flex-col items-center overflow-hidden rounded-[28px] border border-outline-variant/35 bg-white/80 px-6 py-16 text-center shadow-[0_12px_48px_rgba(0,62,199,0.08)] backdrop-blur-md md:px-12 md:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[480px] -translate-x-1/2 rounded-full bg-primary-fixed/50 blur-[80px]"
            />
            <p className="relative mb-5 text-sm font-bold tracking-[0.1em] text-primary uppercase">
              {homeCta.badge}
            </p>
            <h2 className="relative mx-auto max-w-[720px] text-[32px] leading-[1.12] font-extrabold tracking-[-0.035em] text-on-surface sm:text-[40px] md:text-[46px]">
              {homeCta.headline}
            </h2>
            <DrawUnderline className="relative mt-2 w-[min(100%,260px)]" />
            <p className="relative mx-auto mt-5 mb-8 max-w-[560px] text-base leading-relaxed text-on-surface-variant md:text-lg">
              {homeCta.support}
            </p>
            <div className="relative inline-flex max-w-full flex-wrap items-center justify-center gap-0.5 rounded-full border border-outline-variant/40 bg-white p-1 shadow-[0_2px_10px_rgba(0,62,199,0.06)]">
              <Button
                href={homeCta.primaryCta.href}
                className="bg-primary-container shadow-[0_4px_14px_rgba(0,82,255,0.28)] hover:bg-primary"
              >
                {homeCta.primaryCta.label}
              </Button>
              <Button
                href={homeCta.secondaryCta.href}
                variant="ghost"
                className="text-on-surface-variant hover:bg-transparent hover:text-on-surface"
              >
                {homeCta.secondaryCta.label}
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setOpenModal(true)}
              className="relative mt-4 inline-flex items-center gap-2 text-sm font-semibold text-on-surface-variant transition-colors hover:text-primary"
            >
              <Calendar className="h-4 w-4" />
              Schedule a consultation
            </button>
            <p className="relative mt-5 text-sm text-outline">{homeCta.note}</p>

            <div className="relative mt-10 grid w-full max-w-2xl gap-3 sm:grid-cols-2">
              {[
                { icon: Mail, label: site.email, href: `mailto:${site.email}` },
                { icon: Phone, label: site.phone, href: site.phoneHref },
                { icon: MapPin, label: site.location, href: null },
                { icon: Mail, label: "LinkedIn", href: site.linkedin },
              ].map((item) => {
                const Icon = item.icon;
                const inner = (
                  <span className="flex items-center gap-3 rounded-2xl border border-outline-variant/40 bg-white px-4 py-3 text-left text-sm font-medium text-on-surface">
                    <Icon className="h-4 w-4 text-primary" />
                    {item.label}
                  </span>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                  >
                    {inner}
                  </a>
                ) : (
                  <div key={item.label}>{inner}</div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </Container>
      <InterviewModal openModal={openModal} setOpenModal={setOpenModal} />
    </section>
  );
}
