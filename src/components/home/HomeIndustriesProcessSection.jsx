'use client';

import React from "react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

import processImage from "../../assets/image/vecteezy_teamwork-data-analysis-and-business-strategy-a_56410899.png";
import industryImage from "../../assets/image/top-view-messy-office-workspace-with-tablet.jpg";

const HomeIndustriesProcessSection = ({ industries, processSteps }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 grid items-stretch gap-6 lg:grid-cols-2">
      <ScrollReveal variant="left">
        <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(255,193,7,0.12))] px-7 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.09em] text-slate-600">Industries Preview Section</p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">Industries We Serve</h2>
            <p className="mt-2 text-sm text-slate-600">
              Industry-focused outsourcing models built for customer support, sales, and back-office operations.
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-between p-7">
            <div>
              <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-1.5 aspect-video flex items-center justify-center">
                {industryImage ? (
                  <img
                    src={industryImage.src}
                    alt="Industries we serve"
                    loading="lazy"
                    className="h-full w-full rounded-xl object-cover"
                  />
                ) : (
                  <div className="text-slate-400 italic text-sm">Industry Image Placeholder</div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                {industries.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-lg border border-[rgba(15,23,42,0.2)] bg-[var(--color-primary-light)]/55 px-3 py-2 text-xs font-semibold text-[var(--color-primary-dark)]"
                  >
                    <span className="inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-white text-[9px] font-bold text-[var(--color-primary-dark)]">
                      {index + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/industries" className="mt-7 inline-flex">
              <Button variant="outline" size="md">
                Explore Industries
              </Button>
            </Link>
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="right" delay={120}>
        <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <div className="relative border-b border-slate-200 aspect-video bg-slate-100 flex items-center justify-center">
            {processImage ? (
              <img
                src={processImage.src}
                alt="Outsourcing process workflow"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-slate-400 italic text-sm">Process Image Placeholder</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <div className="absolute bottom-4 left-6">
              <p className="text-xs font-bold uppercase tracking-wide text-white/90">Deployment Framework</p>
              <h2 className="text-2xl font-bold text-white">Our Outsourcing Deployment Process</h2>
            </div>
          </div>

          <div className="grid flex-1 gap-3 p-7 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div
                key={step}
                className="rounded-xl border border-slate-200 bg-slate-50 p-4 transition hover:-translate-y-0.5 hover:border-[rgba(15,23,42,0.28)] hover:bg-white"
              >
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[var(--color-primary)] px-2 text-[11px] font-bold text-white">
                    {index + 1}
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Step</span>
                </div>
                <p className="text-sm font-medium leading-6 text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default HomeIndustriesProcessSection;
