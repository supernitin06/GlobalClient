import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";

const ServicesCardsSection = ({ services }) => {
  return (
    <section className="mt-6 grid gap-5 md:grid-cols-2">
      {services.map((service, index) => (
        <ScrollReveal key={service.title} variant="up" delay={Math.min(index * 50, 220)}>
          <article className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_10px_22px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:border-[rgba(15,23,42,0.28)] hover:shadow-[0_16px_28px_rgba(15,23,42,0.12)]">
            <div className="relative h-44 border-b border-slate-200">
              <Image
                src={service.image}
                alt={service.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
              <p className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">
                Service Coverage Includes
              </p>
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <ul className="pg-service-coverage-list mt-3 grid gap-2.5">
                {service.coverage.map((item) => (
                  <li
                    key={item}
                    className="group/item flex items-start gap-2.5 rounded-xl border border-slate-200 bg-[linear-gradient(145deg,rgba(255,255,255,0.96),rgba(241,245,249,0.9))] pl-5 pr-3.5 py-2.5 text-sm font-medium text-slate-700 transition hover:border-[rgba(30,61,133,0.28)] hover:shadow-[0_10px_18px_rgba(15,23,42,0.08)]"
                  >
                    <span className="mt-1 inline-flex h-2 min-w-[0.5rem] rounded-full bg-[linear-gradient(135deg,#1e3d85,#3b82f6)] shadow-[0_0_0_3px_rgba(30,61,133,0.14)] transition group-hover/item:scale-110" />
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
