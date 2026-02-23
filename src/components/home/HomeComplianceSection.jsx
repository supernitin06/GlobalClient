'use client';

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import isoLogo from "../../assets/image/logo/iso-certification-removebg-preview.png";
import gstLogo from "../../assets/image/logo/gst-icon-goods-services-tax-badge-vector-stamp_654039-119-removebg-preview (1).png";
import trademarkLogo from "../../assets/image/logo/trademark-registration-removebg-preview.png";
import iecLogo from "../../assets/image/logo/IEC-removebg-preview.png";

const credentials = [
  { name: "ISO Certified", logo: isoLogo },
  { name: "GST Registered", logo: gstLogo },
  { name: "Trademark Registered", logo: trademarkLogo },
  { name: "IEC Certified", logo: iecLogo },
];

const HomeComplianceSection = ({ compliancePoints = [] }) => {
  return (
    <section className="pg-container mt-6">
      <ScrollReveal variant="up">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white px-7 py-7 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-600">Compliance & Credentials</p>
          <h2 className="mt-2 text-3xl font-bold">Trusted, Verified and Compliance-Driven Operations</h2>
          <p className="mt-3 max-w-4xl text-slate-600">
            Our outsourcing framework is designed for data security, process discipline, and contractual transparency.
          </p>

          <div className="mt-5 grid gap-2 sm:grid-cols-2">
            {compliancePoints.map((point) => (
              <div
                key={point}
                className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-700"
              >
                {point}
              </div>
            ))}
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={70}>
        <article className="mt-6 overflow-hidden rounded-3xl border border-slate-200 bg-[linear-gradient(145deg,rgba(15,23,42,0.08),rgba(255,193,7,0.12))] px-7 py-7 shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <p className="text-xs font-bold uppercase tracking-[0.1em] text-[var(--color-primary-dark)]">Recognitions</p>
          <p className="mt-2 text-base font-semibold text-slate-700">
            Operational reliability backed by documentation and compliance readiness.
          </p>

          <div className="mt-5 overflow-hidden rounded-2xl border border-slate-200 bg-white/85 p-3">
            <div className="pg-logo-marquee-mask">
              <div className="pg-logo-track flex gap-4">
                {[...credentials, ...credentials].map((item, index) => (
                  <div
                    key={index}
                    className="mx-2.5 inline-flex h-24 w-[210px] items-center justify-center rounded-2xl border border-slate-200 bg-white px-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[rgba(15,23,42,0.28)]"
                  >
                    <Image src={item.logo} alt={item.name} width={160} height={56} className="h-14 w-auto object-contain" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {["Verified Documentation", "Compliance Readiness", "Operational Governance"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[rgba(15,23,42,0.25)] bg-[rgba(15,23,42,0.08)] px-3 py-1 text-xs font-semibold text-[var(--color-primary-dark)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default HomeComplianceSection;
