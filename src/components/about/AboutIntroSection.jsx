"use client";

import React from "react";
import ScrollReveal from "../ui/ScrollReveal";
import aboutImg from "../../assets/image/happy-young-asia-businessmen-businesswoman-meeting-brainstorming-some-new-ideas-about-project.jpg";

const AboutIntroSection = ({ intro }) => {
  const headingWords = intro.title.split(" ");

  return (
    <section className="relative grid items-stretch gap-8 lg:grid-cols-2">
      <ScrollReveal variant="left" className="h-full">
        <article className="relative flex h-full min-h-[500px] flex-col rounded-3xl border border-slate-200/80 bg-white/70 p-5 sm:p-7">
          <span className="absolute left-4 top-5 h-14 w-1 rounded-full bg-[linear-gradient(180deg,var(--color-primary),transparent)]" />
          <div className="mb-5 ml-3 inline-flex rounded-full border border-[rgba(15,23,42,0.24)] bg-[var(--color-primary-light)] px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">
            {intro.label}
          </div>
          <h1
            className="max-w-[19ch] text-[2.35rem] font-extrabold leading-[1.08] sm:text-[2.9rem]"
            style={{ color: "var(--color-primary)", backgroundImage: "none" }}
          >
            {headingWords.map((word, index) => (
              <span
                key={`${word}-${index}`}
                className="pg-about-title-word"
                style={{ "--about-word-index": index }}
              >
                {word}
                {index < headingWords.length - 1 ? "\u00a0" : ""}
              </span>
            ))}
          </h1>
          {intro.paragraphs.map((line, index) => (
            <p
              key={line}
              className={`${index === 0 ? "mt-5" : "mt-3"} pg-about-copy-line max-w-[62ch] text-base leading-8 text-slate-700`}
              style={{ "--about-line-index": index }}
            >
              {line}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-2.5">
            <div className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
              SLA-Driven
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
              Verified Centers
            </div>
            <div className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-semibold text-slate-700 shadow-sm">
              Trained Teams
            </div>
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="zoom" delay={120} className="h-full">
        <article className="relative h-full min-h-[500px] overflow-hidden rounded-[2rem] border border-slate-200/90 bg-white shadow-[0_22px_46px_rgba(15,23,42,0.14)]">
          <img
            src={aboutImg.src}
            alt="About Projects Global"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/20 to-transparent" />

          <div className="absolute left-4 right-4 top-4 grid grid-cols-3 gap-2">
            <div className="rounded-xl border border-white/35 bg-white/88 px-2 py-1.5 text-center text-xs font-semibold text-slate-800 backdrop-blur-sm">
              24x7 Coverage
            </div>
            <div className="rounded-xl border border-white/35 bg-white/88 px-2 py-1.5 text-center text-xs font-semibold text-slate-800 backdrop-blur-sm">
              QA Monitoring
            </div>
            <div className="rounded-xl border border-white/35 bg-white/88 px-2 py-1.5 text-center text-xs font-semibold text-slate-800 backdrop-blur-sm">
              SLA Delivery
            </div>
          </div>

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/35 bg-black/35 p-4 backdrop-blur-md">
            <p className="pg-about-caption-kicker text-xs font-bold uppercase tracking-[0.11em] text-white/90">
              Performance-Driven Operations
            </p>
            <p className="pg-about-caption-line mt-2 max-w-[42ch] text-xl font-bold leading-tight text-white drop-shadow-[0_4px_16px_rgba(0,0,0,0.35)]">
              Reliable outsourcing execution backed by trained teams and SLA
              discipline.
            </p>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default AboutIntroSection;
