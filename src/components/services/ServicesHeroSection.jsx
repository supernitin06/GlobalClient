'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";
import servicesImg from "../../assets/image/representation-user-experience-interface-design.jpg";

const ServicesHeroSection = () => {
  return (
    <ScrollReveal variant="up">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(255,193,7,0.12))] px-7 py-7 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.09em] text-slate-600">Our Services</p>
            <h1 className="mt-2 text-4xl font-bold">Complete Outsourcing Solutions Designed for Business Growth</h1>
          </div>

          <div className="relative h-52 lg:h-full flex items-center justify-center bg-slate-100">
            <img src={servicesImg.src} alt="Our Services" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ServicesHeroSection;
