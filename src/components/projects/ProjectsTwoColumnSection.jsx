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
          <ul className="grid gap-2 p-6">
            {campaignTypes.map((item, index) => (
              <li key={item} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                  {index + 1}
                </span>
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
          <ul className="grid gap-2 p-6">
            {executionFramework.map((item, index) => (
              <li key={item} className="flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                  {index + 1}
                </span>
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
