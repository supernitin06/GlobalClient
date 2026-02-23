'use client';

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import industriesImg from "../../assets/image/GP15.jpg";

const IndustriesHeroSection = () => {
  return (
    <ScrollReveal variant="up">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
        <div className="grid gap-0 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative h-52 lg:h-[340px] flex items-center justify-center bg-slate-100">
            <Image
              src={industriesImg}
              alt="Industries We Serve"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(255,193,7,0.12))] px-7 py-7 lg:border-b-0 lg:border-l">
            <p className="text-xs font-bold uppercase tracking-[0.09em] text-slate-600">Industries We Serve</p>
            <h1 className="pg-page-hero-title mt-2 text-4xl font-bold">Outsourcing Solutions Tailored for Industry-Specific Support Requirements</h1>
            <p className="pg-page-hero-copy mt-4 max-w-xl text-base leading-7 text-slate-700">
              We design industry-aligned outsourcing workflows with trained teams, compliance-focused execution, and measurable service outcomes.
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default IndustriesHeroSection;
