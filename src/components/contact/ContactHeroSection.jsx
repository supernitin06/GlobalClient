'use client';

import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import contactImg from "../../assets/image/GP11.jpg";

const ContactHeroSection = () => {
  return (
    <ScrollReveal variant="up">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.08),rgba(255,193,7,0.12))] px-7 py-7 lg:border-b-0 lg:border-r">
            <p className="text-xs font-bold uppercase tracking-[0.09em] text-slate-600">Contact Us</p>
            <h1 className="pg-page-hero-title mt-2 text-4xl font-bold">Let&rsquo;s Discuss Your Outsourcing Requirements</h1>
          </div>
          <div className="relative h-52 lg:h-full flex items-center justify-center bg-slate-100">
            <Image
              src={contactImg}
              alt="Contact Us"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ContactHeroSection;
