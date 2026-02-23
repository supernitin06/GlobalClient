'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";
import ctaImg from "../../assets/image/GP-30.jpg";

const IndustriesClosingCtaSection = () => {
  return (
    <ScrollReveal variant="zoom" delay={120}>
      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[rgba(13,110,253,0.25)] bg-[linear-gradient(135deg,rgba(13,110,253,0.08),rgba(255,193,7,0.14))] shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
        <div className="grid gap-0 md:grid-cols-[1.25fr_0.75fr]">
          <div className="flex flex-col justify-center p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Closing CTA</p>
            <h2 className="mt-1 text-3xl font-bold">Need Industry-Specific Outsourcing Support?</h2>
            <p className="mt-3 text-slate-700">
              Projects Global can build a scalable outsourcing model aligned with your industry requirements and SLA
              expectations.
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-700">
              Our teams adapt workflows to your sector, customer behavior, and compliance needs so delivery remains
              consistent across channels. From onboarding to performance tracking, every stage is designed to improve
              quality, response speed, and long-term operational efficiency.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/requestproposal">
                <Button variant="primary" size="md">Request Proposal</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="md">Schedule Consultation</Button>
              </Link>
            </div>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">Industry-Aligned SOPs</span>
              <span className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">SLA Monitoring</span>
              <span className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">Scale-Ready Teams</span>
            </div>
          </div>

          <div className="relative min-h-[160px] border-t border-slate-200 md:border-l md:border-t-0 flex items-center justify-center bg-slate-50/50">
            <Image
              src={ctaImg}
              alt="Industry Support"
              fill
              sizes="(max-width: 768px) 100vw, 36vw"
              className="max-h-[250px] w-auto object-contain p-2"
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default IndustriesClosingCtaSection;
