'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

import serviceImage from "../../assets/image/GP-28.jpg";
import aboutImage from "../../assets/image/GP-29.jpg";

const HomeAboutServicesSection = ({ services }) => {
  return (
    <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="pg-about-services-shell grid gap-6 overflow-hidden rounded-[2rem] border border-slate-200/80 p-5 lg:grid-cols-2 lg:p-6">
        <ScrollReveal variant="up" className="h-full">
          <article className="pg-about-pane flex h-full flex-col rounded-3xl p-6 lg:p-7">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">About Preview Section</p>
            <h2 className="mt-2 text-4xl font-bold text-slate-900">Who We Are</h2>

          <div className="mt-5 flex flex-1 flex-col">
            <div>
              <div className="relative mb-5 aspect-video overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50 p-1.5">
                {aboutImage ? (
                  <Image
                    src={aboutImage}
                    alt="About Projects Global"
                    fill
                    sizes="(max-width: 1024px) 100vw, 48vw"
                    className="rounded-xl object-cover object-center"
                  />
                ) : (
                  <div className="text-slate-400 italic text-sm">About Image Placeholder</div>
                )}
              </div>
              <p className="text-lg leading-8 text-slate-700">
                Projects Global helps businesses run reliable voice and non-voice support operations with trained teams,
                verified partner centers, and SLA-based delivery models.
              </p>
              <p className="mt-3 text-lg leading-8 text-slate-700">
                We focus on faster deployment, better customer outcomes, and measurable performance through compliance,
                process control, and transparent reporting.
              </p>

              <div className="mt-4">
                <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-primary)]">
                  Quick Highlights
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  <span className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    SLA-Based Delivery
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    Verified Teams
                  </span>
                  <span className="rounded-full border border-slate-200 bg-white/80 px-2.5 py-1 text-[11px] font-semibold text-slate-700">
                    Compliance Ready
                  </span>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2">
                  <p className="text-lg font-extrabold text-[var(--color-primary)]">24/7</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Support Coverage</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white/80 px-3 py-2">
                  <p className="text-lg font-extrabold text-[var(--color-primary)]">98%</p>
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">SLA Alignment</p>
                </div>
              </div>

              <div className="mt-3 rounded-xl border border-[rgba(30,61,133,0.28)] bg-[rgba(30,61,133,0.08)] px-3 py-2">
                <p className="text-xs font-medium leading-relaxed text-slate-700">
                  Structured operations, trained agents, and transparent reporting to keep service quality consistent.
                </p>
              </div>
            </div>

            <Link href="/about" className="mt-5 inline-flex">
              <Button variant="outline" size="md">Learn More</Button>
            </Link>
          </div>
          </article>
        </ScrollReveal>

        <ScrollReveal variant="up" delay={120} className="h-full">
          <article className="pg-services-pane flex h-full flex-col rounded-3xl p-5 lg:p-6">
            <div className="relative h-[260px] bg-slate-100 flex items-center justify-center rounded-2xl border border-slate-200 sm:h-[330px]">
            {serviceImage ? (
              <Image
                src={serviceImage}
                alt="Our outsourcing services"
                fill
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            ) : (
              <div className="text-slate-400 italic text-sm">Service Image Placeholder</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
            <p className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">
              Services Preview Section
            </p>
          </div>

          <div className="mt-5 flex flex-1 flex-col">
            <h2 className="text-3xl font-bold text-slate-900">Our Outsourcing Services</h2>
            <div className="mt-4 grid flex-1 gap-2">
              {services.map((item, index) => (
                <div key={item} className="pg-service-row group flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="pg-service-marker mr-2 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m7 12 3 3 7-7" />
                    </svg>
                  </span>
                  <span className="pg-service-dot mr-2.5" aria-hidden="true" />
                  <span className="pg-service-text text-sm text-slate-700">{item}</span>
                  <span className="pg-service-index ml-auto text-[10px] font-bold uppercase tracking-[0.12em] text-slate-400">
                    S{String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              ))}
            </div>
            <Link href="/services" className="mt-6 inline-flex">
              <Button variant="primary" size="md">View Services</Button>
            </Link>
          </div>
          </article>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HomeAboutServicesSection;
