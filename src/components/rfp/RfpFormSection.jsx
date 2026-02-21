'use client';

import React, { useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

const inputClass =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(13,110,253,0.1)]";
const fieldClass = "rounded-xl border border-slate-200 bg-slate-50/70 p-3";
const labelClass = "text-sm font-semibold text-slate-700";

const RfpFormSection = ({ serviceTypes }) => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <ScrollReveal variant="up" delay={120}>
      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
        <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.07),rgba(255,193,7,0.1))] px-6 py-4">
          <h2 className="text-2xl font-bold">RFP Submission Form</h2>
          <p className="mt-1 text-sm text-slate-700">Complete the fields below to receive a customised outsourcing proposal.</p>
        </div>

        <div className="p-6">
          <form className="grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
            <label className={`${labelClass} ${fieldClass}`}>
              Company Information *
              <input className={inputClass} type="text" required />
            </label>

            <label className={`${labelClass} ${fieldClass}`}>
              Project Requirements *
              <select className={inputClass} required>
                <option value="">Select service type</option>
                {serviceTypes.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>

            <label className={`${labelClass} ${fieldClass}`}>
              Operating Hours *
              <input className={inputClass} type="text" placeholder="e.g. 24x7 / 9 AM - 9 PM" required />
            </label>

            <label className={`${labelClass} ${fieldClass}`}>
              Language Support *
              <input className={inputClass} type="text" placeholder="e.g. English, Hindi" required />
            </label>

            <label className={`${labelClass} ${fieldClass}`}>
              Technology & CRM Tools *
              <input className={inputClass} type="text" required />
            </label>

            <label className={`${labelClass} ${fieldClass}`}>
              SLA Expectations *
              <input className={inputClass} type="text" required />
            </label>

            <label className={`${labelClass} ${fieldClass} md:col-span-2`}>
              Reporting Frequency *
              <input className={inputClass} type="text" placeholder="Daily / Weekly / Monthly" required />
            </label>

            <label className={`${labelClass} ${fieldClass} md:col-span-2`}>
              Additional Notes
              <textarea className={inputClass} rows="4" />
            </label>

            <label className={`${labelClass} ${fieldClass} md:col-span-2`}>
              File Upload Option (Optional)
              <input className={inputClass} type="file" />
            </label>

            <div className="md:col-span-2">
              <Button type="submit" variant="primary" size="md">Submit RFP</Button>
            </div>
          </form>

          {submitted && (
            <p className="mt-5 rounded-lg border border-[rgba(13,110,253,0.4)] bg-[rgba(13,110,253,0.1)] p-4 text-sm text-[var(--color-primary-dark)]">
              Thank you. Your RFP has been submitted successfully. Our team will contact you within 24-48 business hours.
            </p>
          )}
        </div>
      </section>
    </ScrollReveal>
  );
};

export default RfpFormSection;
