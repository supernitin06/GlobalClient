"use client";
import React from "react";
import Image from "next/image";
import ScrollReveal from "../ui/ScrollReveal";
import aboutImage from "../../assets/image/GP-43.jpg";

const AboutStory = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollReveal variant="left">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-100 aspect-[4/3] group">
              {aboutImage ? (
                <Image
                  src={aboutImage}
                  alt="Our Story"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-400">
                  Image Placeholder
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="right" delay={200}>
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-[var(--color-primary)]">
                Our Journey
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Building Bridges to Success
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Founded with a vision to bridge the gap between talent and
                opportunity, Projects Global started as a small initiative and
                has grown into a robust outsourcing partner for companies
                worldwide.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-slate-600">
                We believe in the power of human connection and technology. Our
                journey is defined by the success stories of our clients, whom
                we've helped navigate complex operational challenges with ease
                and efficiency.
              </p>
              <div className="mt-8 pt-8 border-t border-slate-100">
                <p className="text-base font-medium text-slate-900 italic">
                  "Our mission is to make outsourcing simple, transparent, and
                  effective for everyone."
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
