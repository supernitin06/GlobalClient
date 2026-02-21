'use client';

import React from "react";
import Link from "next/link";

const TopBar = () => {
  return (
    <div className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(59,130,246,0.22)] bg-[linear-gradient(90deg,#0F1A2D,#1A2842,#22365B)]">
      <div className="pg-container flex h-10 items-center justify-between text-xs text-slate-100">
        <div className="hidden items-center gap-5 lg:flex">
          <a href="tel:+91[InsertNumber]" className="transition hover:text-white">
            Phone: +91 [Insert Number]
          </a>
          <a href="mailto:info@projectsglobal.in" className="transition hover:text-white">
            Email: info@projectsglobal.in
          </a>
          <p className="text-slate-200">Mon - Sat | 10:00 AM - 7:00 PM (IST)</p>
        </div>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/requestproposal" className="font-semibold text-[var(--color-secondary)] transition hover:brightness-110">
            Request Proposal
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
