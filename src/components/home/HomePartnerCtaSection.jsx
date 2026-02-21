'use client';

import React from "react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

import partnerImage from "../../assets/image/call-center-2944063_1920.jpg";

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
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6 grid items-stretch gap-6 lg:grid-cols-2">
      <ScrollReveal variant="up" className="h-full">
        <article className="flex h-full min-h-[460px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <div className="relative h-44 border-b border-slate-200 bg-slate-100 flex items-center justify-center">
            {partnerImage ? (
              <img
                src={partnerImage.src}
                alt="Call center partner network"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-slate-400 italic text-sm">Partner Image Placeholder</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <p className="absolute left-5 top-4 rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">
              Partner With Us Section
            </p>
          </div>

          <div className="flex flex-1 flex-col justify-between p-7">
            <div>
              <h2 className="text-3xl font-bold text-slate-900">Are You a Call Center Looking for Projects?</h2>
              <p className="mt-3 text-slate-600">
                Projects Global works with verified call centers to deliver international voice and non-voice campaigns.
              </p>
            </div>

            <Link href="/partnerwithus" className="mt-6 inline-flex">
              <Button variant="primary" size="md">Register Your Center</Button>
            </Link>
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="zoom" delay={120} className="h-full">
        <article className="relative flex h-full min-h-[460px] flex-col overflow-hidden rounded-3xl border border-[rgba(13,110,253,0.26)] bg-[linear-gradient(145deg,rgba(13,110,253,0.1),rgba(255,193,7,0.14))] p-7 shadow-[0_16px_30px_rgba(15,23,42,0.1)]">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[rgba(13,110,253,0.12)] blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 left-16 h-40 w-40 rounded-full bg-[rgba(255,193,7,0.18)] blur-3xl" />

          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.09em] text-slate-600">Final CTA Section</p>
            <h2 className="mt-1 text-3xl font-bold text-slate-900">Ready to Scale Your Support Operations?</h2>
            <p className="mt-3 max-w-[40ch] text-slate-700">
              Let us build a reliable outsourcing model aligned with your SLA and customer experience goals.
            </p>
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
              <Button variant="primary" size="md">Request Proposal</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="md">Schedule Consultation</Button>
            </Link>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default HomePartnerCtaSection;
