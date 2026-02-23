'use client';

import React from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

import heroImage1 from "../../assets/image/call-center-3614379_1920.jpg";

const defaultChannels = [
  "Inbound Support",
  "Outbound Sales",
  "Chat Support",
  "Email Support",
  "Technical Support",
  "Back Office Operations",
];

const defaultHighlights = [
  { icon: "✓", text: "Verified Outsourcing Centers" },
  { icon: "✓", text: "24/7 Support Capability" },
  { icon: "✓", text: "SLA-Based Reporting & Monitoring" },
  { icon: "✓", text: "Rapid Go-Live & Deployment Support" },
];

const HomeHeroSection = ({
  supportChannels = defaultChannels,
  trustHighlights = defaultHighlights,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white">
      {/* Background atmosphere */}
      <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(15,23,42,0.06)_0%,transparent_38%,rgba(255,193,7,0.07)_100%)]" />
      <div className="absolute inset-0 pg-soft-grid opacity-[0.35]" />
      <div className="absolute -left-32 top-16 h-96 w-96 rounded-full bg-[rgba(30,61,133,0.14)] blur-[80px]" />
      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[rgba(255,193,7,0.18)] blur-[70px]" />
      <div className="absolute right-1/4 top-0 h-64 w-64 rounded-full bg-[rgba(15,23,42,0.06)] blur-[60px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 md:py-18 lg:py-16">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">

          {/* LEFT — copy */}
          <ScrollReveal variant="left">
            <div>
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(30,61,133,0.28)] bg-[rgba(30,61,133,0.07)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-primary)]">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-primary)]" />
                Trusted Outsourcing Partner
              </div>

              {/* Headline */}
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.4rem]">
                <span className="block">Global Outsourcing</span>
                <span className="block bg-[linear-gradient(130deg,#1e3d85_0%,#0f172a_50%,#334155_100%)] bg-clip-text text-transparent">
                  Solutions for Growth
                </span>
              </h1>

              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
                Scale your business with reliable call center outsourcing, trained agents, and SLA-driven performance across every channel.
              </p>

              {/* Feature pills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {["SLA-Driven Delivery", "Verified Partner Centers", "Rapid Go-Live"].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm"
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Support channels */}
              <div className="mt-7">
                <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-slate-400">Support Channels</p>
                <div className="flex flex-wrap gap-2">
                  {supportChannels.map((channel) => (
                    <span
                      key={channel}
                      className="group relative overflow-hidden rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:shadow-md"
                    >
                      {channel}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA buttons */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/requestproposal">
                  <Button
                    variant="primary"
                    size="lg"
                    iconRight={
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    }
                  >
                    Request a Proposal
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>

              {/* Social proof row */}
              <div className="mt-8 flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="flex -space-x-2">
                  {["#1e3d85", "#334155", "#0f172a", "#475569"].map((c, i) => (
                    <span
                      key={i}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-full border-2 border-white text-[10px] font-bold text-white shadow"
                      style={{ background: c }}
                    >
                      {["AC", "BD", "CE", "DF"][i]}
                    </span>
                  ))}
                </div>
                <p className="text-xs text-slate-500">
                  <span className="font-bold text-slate-800">500+</span> businesses trust Projects Global
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — image card */}
          <ScrollReveal variant="zoom" delay={100}>
            <div className="relative">
              {/* Floating decorative ring */}
              <div className="absolute -inset-3 rounded-[2rem] border border-[rgba(30,61,133,0.12)] bg-[rgba(30,61,133,0.04)]" />

              <div className="relative overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white p-2.5 shadow-[0_28px_58px_rgba(15,23,42,0.16)]">
                {heroImage1 ? (
                  <img
                    src={heroImage1.src}
                    alt="Customer support team"
                    loading="eager"
                    className="h-[360px] w-full rounded-2xl object-cover lg:h-[470px] hero-float"
                  />
                ) : (
                  <div className="flex h-[360px] items-center justify-center rounded-2xl bg-slate-100 text-slate-400 lg:h-[470px]">
                    Hero Image Placeholder
                  </div>
                )}

                {/* Overlay trust card */}
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/60 bg-white/96 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.12)] backdrop-blur-lg">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">Trusted Performance</p>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700">● LIVE</span>
                  </div>
                  <div className="mt-3 grid grid-cols-2 gap-2">
                    {trustHighlights.map((item) => (
                      <p key={typeof item === "string" ? item : item.text} className="flex items-center gap-1.5 text-xs font-medium text-slate-700">
                        <span className="text-emerald-500 font-bold">{typeof item === "object" ? item.icon : "✓"}</span>
                        {typeof item === "object" ? item.text : item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="pg-badge-pulse absolute -right-4 top-8 flex flex-col items-center rounded-2xl border border-[rgba(30,61,133,0.22)] bg-white px-4 py-3 shadow-[0_8px_20px_rgba(15,23,42,0.14)]">
                <p className="text-2xl font-extrabold text-[var(--color-primary)]">98%</p>
                <p className="mt-0.5 text-[10px] font-semibold text-slate-500">Client Satisfaction</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
