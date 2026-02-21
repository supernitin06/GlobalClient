'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const AboutMissionVisionSection = ({ missionVision, boxClass }) => {
  return (
    <section className="mt-4 grid gap-4 md:grid-cols-2">
      <ScrollReveal variant="up">
        <article className={`relative overflow-hidden ${boxClass} border-[rgba(13,110,253,0.24)] bg-white`}>
          <span className="absolute left-0 top-0 h-1.5 w-full bg-[linear-gradient(90deg,var(--color-primary),rgba(13,110,253,0.35))]" />
          <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[rgba(13,110,253,0.10)] blur-xl" />
          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[var(--color-primary)] px-2 text-[10px] font-bold text-white">
                01
              </span>
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Our Mission</p>
            </div>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900">Empowering Global Growth</h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">{missionVision.mission}</p>
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={120}>
        <article className={`relative overflow-hidden ${boxClass} border-[rgba(255,193,7,0.42)] bg-white`}>
          <span className="absolute left-0 top-0 h-1.5 w-full bg-[linear-gradient(90deg,#FFC107,rgba(255,193,7,0.35))]" />
          <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[rgba(255,193,7,0.18)] blur-xl" />
          <div className="relative">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[#FFC107] px-2 text-[10px] font-bold text-slate-900">
                02
              </span>
              <p className="text-xs font-bold uppercase tracking-wide text-[#8A6A00]">Our Vision</p>
            </div>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900">Trusted Outsourcing Partner</h2>
            <p className="mt-3 text-lg leading-8 text-slate-600">{missionVision.vision}</p>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default AboutMissionVisionSection;
