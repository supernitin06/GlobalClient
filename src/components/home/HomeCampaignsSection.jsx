'use client';

import React from "react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

import campaignImage from "../../assets/image/call-center-3614379_1920.jpg";

const HomeCampaignsSection = ({ campaigns }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-6">
      <ScrollReveal variant="up">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-7 lg:pr-6">
              <p className="text-xs font-bold uppercase tracking-[0.09em] text-slate-600">Projects/Campaigns Preview Section</p>
              <h2 className="mt-1 text-3xl font-bold text-slate-900">Campaign Models We Support</h2>
              <p className="mt-2 text-sm text-slate-600">
                Structured campaign delivery for support, sales, technical helpdesk, and back-office operations.
              </p>

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {campaigns.map((item, index) => (
                  <div
                    key={item}
                    className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all hover:-translate-y-0.5 hover:border-[rgba(15,23,42,0.3)] hover:bg-white hover:shadow-sm"
                  >
                    <span className="pointer-events-none absolute -right-5 -top-5 h-12 w-12 rounded-full bg-[rgba(15,23,42,0.08)]" />
                    <div className="relative flex items-start gap-3">
                      <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] px-2 text-[11px] font-bold text-[var(--color-primary-dark)]">
                        {index + 1}
                      </span>
                      <p className="text-sm font-semibold leading-6 text-slate-700">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/projects" className="mt-6 inline-flex">
                <Button variant="primary" size="md">View Campaigns</Button>
              </Link>
            </div>

            <div className="relative min-h-[420px] border-t border-slate-200 bg-[linear-gradient(145deg,rgba(15,23,42,0.08),rgba(255,193,7,0.12))] lg:min-h-full lg:border-l lg:border-t-0 flex items-center justify-center">
              <div className="absolute inset-0 aspect-square lg:aspect-auto">
                {campaignImage ? (
                  <img
                    src={campaignImage.src}
                    alt="Campaign strategy"
                    loading="lazy"
                    className="h-full w-full object-cover p-4"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 italic text-sm">Campaign Image Placeholder</div>
                )}
              </div>
              <div className="absolute left-6 right-6 top-6 rounded-xl border border-white/80 bg-white/90 px-4 py-3 backdrop-blur-sm">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">
                  Performance & Scalability
                </p>
                <p className="mt-1 text-xs text-slate-600">Campaign frameworks built for rapid deployment and SLA outcomes.</p>
              </div>
            </div>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default HomeCampaignsSection;
