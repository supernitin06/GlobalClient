'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";
import approachImg from "../../assets/image/vecteezy_teamwork-data-analysis-and-business-strategy-a_56410899.png";

const AboutContentSections = ({ boxClass, whatWeDo, whyProjectsGlobal, approach, compliance, industries }) => {
  return (
    <>
      <ScrollReveal variant="up">
        <section className={`mt-4 ${boxClass}`}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(255,193,7,0.10))] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Execution Framework</p>
              <h2 className="mt-1 text-3xl font-bold text-slate-900">What We Do</h2>
              <p className="mt-2 max-w-3xl text-slate-700">
                Projects Global connects businesses with reliable outsourcing operations and ensures smooth execution through:
              </p>
            </div>
            <div className="grid gap-3 px-5 py-4 sm:grid-cols-3">
              <div className="rounded-xl border border-[rgba(15,23,42,0.2)] bg-[var(--color-primary-light)] px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-primary-dark)]">Managed Teams</p>
                <p className="mt-1 text-xs text-slate-600">Skilled agents with supervised delivery.</p>
              </div>
              <div className="rounded-xl border border-[rgba(15,23,42,0.2)] bg-white px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-primary-dark)]">Daily Controls</p>
                <p className="mt-1 text-xs text-slate-600">Reporting, productivity, and process governance.</p>
              </div>
              <div className="rounded-xl border border-[rgba(255,193,7,0.45)] bg-[rgba(255,193,7,0.12)] px-3 py-2">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-[#8a6a00]">SLA Driven</p>
                <p className="mt-1 text-xs text-slate-700">Quality-led execution built for long-term partnership.</p>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {whatWeDo.map((item, index) => (
              <article
                key={item}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(15,23,42,0.35)] hover:shadow-md"
              >
                <span className="pointer-events-none absolute -right-6 -top-6 h-16 w-16 rounded-full bg-[rgba(15,23,42,0.08)] transition-transform duration-300 group-hover:scale-110" />
                <div className="relative mb-3 flex items-center gap-2">
                  <span className="inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-full bg-[var(--color-primary)] px-2 text-[11px] font-bold text-white shadow-sm">
                    {index + 1}
                  </span>
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary-dark)]" />
                </div>
                <p className="relative text-sm font-semibold leading-6 text-slate-800">{item}</p>
              </article>
            ))}
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={80}>
        <section className={`mt-4 ${boxClass}`}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.07),rgba(255,193,7,0.08))] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Why Choose Us</p>
              <h2 className="mt-1 text-3xl font-bold text-slate-900">Why Projects Global</h2>
              <p className="mt-2 max-w-3xl text-slate-700">
                We understand outsourcing is not only about cost reduction - it is about protecting customer experience and
                brand reputation.
              </p>
              <p className="mt-2 text-sm font-medium text-slate-700">That is why we operate with strict focus on:</p>
            </div>
            <div className="grid gap-3 p-5 md:grid-cols-2">
              {whyProjectsGlobal.map((item, index) => (
                <article
                  key={item}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(15,23,42,0.35)] hover:bg-white hover:shadow-md"
                >
                  <span className="pointer-events-none absolute -right-6 -top-6 h-14 w-14 rounded-full bg-[rgba(15,23,42,0.08)] transition-transform duration-300 group-hover:scale-110" />
                  <div className="relative flex items-center gap-2">
                    <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[var(--color-primary)] px-2 text-[10px] font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal variant="right" delay={120}>
        <section className={`mt-4 overflow-hidden ${boxClass}`}>
          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <div className="rounded-2xl border border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(255,193,7,0.08))] px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Operational Model</p>
                <h2 className="mt-1 text-3xl font-bold text-slate-900">Our Outsourcing Approach</h2>
              </div>
              <div className="mt-4 grid gap-3">
                {approach.map((item, index) => (
                  <article
                    key={item}
                    className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-[rgba(15,23,42,0.35)] hover:shadow-sm"
                  >
                    <span className="absolute left-0 top-0 h-full w-1 bg-[linear-gradient(180deg,var(--color-primary),var(--color-primary-dark))]" />
                    <div className="relative flex items-start gap-3 pl-1">
                      <span className="mt-0.5 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[11px] font-bold text-[var(--color-primary-dark)]">
                        {index + 1}
                      </span>
                      <p className="text-slate-700">{item}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(160deg,rgba(15,23,42,0.06),rgba(255,193,7,0.12))] p-3 flex items-center justify-center min-h-[250px]">
              <img src={approachImg.src} alt="Our Outsourcing Approach" className="h-full w-full object-contain" />
              <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-slate-200 bg-white/95 px-4 py-3 backdrop-blur">
                <p className="text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Execution Flow</p>
                <p className="mt-1 text-sm text-slate-700">Requirement | Center Allocation | Training | Go-Live | Optimisation</p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={160}>
        <section className={`mt-4 ${boxClass}`}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.07),rgba(255,193,7,0.10))] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Compliance Standard</p>
              <h2 className="mt-1 text-3xl font-bold text-slate-900">Compliance & Quality Commitment</h2>
              <p className="mt-2 max-w-3xl text-slate-700">Projects Global maintains a strict compliance framework including:</p>
            </div>
            <div className="grid gap-3 p-5 md:grid-cols-2">
              {compliance.map((item, index) => (
                <article
                  key={item}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(15,23,42,0.35)] hover:bg-white hover:shadow-md"
                >
                  <span className="pointer-events-none absolute -right-6 -top-6 h-14 w-14 rounded-full bg-[rgba(15,23,42,0.08)] transition-transform duration-300 group-hover:scale-110" />
                  <div className="relative flex items-center gap-2">
                    <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[var(--color-primary)] px-2 text-[10px] font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold leading-6 text-slate-800">{item}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={200}>
        <section className={`mt-4 ${boxClass}`}>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.08),rgba(255,193,7,0.08))] px-5 py-4">
              <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Industry Coverage</p>
              <h2 className="mt-1 text-3xl font-bold text-slate-900">Industries We Support</h2>
              <p className="mt-2 max-w-3xl text-slate-700">Scalable support operations tailored to sector-specific workflows and SLA expectations.</p>
            </div>
            <div className="grid gap-3 p-5 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((item, index) => (
                <article
                  key={item}
                  className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-50/70 px-4 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-[rgba(15,23,42,0.35)] hover:bg-white hover:shadow-md"
                >
                  <span className="pointer-events-none absolute -right-5 -top-5 h-12 w-12 rounded-full bg-[rgba(15,23,42,0.08)] transition-transform duration-300 group-hover:scale-110" />
                  <div className="relative flex items-center gap-2">
                    <span className="inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[var(--color-primary)] px-2 text-[10px] font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold text-slate-800">{item}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </>
  );
};

export default AboutContentSections;
