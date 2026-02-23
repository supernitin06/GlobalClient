'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const HomeWhyChooseSection = ({ whyChooseUs }) => {
  return (
    <section className="pg-container mt-6">
      <ScrollReveal variant="up">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.08),rgba(255,193,7,0.12))] px-7 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.09em] text-slate-600">Why Choose Us</p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">Why Choose Projects Global</h2>
            <p className="mt-2 max-w-3xl text-sm text-slate-600">
              Performance-led outsourcing with reliable teams, compliance discipline, and transparent reporting.
            </p>
          </div>

          <div className="grid gap-4 p-7 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div
                key={item}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50/70 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(13,110,253,0.32)] hover:bg-white hover:shadow-md"
              >
                <span className="pointer-events-none absolute -right-6 -top-6 h-14 w-14 rounded-full bg-[rgba(13,110,253,0.08)] transition-transform duration-300 group-hover:scale-110" />
                <div className="relative mb-3 flex items-center gap-2.5">
                  <span className="inline-flex h-8 min-w-[2.1rem] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-dark))] px-2 text-[11px] font-extrabold text-white shadow-[0_8px_16px_rgba(15,23,42,0.24)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(13,110,253,0.35),transparent)]" />
                </div>
                <p className="relative text-sm font-semibold leading-6 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default HomeWhyChooseSection;
