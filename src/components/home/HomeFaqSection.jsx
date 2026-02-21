'use client';

import React from "react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

const HomeFaqSection = ({ faqItems = [] }) => {
  return (
    <section className="pg-container mt-6">
      <ScrollReveal variant="up">
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.09),rgba(255,193,7,0.13))] px-7 py-6">
            <p className="text-xs font-bold uppercase tracking-[0.1em] text-slate-600">Frequently Asked Questions</p>
            <h2 className="mt-2 text-3xl font-bold">Everything You Need Before Starting</h2>
          </div>

          <div className="grid gap-4 p-7 lg:grid-cols-2">
            {faqItems.map((item, index) => (
              <details
                key={item.question}
                className="group rounded-2xl border border-slate-200 bg-slate-50/70 p-5 transition-all duration-300 open:bg-white open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-3">
                  <span className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[var(--color-primary)] text-[11px] font-bold text-white">
                      {index + 1}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">{item.question}</span>
                  </span>
                  <span className="text-lg font-bold text-[var(--color-primary-dark)] transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 pl-9 text-sm leading-6 text-slate-600">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="border-t border-slate-200 px-7 py-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <p className="text-sm font-medium text-slate-700">Need a customized outsourcing model? Talk to our team directly.</p>
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
