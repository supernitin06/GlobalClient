"use client";
import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-900 py-24 sm:py-32">
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900 pointer-events-none"></div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <ScrollReveal variant="up">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Driving Global{" "}
            <span className="text-[var(--color-primary)]">Excellence</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            We are Projects Global. A dedicated team of professionals committed
            to delivering top-tier outsourcing solutions that empower businesses
            to scale and succeed.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutHero;
