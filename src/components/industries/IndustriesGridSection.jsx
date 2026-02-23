import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const IndustriesGridSection = ({ industries }) => {
  return (
    <section className="mt-6">
      <ScrollReveal variant="up">
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.07),rgba(255,193,7,0.1))] px-6 py-4">
            <h2 className="text-2xl font-bold text-[var(--color-primary)]">Industries Supported</h2>
          </div>

          <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item, index) => (
              <ScrollReveal key={item.title} variant="up" delay={Math.min(index * 40, 220)}>
                <article
                  className={`group overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[rgba(15,23,42,0.28)] hover:shadow-[0_12px_22px_rgba(15,23,42,0.12)] ${
                    industries.length % 3 === 1 && index === industries.length - 1
                      ? "sm:col-span-2 lg:col-span-3"
                      : ""
                  }`}
                >
                  <div
                    className={`relative border-b border-slate-200 ${
                      industries.length % 3 === 1 && index === industries.length - 1
                        ? "h-36 lg:h-40"
                        : "h-32"
                    }`}
                  >
                    <img
                      src={item.image.src}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                  </div>

                  <div className="flex items-center gap-2 p-3.5">
                    <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full border border-slate-200 bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                      {index + 1}
                    </span>
                    <p className="text-sm font-semibold text-slate-800">{item.title}</p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default IndustriesGridSection;
