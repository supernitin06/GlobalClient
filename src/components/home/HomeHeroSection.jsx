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
  "Verified Outsourcing Centers",
  "24/7 Support Capability",
  "SLA-Based Reporting & Monitoring",
  "Rapid Go-Live & Deployment Support",
];

const HomeHeroSection = ({
  supportChannels = defaultChannels,
  trustHighlights = defaultHighlights,
}) => {
  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-white py-12 md:py-14 lg:py-12">
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(15,23,42,0.11),transparent_32%,rgba(255,193,7,0.1))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(15,23,42,0.12),transparent_32%)]" />
      <div className="absolute -left-24 top-14 h-72 w-72 rounded-full bg-[rgba(15,23,42,0.2)] blur-3xl" />
      <div className="absolute -right-24 bottom-4 h-80 w-80 rounded-full bg-[rgba(255,193,7,0.16)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <ScrollReveal variant="left">
            <div>
              <p className="inline-flex items-center rounded-full border border-[rgba(15,23,42,0.26)] bg-[var(--color-primary-light)] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-primary-dark)]">
                Trusted Outsourcing Partner
              </p>

              <h1 className="mt-5 bg-[linear-gradient(130deg,#0f172a_0%,#1e293b_45%,#334155_70%,#475569_100%)] bg-clip-text text-4xl font-extrabold leading-[1.04] text-transparent sm:text-5xl lg:text-[3.5rem]">
                Global Outsourcing Solutions for Customer Support & Sales
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700">
                Scale your business with reliable call center outsourcing, trained agents, and SLA-driven performance.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5">
                <span className="rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-slate-700">SLA-Driven Delivery</span>
                <span className="rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-slate-700">Verified Partner Centers</span>
                <span className="rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 text-xs font-semibold text-slate-700">Rapid Go-Live Support</span>
              </div>

              <p className="mt-6 text-sm font-semibold text-[var(--color-primary-dark)]">Support Channels:</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {supportChannels.map((channel) => (
                  <span
                    key={channel}
                    className="rounded-full border border-[rgba(15,23,42,0.2)] bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[rgba(15,23,42,0.35)]"
                  >
                    {channel}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/requestproposal">
                  <Button variant="primary" size="lg" className="rounded-xl border border-[#0f172a] shadow-[0_14px_26px_rgba(15,23,42,0.32)]">
                    Request a Proposal
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="rounded-xl border border-[rgba(255,193,7,0.65)] shadow-[0_10px_22px_rgba(255,193,7,0.24)]"
                  >
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="zoom" delay={90}>
            <div className="relative overflow-hidden rounded-3xl">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-[0_22px_44px_rgba(15,23,42,0.14)] aspect-video bg-slate-100 flex items-center justify-center">
                {heroImage1 ? (
                  <img
                    src={heroImage1.src}
                    alt="Customer support team"
                    loading="eager"
                    className="h-[350px] w-full rounded-2xl object-cover lg:h-[460px]"
                  />
                ) : (
                  <div className="text-slate-400 italic">Hero Image Placeholder</div>
                )}
              </div>

              <div className="absolute bottom-4 right-4 left-4 rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-[0_8px_18px_rgba(15,23,42,0.08)] backdrop-blur-md">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">Trust Bar / Highlights</p>
                <p className="mt-1 text-sm font-semibold text-[var(--color-primary)]">
                  Trusted Outsourcing Partner Built for Performance
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {trustHighlights.map((item) => (
                    <p key={item} className="text-xs text-slate-700">
                      - {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
