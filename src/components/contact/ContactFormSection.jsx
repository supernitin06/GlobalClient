'use client';

import React, { useState } from "react";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

const inputClass =
  "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(13,110,253,0.1)]";
const labelClass = "text-sm font-medium text-slate-700";

const ContactFormSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <ScrollReveal variant="right" delay={90}>
      <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
        <h2 className="text-2xl font-bold">Contact Form</h2>
        <form className="mt-4 grid gap-4 md:grid-cols-2" onSubmit={onSubmit}>
          <label className={labelClass}>
            Full Name *
            <input className={inputClass} type="text" required />
          </label>
          <label className={labelClass}>
            Company Name *
            <input className={inputClass} type="text" required />
          </label>
          <label className={labelClass}>
            Designation / Role *
            <input className={inputClass} type="text" required />
          </label>
          <label className={labelClass}>
            Email Address *
            <input className={inputClass} type="email" required />
          </label>
          <label className={labelClass}>
            Phone Number *
            <input className={inputClass} type="tel" required />
          </label>
          <label className={labelClass}>
            Country / Region *
            <input className={inputClass} type="text" required />
          </label>
          <label className={labelClass}>
            Service Requirement *
            <input className={inputClass} type="text" required />
          </label>
          <label className={labelClass}>
            Expected Team Size *
            <input className={inputClass} type="number" required />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Go-Live Timeline *
            <input className={inputClass} type="text" required />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Project Requirement Details *
            <textarea className={inputClass} rows="4" required />
          </label>
          <label className={`${labelClass} md:col-span-2`}>
            Upload Document (Optional)
            <input className={inputClass} type="file" />
          </label>
          <label className="md:col-span-2 flex items-start gap-3 text-sm text-slate-700">
            <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--color-primary)]" />
            <span>I consent to be contacted by Projects Global regarding outsourcing consultation.</span>
          </label>
          <div className="md:col-span-2">
            <Button type="submit" variant="primary" size="md">Submit Enquiry</Button>
          </div>
        </form>
        {submitted && (
          <p className="mt-4 rounded-lg border border-[rgba(13,110,253,0.4)] bg-[rgba(13,110,253,0.1)] p-4 text-sm text-[var(--color-primary-dark)]">
            Thank you for contacting Projects Global. Our team will get back to you shortly.
          </p>
        )}
      </article>
    </ScrollReveal>
  );
};

export default ContactFormSection;
