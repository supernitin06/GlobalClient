"use client";
import React from "react";
import { useEffect, useState } from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import heroBanner from "../../assets/image/AboutHero1.jpg";

const sliderLines = [
  "Scalable Support Operations",
  "SLA-Led Delivery & Governance",
  "Trained Teams for Global Growth",
];

const AboutHero = () => {
  const [activeLine, setActiveLine] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveLine((prev) => (prev + 1) % sliderLines.length);
    }, 2600);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-slate-200 bg-slate-900 py-16 sm:py-18">
      <div className="absolute inset-0">
        <Image
          src={heroBanner}
          alt="Projects Global About"
          fill
          priority
          sizes="100vw"
          className="h-full w-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(2,6,23,0.74)_0%,rgba(2,6,23,0.58)_42%,rgba(2,6,23,0.56)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(59,130,246,0.22),transparent_42%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_72%,rgba(250,204,21,0.14),transparent_38%)]" />
      <div className="absolute inset-0 opacity-16 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center z-10">
        <ScrollReveal variant="up">
          <p className="inline-flex rounded-full border border-white/35 bg-white/12 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-white">
            About Projects Global
          </p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-[3.35rem]">
            Driving Global <span className="text-[#60a5fa]">Excellence</span>
          </h1>

          <div className="mx-auto mt-5 h-12 max-w-3xl overflow-hidden rounded-xl border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
            <div className="relative h-full">
              {sliderLines.map((line, index) => (
                <p
                  key={line}
                  className="absolute inset-0 flex items-center justify-center text-lg font-semibold text-[#bfdbfe] transition-all duration-500"
                  style={{
                    opacity: activeLine === index ? 1 : 0,
                    transform: `translateY(${activeLine === index ? "0" : "18px"})`,
                  }}
                >
                  {line}
                </p>
              ))}
            </div>
          </div>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Projects Global is a performance-focused outsourcing partner helping businesses scale customer support,
            sales, and back-office operations with trained teams, verified workflows, and measurable delivery.
          </p>
          <p className="mx-auto mt-3 max-w-3xl text-base leading-7 text-slate-300">
            From onboarding and process setup to quality monitoring and SLA governance, we build reliable operating
            models that improve consistency, reduce overhead, and support sustainable business growth.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutHero;
