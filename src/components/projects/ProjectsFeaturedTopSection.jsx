'use client';

import React, { useMemo, useState } from "react";
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

const ProjectsFeaturedTopSection = ({ opportunities = [], featuredLimit = 3 }) => {
  const featured = opportunities.slice(0, featuredLimit);
  const [open, setOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const selectedProject = opportunities.find((item) => item.id === selectedProjectId);
  const stats = useMemo(() => {
    if (!featured.length) {
      return { liveCount: 0, avgGoLiveDays: 0, totalSeats: 0 };
    }

    const totalGoLive = featured.reduce((sum, item) => sum + (item.goLiveDays || 0), 0);
    const totalSeats = featured.reduce((sum, item) => sum + (item.seatsRequired || 0), 0);

    return {
      liveCount: featured.length,
      avgGoLiveDays: Math.round(totalGoLive / featured.length),
      totalSeats,
    };
  }, [featured]);

  return (
    <>
      <section className="pg-featured-shell relative mt-6 md:mt-8 lg:mt-10 overflow-hidden rounded-[1.8rem] border border-slate-200/90 bg-[linear-gradient(145deg,#f8fbff_0%,#eef4ff_48%,#ffffff_100%)] p-4 shadow-[0_18px_40px_rgba(15,23,42,0.11)] sm:p-6">
        <div className="pointer-events-none absolute -left-10 top-0 h-36 w-36 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.23)_0%,rgba(56,189,248,0)_72%)]" />
        <div className="pointer-events-none absolute -right-12 bottom-0 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(245,158,11,0.2)_0%,rgba(245,158,11,0)_70%)]" />

        <ScrollReveal variant="up">
          <div className="relative flex flex-wrap items-start justify-between gap-4">
            <div className="max-w-2xl">
              <span className="pg-featured-kicker inline-flex rounded-full border border-[rgba(30,61,133,0.2)] bg-[rgba(30,61,133,0.08)] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.1em] text-[var(--color-primary-dark)]">
                Available Projects
              </span>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-4xl">
                <span className="bg-gradient-to-r from-[#ef4444] via-[#f43f5e] to-[#fb7185] bg-clip-text text-transparent">
                  Global
                </span>{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary)] via-[#1d4ed8] to-[#60a5fa] bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="mt-2 text-sm text-slate-600 sm:text-base">
                Ready-to-start opportunities with verified clients, fast onboarding, and transparent activity updates.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <span className="pg-featured-stat inline-flex rounded-full border border-slate-300/90 bg-white/80 px-3 py-1 text-xs font-bold text-slate-700">
                Live: {stats.liveCount}
              </span>
              <span className="pg-featured-stat inline-flex rounded-full border border-slate-300/90 bg-white/80 px-3 py-1 text-xs font-bold text-slate-700">
                Avg Go-Live: {stats.avgGoLiveDays}d
              </span>
              <span className="pg-featured-stat inline-flex rounded-full border border-slate-300/90 bg-white/80 px-3 py-1 text-xs font-bold text-slate-700">
                Seats: {stats.totalSeats}
              </span>
              <Button as="a" href="#all-projects-board" variant="outline" size="sm" className="ml-1">
                View All
              </Button>
            </div>
          </div>
        </ScrollReveal>

        <div className="relative mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} variant="up" delay={80 + index * 70}>
              <article
                className="pg-featured-card pg-project-card group overflow-hidden rounded-2xl border border-slate-200/90 bg-white/95 shadow-[0_8px_18px_rgba(15,23,42,0.08)]"
                style={{ "--pg-card-index": index }}
              >
                <div className="pg-featured-card-topbar h-1.5 bg-[linear-gradient(90deg,var(--color-primary),#3b82f6,#f59e0b)]" />
                <div className="relative h-[190px]">
                  <Image
                    src={projectImages[project.image]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
                  <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/35 bg-slate-900/58 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Live Opportunity
                  </div>
                  <span className="pg-available-blink absolute right-3 top-3 rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                    Available
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="line-clamp-2 text-lg font-extrabold leading-tight text-slate-900">{project.title}</h3>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.09em] text-slate-500">
                    {project.code} | {project.clientCode}
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2.5">
                    <div className="rounded-xl border border-slate-200 bg-[linear-gradient(150deg,#f8fafc,#eef2f7)] px-3 py-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-500">Seats Required/Shift</p>
                      <p className="text-base font-black text-slate-800">{project.seatsRequired}</p>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-[linear-gradient(150deg,#f8fafc,#eef2f7)] px-3 py-2">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-500">Go Live</p>
                      <p className="text-base font-black text-slate-800">{project.goLiveDays} days</p>
                    </div>
                  </div>

                  <div className="mt-2.5 rounded-xl border border-slate-200 bg-[linear-gradient(150deg,#f8fafc,#eef2f7)] px-3 py-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.08em] text-slate-500">Refundable Security Deposit</p>
                    <p className="text-xs font-bold text-slate-700">{project.lastActivity}</p>
                  </div>

                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="text-xs font-bold text-slate-600">Country:</span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                      <span className="text-sm leading-none">{getFlagEmoji(project.countryFlag)}</span>
                      {project.country}
                    </span>
                  </div>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {project.channels.map((channel) => (
                      <span
                        key={channel}
                        className="pg-channel-chip inline-flex rounded-full border border-[rgba(30,61,133,0.24)] bg-[rgba(30,61,133,0.08)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--color-primary-dark)]"
                      >
                        {channel}
                      </span>
                    ))}
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="pg-featured-cta mt-4 w-full text-[0.98rem] font-bold"
                    onClick={() => {
                      setSelectedProjectId(project.id);
                      setOpen(true);
                    }}
                  >
                    Get Project Details
                  </Button>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <ProjectDetailFormModal
        key={`${selectedProjectId || "none"}-${open ? "open" : "closed"}-featured`}
        open={open}
        onClose={() => setOpen(false)}
        project={selectedProject}
      />
    </>
  );
};

export default ProjectsFeaturedTopSection;
