'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const REASONS_ICONS = [
  <svg key="0" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="1" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" /></svg>,
  <svg key="2" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" /></svg>,
  <svg key="3" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="4" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  <svg key="5" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.7} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" /></svg>,
];

const HomeWhyChooseSection = ({ whyChooseUs }) => {
  return (
    <section className="pg-container mt-6">
      <ScrollReveal variant="up">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_42px_rgba(15,23,42,0.08)]">
          {/* Header */}
          <div className="relative overflow-hidden border-b border-slate-200 px-7 py-6">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.04)_0%,rgba(255,193,7,0.09)_100%)]" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[rgba(255,193,7,0.14)] blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(30,61,133,0.18)] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--color-primary)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                Why Choose Us
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">Why Choose Projects Global</h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-500">
                Performance-led outsourcing with reliable teams, compliance discipline, and transparent reporting.
              </p>
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-4 p-6 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div
                key={item}
                style={{ animationDelay: `${index * 55}ms` }}
                className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-5 transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(30,61,133,0.28)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.1)]"
              >
                {/* Left accent bar */}
                <span className="absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,var(--color-primary),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="mb-3 flex items-center gap-3">
                  {/* Icon circle */}
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[rgba(30,61,133,0.08)] text-[var(--color-primary)] transition-all duration-300 group-hover:bg-[var(--color-primary)] group-hover:text-white group-hover:shadow-md">
                    {REASONS_ICONS[index % REASONS_ICONS.length]}
                  </span>
                  <span className="text-xs font-bold text-slate-300">0{index + 1}</span>
                </div>
                <p className="relative text-sm font-semibold leading-6 text-slate-700 group-hover:text-slate-900">
                  {item}
                </p>
                {/* Corner watermark */}
                <span className="pointer-events-none absolute -bottom-3 -right-3 h-12 w-12 rounded-full bg-[rgba(30,61,133,0.06)] transition-transform duration-300 group-hover:scale-150" />
              </div>
            ))}
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default HomeWhyChooseSection;
