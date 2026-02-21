import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const ProjectsEngagementSection = ({ engagementModels }) => {
  return (
    <ScrollReveal variant="up" delay={120}>
      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.07),rgba(255,193,7,0.1))] px-6 py-4">
          <h2 className="text-2xl font-bold">Engagement Models</h2>
        </div>
        <div className="grid gap-3 p-6 md:grid-cols-2">
          {engagementModels.map((item, index) => (
            <div key={item} className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 p-4 text-slate-700">
              <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                {index + 1}
              </span>
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ProjectsEngagementSection;
