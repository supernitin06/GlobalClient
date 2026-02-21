import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const ServicesCardsSection = ({ services }) => {
  return (
    <section className="mt-6 grid gap-5 md:grid-cols-2">
      {services.map((service, index) => (
        <ScrollReveal key={service.title} variant="up" delay={Math.min(index * 50, 220)}>
          <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[rgba(15,23,42,0.28)] hover:shadow-[0_16px_28px_rgba(15,23,42,0.12)]">
            <div className="relative h-44 border-b border-slate-200">
              <img
                src={service.image.src}
                alt={service.title}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <p className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">
                Service Coverage Includes
              </p>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <ul className="mt-3 grid gap-2">
                {service.coverage.map((item, itemIndex) => (
                  <li key={item} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-700">
                    <span className="mt-0.5 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                      {itemIndex + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </ScrollReveal>
      ))}
    </section>
  );
};

export default ServicesCardsSection;
