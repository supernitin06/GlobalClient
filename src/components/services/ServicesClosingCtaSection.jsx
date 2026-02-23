'use client';

import React from "react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";
import ctaImg from "../../assets/image/customer-service-concept-illustration.webp";

const ServicesClosingCtaSection = () => {
  return (
    <ScrollReveal variant="zoom" delay={120}>
      <section className="relative mt-6 overflow-hidden rounded-2xl border border-[rgba(13,110,253,0.24)] bg-[linear-gradient(135deg,rgba(13,110,253,0.07),rgba(255,193,7,0.12))] shadow-[0_12px_26px_rgba(15,23,42,0.08)]">
        <div className="grid gap-0 md:grid-cols-[1.28fr_0.72fr]">
          <div className="p-6 md:p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Closing CTA</p>
            <h2 className="mt-1 text-3xl font-bold">Ready to Activate Your Outsourcing Plan?</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-700">
              Partner with a delivery team built for speed, compliance, and measurable outcomes.
              We align process setup, trained staffing, and ongoing monitoring so your operations
              can scale with confidence.
            </p>
            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-700">
              From onboarding and SOP alignment to QA tracking and daily reporting, every stage is
              managed with clear accountability and performance focus. Whether you need customer support,
              sales execution, or back-office assistance, our model is designed to reduce risk, improve
              consistency, and deliver long-term operational value.
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

          <div className="relative min-h-[170px] border-t border-slate-200 md:border-l md:border-t-0 flex items-center justify-center bg-[linear-gradient(145deg,rgba(248,250,252,0.78),rgba(255,255,255,0.9))]">
            <img
              src={ctaImg.src}
              alt="Activate Outsourcing"
              className="max-h-[240px] w-auto object-contain p-3 md:max-h-[250px]"
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ServicesClosingCtaSection;
