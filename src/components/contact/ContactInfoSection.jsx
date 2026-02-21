'use client';

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const ContactInfoSection = ({ info }) => {
  return (
    <ScrollReveal variant="left">
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
        <h2 className="text-2xl font-bold">Contact Information</h2>
        <ul className="mt-4 grid gap-2 text-slate-700">
          {info.map((item, index) => (
            <li key={item} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
              <span className="mt-0.5 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                {index + 1}
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-8 rounded-xl border border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.07),rgba(255,193,7,0.1))] p-4">
          <h3 className="text-lg font-semibold">Head Office Address (US/UK Format)</h3>
          <p className="mt-3 text-slate-700">
            Projects Global
            <br />
            [Building Name]
            <br />
            [Street / Sector / Area]
            <br />
            [City, State, PIN Code]
            <br />
            India
          </p>
        </div>

        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm text-slate-700">
            Use the map below to locate our office easily. Office visits are strictly by appointment only.
          </p>
          <div className="mt-4 grid h-52 place-items-center rounded-lg border border-slate-300 bg-white text-sm text-slate-500">
            Google Map Embed Placeholder
          </div>
        </div>
      </article>
    </ScrollReveal>
  );
};

export default ContactInfoSection;
