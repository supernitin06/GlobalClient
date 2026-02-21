import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const IndustriesIntroSection = () => {
  return (
    <ScrollReveal variant="up" delay={60}>
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_22px_rgba(15,23,42,0.06)]">
        <p className="text-slate-700">
          Projects Global provides professional outsourcing solutions across multiple industries. Our service delivery
          model is built to support businesses requiring customer support, sales operations, technical assistance, and
          back-office processing.
        </p>
      </section>
    </ScrollReveal>
  );
};

export default IndustriesIntroSection;
