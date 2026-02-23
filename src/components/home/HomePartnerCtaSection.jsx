'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

import partnerImage from "../../assets/image/GP-31.jpg";

const ctaHighlights = [
  "Dedicated onboarding within 48 hours",
  "SLA-driven delivery with transparent reporting",
  "Scalable teams for voice and non-voice campaigns",
];

const ctaStats = [
  { value: "24/7", label: "Support Window" },
  { value: "98%", label: "SLA Adherence" },
  { value: "40+", label: "Active Programs" },
];

const HomePartnerCtaSection = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 md:mt-8 lg:mt-10 grid items-stretch gap-6 lg:grid-cols-2">
      <ScrollReveal variant="up" className="h-full">
        <article className="flex h-full min-h-[460px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <div className="relative h-44 border-b border-slate-200 bg-slate-100 flex items-center justify-center">
            {partnerImage ? (
              <Image
                src={partnerImage}
                alt="Call center partner network"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-slate-100 text-slate-400 italic text-sm">Partner Image Placeholder</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            {/* Pill badge */}
            <p className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary)] backdrop-blur-sm shadow-sm">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-primary)]" />
              Partner Program
            </p>
            {/* Bottom overlay text */}
            <p className="absolute bottom-3 left-4 text-sm font-bold text-white drop-shadow">
              Join 200+ Verified Call Centers
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-between p-7">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900">
                Are You a Call Center Looking for Projects?
              </h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Projects Global works with verified call centers to deliver international voice and non-voice campaigns with strong SLA alignment.
              </p>
              {/* Benefits list */}
              <ul className="mt-4 space-y-2">
                {["Access to global brand campaigns", "Consistent volume & SLA targets", "Compliance-backed onboarding"].map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-slate-600">
                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <svg className="h-2.5 w-2.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/partnerwithus" className="mt-6 inline-flex">
              <Button variant="primary" size="md" iconRight={
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              }>
                Register Your Center
              </Button>
            </Link>
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="zoom" delay={120} className="h-full">
        <article className="relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-3xl border border-[rgba(13,110,253,0.26)] bg-[linear-gradient(145deg,rgba(13,110,253,0.1),rgba(255,193,7,0.14))] p-7 shadow-[0_16px_30px_rgba(15,23,42,0.1)]">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[rgba(13,110,253,0.12)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 left-16 h-40 w-40 rounded-full bg-[rgba(255,193,7,0.18)] blur-3xl" />

          {/* Content */}
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-white/70">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-secondary)]" />
              For Businesses
            </span>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight">
              Ready to Scale Your
              <span className="block bg-gradient-to-r from-[var(--color-secondary)] to-amber-400 bg-clip-text text-transparent">
                Support Operations?
              </span>
            </h2>
            <p className="mt-4 max-w-[38ch] text-sm text-black/65 leading-6">
              Let us build a reliable outsourcing model aligned with your SLA and customer experience goals — deployed in days, not weeks.
            </p>

            {/* Stats row */}
            <div className="mt-6 flex gap-5">
              {[{ v: "48h", l: "Go-Live Target" }, { v: "99%", l: "Uptime SLA" }, { v: "24/7", l: "Coverage" }].map((s) => (
                <div key={s.l} className="border-r border-white/10 pr-5 last:border-0">
                  <p className="text-2xl font-extrabold text-[var(--color-secondary)]">{s.v}</p>
                  <p className="mt-0.5 text-[10px] font-semibold text-white/50">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mt-5 grid gap-3 sm:grid-cols-3">
            {ctaStats.map((item) => (
              <div key={item.label} className="rounded-xl border border-[rgba(15,23,42,0.16)] bg-white/70 px-3 py-3 backdrop-blur-sm">
                <p className="text-lg font-extrabold text-[var(--color-primary)]">{item.value}</p>
                <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-4 rounded-2xl border border-[rgba(15,23,42,0.16)] bg-white/55 p-4 backdrop-blur-sm">
            <div className="grid gap-2">
              {ctaHighlights.map((item) => (
                <p key={item} className="flex items-start gap-2 text-sm text-slate-700">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>

          <div className="relative mt-auto pt-6 flex flex-wrap gap-3">
            <Link href="/requestproposal">
              <Button variant="secondary" size="md" iconRight={
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              }>
                Request Proposal
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="ghost"
                size="md"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20 hover:text-white"
              >
                Schedule Consultation
              </Button>
            </Link>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default HomePartnerCtaSection;
