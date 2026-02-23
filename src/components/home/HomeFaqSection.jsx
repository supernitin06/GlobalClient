'use client';

import React, { useState } from "react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

const HomeFaqSection = ({ faqItems = [] }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="pg-container mt-6 md:mt-8 lg:mt-10">
      <ScrollReveal variant="up">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_42px_rgba(15,23,42,0.08)]">
          {/* Header */}
          <div className="relative overflow-hidden border-b border-slate-200 px-7 py-7">
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(15,23,42,0.04),rgba(255,193,7,0.10))]" />
            <div className="pointer-events-none absolute -left-10 -top-10 h-40 w-40 rounded-full bg-[rgba(30,61,133,0.1)] blur-2xl" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(30,61,133,0.18)] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-[var(--color-primary)]">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                FAQ
              </div>
              <h2 className="mt-3 text-3xl font-extrabold text-slate-900">
                Everything You Need Before Starting
              </h2>
              <p className="mt-1.5 text-sm text-slate-500">Common questions from clients and call center partners.</p>
            </div>
          </div>

          {/* Accordion */}
          <div className="divide-y divide-slate-100 px-7">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={item.question} className="py-4">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full cursor-pointer items-start justify-between gap-4 text-left"
                  >
                    <span className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[rgba(30,61,133,0.1)] text-[11px] font-extrabold text-[var(--color-primary)]">
                        {index + 1}
                      </span>
                      <span className={`text-sm font-semibold leading-6 transition-colors ${isOpen ? "text-[var(--color-primary)]" : "text-slate-800"}`}>
                        {item.question}
                      </span>
                    </span>
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-all duration-300 ${isOpen ? "rotate-45 border-[var(--color-primary)] bg-[rgba(30,61,133,0.08)] text-[var(--color-primary)]" : ""}`}
                    >
                      <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-400 ease-out"
                    style={{ maxHeight: isOpen ? "400px" : "0px", opacity: isOpen ? 1 : 0 }}
                  >
                    <p className="mt-3 pb-1 pl-9 text-sm leading-6 text-slate-600">
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="relative overflow-hidden border-t border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.03),rgba(255,193,7,0.08))] px-7 py-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="font-semibold text-slate-800">Still have questions?</p>
                <p className="mt-0.5 text-sm text-slate-500">Need a customized outsourcing model? Talk to our team directly.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link href="/requestproposal">
                  <Button variant="primary" size="md">Request Proposal</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="md">Schedule Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default HomeFaqSection;
