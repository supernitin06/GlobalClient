'use client';

import React from "react";
import Link from "next/link";
import logo from "../../assets/image/logo/yello.png";
import Button from "@/components/ui/Button";

const services = [
  "Inbound Customer Support",
  "Outbound Sales & Lead Generation",
  "Live Chat Support",
  "Email Support & Ticket Handling",
  "Technical Support (L1/L2)",
  "Back Office Operations",
];

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Partner With Us", href: "/partnerwithus" },
  { label: "Request Proposal", href: "/requestproposal" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Compliance & Policies", href: "/compliance-policies" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-14 overflow-hidden border-t border-slate-200 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,250,255,0.98))]">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[rgba(13,110,253,0.12)] blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-full w-1/3 bg-[radial-gradient(circle_at_top_right,rgba(255,193,7,0.16),transparent_58%)]" />
      <div className="pointer-events-none absolute -right-28 bottom-8 h-72 w-72 rounded-full bg-[rgba(13,110,253,0.08)] blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10">
        <div className="rounded-[1.8rem] border border-[rgba(13,110,253,0.24)] bg-[linear-gradient(120deg,rgba(13,110,253,0.1),rgba(255,193,7,0.13))] p-7 shadow-[0_18px_38px_rgba(15,23,42,0.1)] md:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--color-primary-dark)]">Final Support CTA</p>
              <h3 className="mt-2 text-3xl font-bold leading-tight sm:text-4xl">Need Fast Outsourcing Deployment?</h3>
              <p className="mt-2 max-w-2xl text-base text-slate-700">Share your requirement and our team will connect within 24-48 business hours.</p>
            </div>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700">24-48 Business Hours</span>
              <span className="rounded-full border border-slate-200 bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700">SLA-Focused Consultation</span>
              <Link href="/requestproposal" className="inline-flex">
                <Button variant="primary" size="lg">Request Proposal</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6 py-10 lg:grid-cols-12">
        <article className="rounded-3xl border border-slate-200 bg-white/95 p-7 shadow-[0_14px_30px_rgba(15,23,42,0.08)] lg:col-span-4">
          <div className="flex items-start gap-4">
            <img src={logo.src} alt="Projects Global Logo" className="h-12 w-auto" />
            <div>
              <h3 className="text-2xl font-bold">Projects Global</h3>
              <p className="text-sm font-medium text-slate-600">Global Outsourcing Excellence</p>
            </div>
          </div>
          <p className="mt-5 text-[15px] leading-7 text-slate-700">India Headquarters | Global Delivery Network</p>
          <p className="mt-2 text-[15px] text-slate-700">Phone: +91 [Insert Number]</p>
          <p className="text-[15px] text-slate-700">Email: info@projectsglobal.in</p>
          <p className="text-[15px] text-slate-700">Business Hours: Monday - Saturday | 10:00 AM - 7:00 PM (IST)</p>

          <div className="mt-5 flex gap-2.5">
            {["in", "f", "ig"].map((item) => (
              <span key={item} className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-300 bg-white text-xs font-bold text-slate-600">
                {item.toUpperCase()}
              </span>
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white/95 p-7 shadow-[0_14px_30px_rgba(15,23,42,0.08)] lg:col-span-3">
          <h4 className="text-2xl font-bold">Services</h4>
          <ul className="mt-5 space-y-2.5 text-[15px] text-slate-700">
            {services.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--color-primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white/95 p-7 shadow-[0_14px_30px_rgba(15,23,42,0.08)] lg:col-span-2">
          <h4 className="text-2xl font-bold">Quick Links</h4>
          <ul className="mt-5 space-y-2.5 text-[15px] text-slate-700">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="inline-flex items-center gap-2 transition hover:translate-x-0.5 hover:text-[var(--color-primary)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-primary)]" />
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </article>

        <article className="rounded-3xl border border-[rgba(13,110,253,0.24)] bg-[linear-gradient(160deg,rgba(255,255,255,0.95),rgba(231,241,255,0.68))] p-7 shadow-[0_14px_30px_rgba(15,23,42,0.08)] lg:col-span-3">
          <h4 className="text-2xl font-bold">Newsletter</h4>
          <p className="mt-3 text-[15px] text-slate-700">Get outsourcing updates and campaign opportunities.</p>
          <form className="mt-4 space-y-3">
            <input
              type="email"
              placeholder="Your business email"
              className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-[var(--color-primary)]"
            />
            <Button type="button" variant="primary" size="md" className="w-full">Subscribe</Button>
          </form>
          <p className="mt-3 text-xs text-slate-500">Business email only. No spam communication.</p>
        </article>
      </div>

      <div className="relative border-t border-slate-200/90 bg-white/80">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <p className="text-sm font-medium text-slate-700">© {year} Projects Global. All Rights Reserved.</p>
            <div className="flex flex-wrap gap-2 text-xs text-slate-700">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="rounded-full border border-slate-300 bg-white px-3 py-1.5 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs leading-6 text-slate-600">
            Projects Global provides outsourcing and support services subject to contractual agreements. Information on this
            website is for general purposes only and does not constitute a binding offer or guarantee of performance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
