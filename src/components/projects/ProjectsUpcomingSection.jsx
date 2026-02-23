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
    <section className="mt-4 md:mt-6 lg:mt-8 rounded-2xl border border-slate-200 bg-[linear-gradient(140deg,#ffffff,rgba(245,249,255,0.96))] p-4 shadow-[0_12px_30px_rgba(15,23,42,0.08)] sm:p-6">
      <ScrollReveal variant="up">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            <span className="text-emerald-600">Upcoming Projects</span>
            <span className="text-slate-500"> :</span>{" "}
            <span className="bg-gradient-to-r from-amber-500 via-[var(--color-primary)] to-[#3b82f6] bg-clip-text text-transparent">
              Global Projects
            </span>
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Explore upcoming opportunities in data entry, software development, call center, sales and IT projects.
          </p>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-2 border-b border-slate-200 pb-3">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-[0.08em] transition ${isActive
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

      <div className="mt-4 grid gap-2.5">
        {filteredProjects.map((project, index) => (
          <ScrollReveal key={project.id} variant="up" delay={Math.min(index * 70, 220)}>
            <article className="pg-project-upcoming-row group grid overflow-hidden rounded-xl border border-slate-200 bg-white sm:grid-cols-[220px_1fr_190px]">
              <div className="relative min-h-[112px]">
                <Image
                  src={imageMap[project.image]}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 220px"
                  className="object-cover"
                />
              </div>

              <div className="px-3.5 py-3 sm:px-4">
                <h3 className="text-sm font-extrabold text-slate-900 sm:text-base">{project.title}</h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.07em] text-slate-500">
                  Project ID: <span className="text-slate-700">{project.projectId}</span>
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1">{project.metaLabel}: {project.metaValue}</span>
                  <span className="rounded-full border border-[rgba(30,61,133,0.24)] bg-[rgba(30,61,133,0.06)] px-2.5 py-1 text-[var(--color-primary-dark)]">
                    {project.typeLabel}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-center border-t border-slate-200 bg-[linear-gradient(120deg,rgba(30,61,133,0.04),rgba(255,193,7,0.08))] p-3 sm:border-l sm:border-t-0">
                <span className="pg-available-blink rounded-full bg-[linear-gradient(135deg,#10b981,#059669)] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.08em] text-white shadow-[0_10px_20px_rgba(16,185,129,0.26)]">
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
