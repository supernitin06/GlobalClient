'use client';

import React from "react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";
import ctaImg from "../../assets/image/customer-service-concept-illustration.webp";

const ProjectsClosingCtaSection = () => {
  return (
    <ScrollReveal variant="zoom" delay={150}>
      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[rgba(13,110,253,0.25)] bg-[linear-gradient(135deg,rgba(13,110,253,0.08),rgba(255,193,7,0.14))] shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
        <div className="grid gap-0 md:grid-cols-[1.22fr_0.78fr]">
          <div className="flex flex-col justify-center p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Closing CTA</p>
            <h2 className="mt-1 text-3xl font-bold">Launch Your Outsourcing Campaign with Projects Global</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-700">
              Build a reliable campaign foundation with verified center allocation, trained teams, and structured
              onboarding designed for fast go-live.
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-700">
              We manage execution through daily reporting, QA monitoring, and SLA-based governance so your campaign
              can scale with stability, consistency, and measurable performance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/requestproposal">
                <Button variant="primary" size="md">Request Proposal</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="md">Schedule Consultation</Button>
              </Link>
              <Button
                as="a"
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                variant="secondary"
                size="md"
              >
                WhatsApp Now
              </Button>
            </div>

            <div className="mt-5 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">Verified Center Allocation</span>
              <span className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">SLA & KPI Tracking</span>
              <span className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">Daily QA Monitoring</span>
              <span className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-semibold text-slate-700">Rapid Go-Live Support</span>
            </div>

            <div className="mt-4 grid max-w-xl grid-cols-2 gap-2.5 text-xs font-semibold text-slate-700 sm:grid-cols-4">
              <div className="rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-center">Structured Onboarding</div>
              <div className="rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-center">Operational Governance</div>
              <div className="rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-center">Performance Visibility</div>
              <div className="rounded-lg border border-slate-200 bg-white/80 px-3 py-2 text-center">Scalable Team Model</div>
            </div>
          </div>

          <div className="relative min-h-[180px] border-t border-slate-200 md:border-l md:border-t-0 flex items-center justify-center bg-slate-50/50">
            <img src={ctaImg.src} alt="Project Campaign" className="h-full w-full object-contain p-2" />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ProjectsClosingCtaSection;
