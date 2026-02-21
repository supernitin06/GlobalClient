'use client';

import React from "react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

const AboutClosingCtaSection = ({ boxClass }) => {
  return (
    <ScrollReveal variant="zoom" delay={120}>
      <section className={`relative mt-4 overflow-hidden ${boxClass} border-[rgba(13,110,253,0.25)] bg-[linear-gradient(135deg,rgba(13,110,253,0.08),rgba(255,193,7,0.14))]`}>
        <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[rgba(13,110,253,0.10)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-12 left-20 h-36 w-36 rounded-full bg-[rgba(255,193,7,0.25)] blur-2xl" />

        <div className="relative grid gap-5 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Closing CTA</p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900 sm:text-4xl">Let us Build Your Outsourcing Success</h2>
            <p className="mt-3 max-w-2xl text-slate-700">
              Contact Projects Global today to discuss your outsourcing requirements and receive a customised proposal.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/requestproposal">
                <Button variant="primary" size="md">Request Proposal</Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="md">Schedule Consultation</Button>
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-sm backdrop-blur">
            <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Quick Connect</p>
            <p className="mt-2 text-sm font-semibold text-slate-900">Response within 24-48 business hours</p>
            <div className="mt-3 grid gap-2 text-sm text-slate-700">
              <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">Custom outsourcing proposal</p>
              <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">SLA-focused deployment plan</p>
              <p className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">Dedicated consultation support</p>
            </div>
            <Link href="/contact" className="mt-3 inline-flex">
              <Button variant="ghost" size="md">Talk to Team</Button>
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default AboutClosingCtaSection;
