'use client';

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import rfpImg from "../../assets/image/GP12.jpg";

const RfpHeroSection = () => {
  return (
    <ScrollReveal variant="up">
      <section className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
        <div className="pointer-events-none absolute -left-10 -top-12 h-40 w-40 rounded-full bg-[rgba(13,110,253,0.1)] blur-2xl" />
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.08),rgba(255,193,7,0.12))] px-7 py-7 lg:border-b-0 lg:border-r">
            <p className="inline-flex rounded-full border border-[rgba(13,110,253,0.28)] bg-white/70 px-3 py-1 text-xs font-bold uppercase tracking-[0.09em] text-slate-600">
              Request a Proposal (RFP)
            </p>
            <h1 className="pg-page-hero-title mt-3 max-w-2xl text-4xl font-bold leading-tight">
              Submit your project requirements and receive a customised outsourcing proposal.
            </h1>
            <p className="pg-page-hero-copy mt-4 max-w-xl text-slate-700">Our team will respond within 24-48 business hours.</p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">SLA-Focused Planning</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">Custom Scope Mapping</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">Rapid Response</span>
            </div>
          </div>
          <div className="relative h-56 lg:h-full lg:min-h-[320px] flex items-center justify-center bg-slate-100">
            <Image
              src={rfpImg}
              alt="Request a Proposal"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 right-4 rounded-xl border border-white/40 bg-white/90 px-4 py-3 backdrop-blur-sm">
              <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Response Timeline</p>
              <p className="mt-1 text-sm font-semibold text-slate-700">24-48 Business Hours</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default RfpHeroSection;
