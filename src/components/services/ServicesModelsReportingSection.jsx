'use client';

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import engagementImage from "../../assets/image/GP-41.jpg";
import reportingImage from "../../assets/image/GP-42.jpg";

const ServicesModelsReportingSection = ({ engagementModels, reportingMonitoring }) => {
  return (
    <section className="mt-6 grid gap-6 md:grid-cols-2">
      <ScrollReveal variant="up">
        <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
          <div className="relative h-36 border-b border-slate-200 bg-slate-100">
            <Image
              src={engagementImage}
              alt="Engagement models"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wide text-white">Engagement Models</p>
          </div>
          <div className="p-6">
            <ul className="pg-service-model-list grid gap-2.5">
              {engagementModels.map((item) => (
                <li
                  key={item}
                  className="group/item flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(241,245,249,0.9))] px-3.5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[rgba(30,61,133,0.28)] hover:shadow-[0_10px_18px_rgba(15,23,42,0.08)]"
                >
                  <span className="inline-flex h-2 min-w-[0.5rem] rounded-full bg-[var(--color-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={90}>
        <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
          <div className="relative h-36 border-b border-slate-200 bg-slate-100">
            <Image
              src={reportingImage}
              alt="Reporting and monitoring"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
            <p className="absolute bottom-3 left-4 text-xs font-bold uppercase tracking-wide text-white">Reporting & Monitoring</p>
          </div>
          <div className="p-6">
            <ul className="pg-service-model-list grid gap-2.5">
              {reportingMonitoring.map((item) => (
                <li
                  key={item}
                  className="group/item flex items-center gap-2.5 rounded-xl border border-slate-200 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(241,245,249,0.9))] px-3.5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[rgba(30,61,133,0.28)] hover:shadow-[0_10px_18px_rgba(15,23,42,0.08)]"
                >
                  <span className="inline-flex h-2 min-w-[0.5rem] rounded-full bg-[var(--color-primary)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default ServicesModelsReportingSection;
