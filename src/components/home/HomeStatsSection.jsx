'use client';

import React, { useRef } from "react";
import ScrollReveal from "../ui/ScrollReveal";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ICONS = [
  // Shield
  <svg key="shield" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" /></svg>,
  // Chart
  <svg key="chart" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
  // Users
  <svg key="users" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>,
  // Clock
  <svg key="clock" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
];

const STAT_BG = [
  "from-[rgba(30,61,133,0.08)] to-[rgba(30,61,133,0.03)]",
  "from-[rgba(16,185,129,0.1)] to-[rgba(16,185,129,0.03)]",
  "from-[rgba(245,158,11,0.12)] to-[rgba(245,158,11,0.03)]",
  "from-[rgba(139,92,246,0.1)] to-[rgba(139,92,246,0.03)]",
];

const STAT_ACCENT = [
  "text-[var(--color-primary)]",
  "text-emerald-600",
  "text-amber-600",
  "text-violet-600",
];

const STAT_BORDER = [
  "border-[rgba(30,61,133,0.18)]",
  "border-[rgba(16,185,129,0.2)]",
  "border-[rgba(245,158,11,0.22)]",
  "border-[rgba(139,92,246,0.18)]",
];

const HomeStatsSection = ({ stats = [] }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const stats_els = gsap.utils.toArray(".pg-stat-value");

    stats_els.forEach((el) => {
      const targetValue = el.getAttribute("data-value");
      const isPercentage = targetValue.includes("%");
      const isPlus = targetValue.includes("+");
      const numericPart = parseFloat(targetValue.replace(/[^0-9.]/g, ""));

      if (!isNaN(numericPart)) {
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          onUpdate: function () {
            let val = Math.floor(this.targets()[0].textContent);
            el.textContent = val + (isPercentage ? "%" : "") + (isPlus ? "+" : "");
          }
        });
      }
    });

    gsap.from(".pg-stat-card", {
      y: 30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".grid",
        start: "top 85%",
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="pg-container mt-6 md:mt-8 lg:mt-10">
      <div>
        <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_40px_rgba(15,23,42,0.08)]">
          {/* Header */}
          <div className="relative overflow-hidden border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.04),rgba(255,193,7,0.09))] px-7 py-6">
            <div className="pointer-events-none absolute right-0 top-0 h-full w-48 bg-[radial-gradient(ellipse_at_right,rgba(255,193,7,0.14),transparent_68%)]" />
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-slate-400">Operational Highlights</p>
            <h2 className="mt-1.5 text-3xl font-extrabold text-slate-900">Built for Scale, Speed & SLA Performance</h2>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, i) => (
              <div
                key={item.label}
                className={`pg-stat-card group relative overflow-hidden rounded-2xl border bg-gradient-to-br p-5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg ${STAT_BG[i % 4]} ${STAT_BORDER[i % 4]} pg-card-glow`}
              >
                {/* Icon */}
                <div className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl border border-current/10 bg-white/70 ${STAT_ACCENT[i % 4]} shadow-sm`}>
                  {ICONS[i % 4]}
                </div>
                <p
                  className={`pg-stat-value text-4xl font-extrabold ${STAT_ACCENT[i % 4]} pg-pulse-glow`}
                  data-value={item.value}
                >
                  {item.value}
                </p>
                <p className="mt-2 text-sm font-semibold text-slate-700">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">{item.subText}</p>
                {/* Corner accent */}
                <span className="pointer-events-none absolute -right-4 -top-4 h-16 w-16 rounded-full bg-current opacity-5 transition-transform duration-300 group-hover:scale-125" />
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
};

export default HomeStatsSection;
