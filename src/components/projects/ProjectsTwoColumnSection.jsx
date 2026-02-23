import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const ProjectsTwoColumnSection = ({ campaignTypes, executionFramework }) => {
  return (
    <section className="mt-6 grid gap-6 md:grid-cols-2">
      <ScrollReveal variant="up">
        <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.07),rgba(255,193,7,0.1))] px-6 py-4">
            <h2 className="text-2xl font-bold">Campaign Types We Support</h2>
          </div>
          <ul className="pg-project-bullet-list grid gap-2 p-6">
            {campaignTypes.map((item) => (
              <li key={item} className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 pl-7 pr-3 py-2 text-sm text-slate-700">
                <span className="ml-1 inline-flex h-2 min-w-[0.5rem] rounded-full bg-[var(--color-primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={90}>
        <article className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.07),rgba(255,193,7,0.1))] px-6 py-4">
            <h2 className="text-2xl font-bold">Project Execution Framework</h2>
          </div>
          <ul className="pg-project-bullet-list grid gap-2 p-6">
            {executionFramework.map((item) => (
              <li key={item} className="flex items-center gap-2.5 rounded-lg border border-slate-200 bg-slate-50 pl-7 pr-3 py-2 text-sm text-slate-700">
                <span className="ml-1 inline-flex h-2 min-w-[0.5rem] rounded-full bg-[var(--color-primary)]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default ProjectsTwoColumnSection;
