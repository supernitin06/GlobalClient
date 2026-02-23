"use client";
import React from "react";
import ScrollReveal from "../ui/ScrollReveal";

const team = [
  { name: "Sarah Johnson", role: "CEO & Founder", initials: "SJ" },
  { name: "David Chen", role: "Head of Operations", initials: "DC" },
  { name: "Emily Davis", role: "Client Success Lead", initials: "ED" },
];

const AboutTeam = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Meet Our Leadership
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              The minds behind our global success.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, idx) => (
            <ScrollReveal key={member.name} variant="up" delay={idx * 100}>
              <div className="group relative overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 p-8 text-center hover:shadow-lg transition-all duration-300 hover:bg-white hover:border-[var(--color-primary)]/20">
                <div className="mx-auto h-24 w-24 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-2xl font-bold mb-4 shadow-md">
                  {member.initials}
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {member.name}
                </h3>
                <p className="text-sm text-[var(--color-primary)] font-medium mt-1">
                  {member.role}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutTeam;
