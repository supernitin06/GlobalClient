'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const ServicesModelsReportingSection = ({ engagementModels, reportingMonitoring }) => {
  return (
    <section className="mt-6 grid gap-6 md:grid-cols-2">
      <ScrollReveal variant="up">
        <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
          <div className="relative h-36 border-b border-slate-200 flex items-center justify-center bg-slate-100">
            <span className="text-slate-400 italic text-xs">Engagement Models Image</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wide text-white">Engagement Models</p>
          </div>
          <div className="p-6">
            <ul className="grid gap-2">
              {engagementModels.map((item, index) => (
                <li key={item} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={90}>
        <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
          <div className="relative h-36 border-b border-slate-200 flex items-center justify-center bg-slate-100">
            <span className="text-slate-400 italic text-xs">Reporting & Monitoring Image</span>
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wide text-white">Reporting & Monitoring</p>
          </div>
          <div className="p-6">
            <ul className="grid gap-2">
              {reportingMonitoring.map((item, index) => (
                <li key={item} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                  <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default ServicesModelsReportingSection;
