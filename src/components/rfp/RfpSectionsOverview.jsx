import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const RfpSectionsOverview = ({ sections }) => {
  return (
    <ScrollReveal variant="up" delay={60}>
      <section className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
        <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.07),rgba(255,193,7,0.1))] px-6 py-4">
          <h2 className="text-2xl font-bold">Form Sections</h2>
        </div>

        <div className="grid gap-6 p-6 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="grid gap-3 md:grid-cols-2">
            {sections.map((item, index) => (
              <article
                key={item}
                className="group flex items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm text-slate-700 transition hover:-translate-y-0.5 hover:border-[rgba(13,110,253,0.28)] hover:bg-white"
              >
                <span className="mt-0.5 inline-flex h-6 min-w-[1.5rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                  {index + 1}
                </span>
                <span className="font-medium">{item}</span>
              </article>
            ))}
          </div>

          <aside className="rounded-2xl border border-slate-200 bg-[linear-gradient(130deg,rgba(13,110,253,0.08),rgba(255,193,7,0.14))] p-5">
            <p className="text-xs font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">Response Timeline</p>
            <p className="mt-2 text-xl font-bold">24-48 Business Hours</p>
            <p className="mt-3 text-sm text-slate-700">
              Share clear project details to receive a faster and more accurate outsourcing proposal.
            </p>

            <div className="mt-4 grid gap-2">
              <div className="rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700">
                Scope & Channel Review
              </div>
              <div className="rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700">
                SLA & Resource Planning
              </div>
              <div className="rounded-lg border border-slate-200 bg-white/90 px-3 py-2 text-xs font-semibold text-slate-700">
                Custom Proposal Submission
              </div>
            </div>
          </aside>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default RfpSectionsOverview;
