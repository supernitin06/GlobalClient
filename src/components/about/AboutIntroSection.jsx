'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";
import aboutImg from "../../assets/image/happy-young-asia-businessmen-businesswoman-meeting-brainstorming-some-new-ideas-about-project.jpg";

const AboutIntroSection = ({ intro, boxClass }) => {
  return (
    <section className="grid gap-4 lg:grid-cols-[1.05fr_0.95fr]">
      <ScrollReveal variant="left">
        <article className={`${boxClass} overflow-hidden`}>
          <div className="mb-4 inline-flex rounded-full border border-[rgba(15,23,42,0.26)] bg-[var(--color-primary-light)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">
            {intro.label}
          </div>
          <h1 className="text-[2.85rem] font-extrabold leading-[1.08] text-slate-900">{intro.title}</h1>
          {intro.paragraphs.map((line, index) => (
            <p key={line} className={`${index === 0 ? "mt-5" : "mt-3"} text-slate-600`}>
              {line}
            </p>
          ))}
          <div className="mt-5 grid gap-2 sm:grid-cols-3">
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700">
              SLA-Driven
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700">
              Verified Centers
            </div>
            <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-center text-xs font-semibold text-slate-700">
              Trained Teams
            </div>
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="zoom" delay={120}>
        <article className="relative h-full min-h-[420px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <img src={aboutImg.src} alt="About Projects Global" className="h-full w-full rounded-xl object-cover" />
          <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

          <div className="absolute left-4 right-4 top-4 grid grid-cols-3 gap-2">
            <div className="rounded-lg border border-white/35 bg-white/85 px-2 py-1 text-center text-[11px] font-semibold text-slate-800 backdrop-blur-sm">
              24x7 Coverage
            </div>
            <div className="rounded-lg border border-white/35 bg-white/85 px-2 py-1 text-center text-[11px] font-semibold text-slate-800 backdrop-blur-sm">
              QA Monitoring
            </div>
            <div className="rounded-lg border border-white/35 bg-white/85 px-2 py-1 text-center text-[11px] font-semibold text-slate-800 backdrop-blur-sm">
              SLA Delivery
            </div>
          </div>

          <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/40 bg-white/92 p-4 backdrop-blur-sm">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Performance-Driven Operations</p>
            <p className="mt-1 text-base text-slate-700">
              Reliable outsourcing model supported by trained teams, QA monitoring, and SLA discipline.
            </p>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default AboutIntroSection;
