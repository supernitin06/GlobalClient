'use client';

import React, { useMemo, useState } from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import img1 from "../../assets/image/GP16.jpg";
import img2 from "../../assets/image/GP17.jpg";
import img3 from "../../assets/image/GP18.jpg";
import img4 from "../../assets/image/GP19.jpg";
import img5 from "../../assets/image/GP20.jpg";

const imageMap = {
  "GP16.jpg": img1,
  "GP17.jpg": img2,
  "GP18.jpg": img3,
  "GP19.jpg": img4,
  "GP20.jpg": img5,
};

const tabs = [
  { id: "all", label: "All" },
  { id: "live", label: "Live Projects" },
  { id: "time", label: "Time-Based Projects" },
  { id: "instant", label: "Instant Allocation" },
];

const ProjectsUpcomingSection = ({ projects = [] }) => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return projects;
    return projects.filter((item) => item.category === activeTab);
  }, [projects, activeTab]);

  return (
    <section className="pg-upcoming-shell mt-10 overflow-hidden rounded-[1.9rem] border border-slate-200 bg-[linear-gradient(145deg,#ffffff_0%,#f6f9ff_52%,#fef9ec_100%)] p-4 shadow-[0_16px_36px_rgba(15,23,42,0.1)] sm:mt-16 sm:p-6 lg:mt-24">
      <ScrollReveal variant="up">
        <div className="text-center">
          <p className="inline-flex rounded-full border border-[rgba(30,61,133,0.2)] bg-white/80 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.09em] text-[var(--color-primary-dark)] shadow-[0_6px_14px_rgba(15,23,42,0.08)]">
            Premium Pipeline
          </p>
          <h2 className="mt-3 text-3xl font-black sm:text-4xl">
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 bg-clip-text text-transparent">
              Upcoming Projects
            </span>
            <span className="text-slate-500"> :</span>{" "}
            <span className="bg-gradient-to-r from-amber-500 via-[var(--color-primary)] to-[#2563eb] bg-clip-text text-transparent">
              Global Projects
            </span>
          </h2>
          <p className="mx-auto mt-2 max-w-3xl text-sm text-slate-600">
            Explore upcoming opportunities in data entry, software development, call center, sales and IT projects.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 border-b border-slate-200/80 pb-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`pg-upcoming-tab rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] transition ${isActive
                    ? "bg-[linear-gradient(135deg,var(--color-primary),#3b82f6)] text-white shadow-[0_8px_18px_rgba(30,61,133,0.28)]"
                    : "border border-slate-300 bg-white text-slate-600 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)]"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </ScrollReveal>

      <div className="mt-4 grid gap-3">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.id} variant="up" delay={Math.min(index * 70, 220)}>
            <article className="pg-upcoming-row group grid overflow-hidden rounded-2xl border border-slate-200 bg-white/95 sm:grid-cols-[220px_1fr_190px]">
              <div className="relative min-h-[112px]">
                <Image
                  src={imageMap[project.image]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent" />
              </div>

              <div className="px-3.5 py-3 sm:px-4">
                <h3 className="text-sm font-black text-slate-900 sm:text-base">{project.title}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.07em] text-slate-500">
                  Project ID: <span className="text-slate-700">{project.projectId}</span>
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="rounded-full border border-slate-200 bg-[linear-gradient(145deg,#f8fafc,#eef2f7)] px-2.5 py-1">
                    {project.metaLabel}: {project.metaValue}
                  </span>
                  <span className="rounded-full border border-[rgba(30,61,133,0.24)] bg-[rgba(30,61,133,0.06)] px-2.5 py-1 text-[var(--color-primary-dark)]">
                    {project.typeLabel}
                  </span>
                </div>
              </div>

              <div className="pg-upcoming-side flex items-center justify-center border-t border-slate-200 bg-[linear-gradient(120deg,rgba(30,61,133,0.05),rgba(255,193,7,0.11))] p-3 sm:border-l sm:border-t-0">
                <span className="pg-upcoming-badge rounded-full bg-[linear-gradient(135deg,#10b981,#059669)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_10px_20px_rgba(16,185,129,0.26)]">
                  Coming Soon
                </span>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
};

export default ProjectsUpcomingSection;
