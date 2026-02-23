'use client';

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import projectsImg from "../../assets/image/GP13.jpg";

const ProjectsHeroSection = () => {
  return (
    <ScrollReveal variant="up">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
        <div className="grid gap-0 lg:min-h-[390px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(255,193,7,0.12))] px-7 py-8 lg:border-b-0 lg:border-r lg:px-9">
            <p className="text-xs font-bold uppercase tracking-[0.09em] text-slate-600">Projects & Campaigns</p>
            <h1 className="pg-page-hero-title mt-2 max-w-2xl text-3xl font-bold leading-tight sm:text-4xl">
              Outsourcing Campaign Models Built for Performance and Scalability
            </h1>
            <p className="pg-page-hero-copy mt-4 max-w-xl text-lg text-slate-700">
              Structured campaign execution across customer support, sales, technical helpdesk, and back-office workflows.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">Verified Center Allocation</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">SLA-Based Monitoring</span>
              <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">Continuous Improvement</span>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden bg-slate-100 lg:h-[390px] flex items-center justify-center">
            <Image
              src={projectsImg}
              alt="Projects & Campaigns"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute bottom-4 right-4 rounded-xl border border-white/40 bg-white/92 px-4 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Execution Focus</p>
              <p className="mt-1 text-sm font-semibold text-slate-700">Performance + Scalability + Governance</p>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ProjectsHeroSection;
