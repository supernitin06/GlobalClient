'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const HomeStatsSection = ({ stats = [] }) => {
  return (
    <section className="pg-container mt-6">
      <ScrollReveal variant="up">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_32px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.08),rgba(255,193,7,0.12))] px-7 py-5">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-600">Operational Highlights</p>
            <h2 className="mt-2 text-3xl font-bold">Built for Scale, Speed, and SLA Performance</h2>
          </div>

          <div className="grid gap-4 p-7 sm:grid-cols-2 xl:grid-cols-4 pg-stagger-children">
            {stats.map((item) => (
              <div
                key={item.label}
                className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(15,23,42,0.34)] hover:bg-white hover:shadow-md pg-card-glow"
              >
                <p className="text-3xl font-extrabold text-[var(--color-primary)] pg-pulse-glow">{item.value}</p>
                <p className="mt-2 text-sm font-semibold text-slate-700">{item.label}</p>
                <p className="mt-1 text-xs text-slate-500">{item.subText}</p>
              </div>
            ))}
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default HomeStatsSection;
