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

const ProjectsFeaturedTopSection = ({ opportunities = [] }) => {
  const featured = opportunities.slice(0, 3);
  const [open, setOpen] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const selectedProject = opportunities.find((item) => item.id === selectedProjectId);

  return (
    <>
      <section className="mt-6 rounded-2xl border border-slate-200 bg-[linear-gradient(135deg,#ffffff,rgba(246,250,255,0.96))] p-4 shadow-[0_14px_34px_rgba(15,23,42,0.09)] sm:p-6">
        <ScrollReveal variant="up">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">Available Projects</p>
              <h2 className="mt-1 text-2xl font-extrabold">
                <span className="text-rose-500">Global</span>{" "}
                <span className="bg-gradient-to-r from-[var(--color-primary)] to-[#4f93ff] bg-clip-text text-transparent">
                  Projects
                </span>
              </h2>
              <p className="mt-1 text-sm text-slate-600">Get started with verified outsourcing opportunities today.</p>
            </div>
            <Button as="a" href="#all-projects-board" variant="outline" size="sm">
              View All
            </Button>
          </div>
        </ScrollReveal>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {featured.map((project, index) => (
            <ScrollReveal key={project.id} variant="up" delay={80 + index * 70}>
              <article className="pg-project-card overflow-hidden rounded-xl border border-slate-200 bg-white/95">
                <div className="relative h-[180px]">
                  <Image
                    src={projectImages[project.image]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
                  <span className="pg-available-blink absolute right-2 top-2 rounded bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">
                    AVAILABLE
                  </span>
                </div>

                <div className="p-3.5">
                  <h3 className="line-clamp-2 text-sm font-extrabold text-slate-900">{project.title}</h3>
                  <p className="mt-1 text-[11px] text-slate-500">
                    {project.code} | {project.clientCode}
                  </p>

                  <div className="mt-3 grid grid-cols-2 gap-2">
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5">
                      <p className="text-[10px] uppercase tracking-[0.08em] text-slate-500">Seats</p>
                      <p className="text-sm font-bold text-slate-800">{project.seatsRequired}</p>
                    </div>
                    <div className="rounded-lg border border-slate-200 bg-slate-50 px-2 py-1.5">
                      <p className="text-[10px] uppercase tracking-[0.08em] text-slate-500">Go Live</p>
                      <p className="text-sm font-bold text-slate-800">{project.goLiveDays} days</p>
                    </div>
                  </div>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-xs font-semibold text-slate-600">Country:</span>
                    <span className="inline-flex rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-xs font-semibold text-slate-700">
                      {project.country}
                    </span>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="mt-3 w-full"
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
