"use client";
import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const values = [
  {
    title: "Integrity",
    desc: "We uphold the highest standards of honesty and transparency in all our dealings.",
  },
  {
    title: "Innovation",
    desc: "We constantly seek new and better ways to solve problems and deliver value.",
  },
  {
    title: "Excellence",
    desc: "We strive for perfection in every task, ensuring top-quality outcomes.",
  },
  {
    title: "Customer Focus",
    desc: "Your success is our priority. We align our goals with yours.",
  },
];

const AboutValues = () => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Core Values
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The principles that guide our decisions and actions every day.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, idx) => (
            <ScrollReveal
              key={val.title}
              variant="up"
              delay={idx * 100}
              className="h-full"
            >
              <div className="bg-white rounded-2xl p-8 shadow-[0_2px_10px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 h-full">
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {val.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {val.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
