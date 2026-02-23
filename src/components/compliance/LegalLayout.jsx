'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

const legalNavLinks = [
  { label: "Compliance & Policies", href: "/compliance-policies" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Cookie Policy", href: "/cookie-policy" },
];

const LegalLayout = ({ eyebrow, title, subtitle, image, highlights = [], sections = [] }) => {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_32px_rgba(15,23,42,0.08)]">
        <div className="grid lg:min-h-[360px] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col justify-center bg-[linear-gradient(120deg,rgba(13,110,253,0.08),rgba(255,193,7,0.12))] px-7 py-8 lg:px-10">
            <p className="text-xs font-bold uppercase tracking-[0.11em] text-slate-600">{eyebrow}</p>
            <h1 className="mt-3 text-4xl font-bold leading-tight sm:text-5xl">{title}</h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-700">{subtitle}</p>
            {highlights.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-2">
                {highlights.map((item) => (
                  <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="relative h-64 overflow-hidden bg-slate-100 lg:h-full flex items-center justify-center">
            {image ? (
              <Image
                src={image}
                alt={title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-slate-400 italic text-sm">Legal Header Image</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/35 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 rounded-xl border border-white/40 bg-white/90 px-4 py-2.5 backdrop-blur-sm">
              <p className="text-[11px] font-bold uppercase tracking-[0.11em] text-[var(--color-primary-dark)]">
                Governance + Security + Compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-7 grid gap-5 lg:grid-cols-2">
        {sections.map((section, index) => (
          <article
            key={section.title}
            className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_26px_rgba(15,23,42,0.06)] ${index === 0 && sections.length % 2 !== 0 ? "lg:col-span-2" : ""
              }`}
          >
            <h2 className="text-2xl font-bold">{section.title}</h2>
            {section.description && <p className="mt-3 text-[15px] leading-7 text-slate-700">{section.description}</p>}
            {section.points?.length > 0 && (
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {section.points.map((item) => (
                  <li key={item} className="rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-sm font-medium text-slate-700">
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </article>
        ))}
      </section>

      <section className="mt-7 rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_14px_32px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-500">Legal Center</p>
            <h2 className="mt-2 text-3xl font-bold">Policy & Compliance Hub</h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-slate-600">
              Access all our legal frameworks below. For specific clarifications regarding our clauses or to request project-specific compliance alignment, please reach out to our team.
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {legalNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-bold text-slate-700 transition hover:border-[var(--color-primary)] hover:bg-white hover:shadow-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3 lg:flex-col lg:w-56">
            <Link href="/contact" className="w-full">
              <Button variant="primary" size="md" className="w-full justify-center">
                Contact Us
              </Button>
            </Link>
            <Link href="/requestproposal" className="w-full">
              <Button variant="outline" size="md" className="w-full justify-center">
                Request Proposal
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LegalLayout;
