'use client';

import React, { useState } from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";
import ProjectDetailFormModal from "./ProjectDetailFormModal";
import projectImg1 from "../../assets/image/GP-31.jpg";
import projectImg2 from "../../assets/image/GP-33.jpg";
import projectImg3 from "../../assets/image/GP-35.jpg";
import projectImg4 from "../../assets/image/GP-41.jpg";
import projectImg5 from "../../assets/image/GP-42.jpg";
import projectImg6 from "../../assets/image/GP-37.jpg";

const projectImages = {
  "GP-31.jpg": projectImg1,
  "GP-33.jpg": projectImg2,
  "GP-35.jpg": projectImg3,
  "GP-41.jpg": projectImg4,
  "GP-42.jpg": projectImg5,
  "GP-37.jpg": projectImg6,
};

const getFlagEmoji = (countryCode = "") => {
  if (!/^[A-Z]{2}$/.test(countryCode)) return countryCode;
  return String.fromCodePoint(...countryCode.split("").map((char) => char.charCodeAt(0) + 127397));
};

const ProjectsOpportunitiesSection = ({ opportunities = [] }) => {
  const [open, setOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const selectedProject = opportunities.find((item) => item.id === selectedProjectId);

  const openProjectForm = (projectId) => {
    setSelectedProjectId(projectId);
    setOpen(true);
  };

  return (
    <>
      <section id="all-projects-board" className="pg-op-board mt-4 md:mt-6 lg:mt-8 overflow-hidden rounded-[1.9rem] border border-slate-200 bg-[linear-gradient(145deg,#ffffff_0%,#f5f9ff_52%,#fef8ea_100%)] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.11)] sm:p-6">
        <div className="grid gap-4">
          {opportunities.map((project, index) => (
            <ScrollReveal key={project.id} variant="up" delay={Math.min(index * 70, 260)}>
              <article className="pg-op-row group overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95">
                <div className="grid gap-0 lg:grid-cols-[220px_1fr_200px]">
                  <div className="relative min-h-[180px] lg:min-h-full">
                    <Image
                      src={projectImages[project.image]}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 220px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
                    <p className="absolute left-2.5 top-2.5 rounded-full border border-white/45 bg-white/90 px-2.5 py-1 text-[9px] font-bold uppercase tracking-[0.11em] text-slate-700">
                      Live Campaign
                    </p>
                    <span className="pg-available-blink absolute right-2.5 top-2.5 rounded-full bg-emerald-500 px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.08em] text-white">
                      Available
                    </span>
                  </div>

                  <div className="p-4">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="text-xl font-black text-slate-900">{project.title}</h3>
                        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">
                          Project Code: <span className="font-bold text-slate-700">{project.code}</span>
                          {" | "}
                          Client Code: <span className="font-bold text-slate-700">{project.clientCode}</span>
                        </p>
                      </div>
                      <span className="pg-project-badge-shine inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-[11px] font-bold text-emerald-700 shadow-[0_6px_14px_rgba(16,185,129,0.2)]">
                        Go-Live In {project.goLiveDays} Days
                      </span>
                    </div>

                    <div className="mt-3.5 grid gap-2 sm:grid-cols-3">
                      <div className="rounded-xl border border-slate-200 bg-[linear-gradient(150deg,#f8fafc,#eef2f7)] px-3 py-2">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Seats Required</p>
                        <p className="text-base font-black text-slate-900">{project.seatsRequired}</p>
                      </div>
                      <div className="rounded-xl border border-slate-200 bg-[linear-gradient(150deg,#f8fafc,#eef2f7)] px-3 py-2 sm:col-span-2">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-slate-500">Last Activity</p>
                        <p className="text-sm font-bold text-slate-700">{project.lastActivity}</p>
                      </div>
                    </div>

                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-[0.08em] text-slate-500">Country:</span>
                      <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">
                        <span className="text-sm">{getFlagEmoji(project.countryFlag)}</span>
                        {project.country}
                      </span>
                      {project.channels.map((channel) => (
                        <span
                          key={channel}
                          className="pg-op-chip inline-flex rounded-full border border-[rgba(30,61,133,0.25)] bg-[rgba(30,61,133,0.07)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-primary-dark)]"
                        >
                          {channel}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pg-op-side flex flex-col justify-center gap-2.5 border-t border-slate-200 bg-[linear-gradient(145deg,rgba(30,61,133,0.05),rgba(255,193,7,0.08))] p-4 lg:border-l lg:border-t-0">
                    <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-center">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.09em] text-emerald-700">Go Live</p>
                      <p className="text-lg font-black text-emerald-700">{project.goLiveDays} Days</p>
                    </div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="pg-op-cta w-full"
                      onClick={() => openProjectForm(project.id)}
                    >
                      Get Project Details
                    </Button>
                    <Button as="a" href="/contact" variant="outline" size="sm" className="w-full border-[var(--color-primary)] bg-white/80">
                      Talk To Team
                    </Button>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ProjectDetailFormModal
        key={`${selectedProjectId || "none"}-${open ? "open" : "closed"}`}
        open={open}
        onClose={() => setOpen(false)}
        project={selectedProject}
      />
    </>
  );
};

export default ProjectsOpportunitiesSection;
