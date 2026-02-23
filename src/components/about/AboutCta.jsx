"use client";
import React from "react";
import Link from "next/link";
import Button from "../ui/Button";
import ScrollReveal from "../ui/ScrollReveal";

const AboutCta = () => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="zoom">
          <div className="relative overflow-hidden rounded-3xl bg-[linear-gradient(135deg,var(--color-primary-dark),var(--color-primary))] px-6 py-16 shadow-2xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to transform your business?
                <br />
                Start your journey with us today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-slate-100">
                Let's discuss how our tailored outsourcing solutions can help
                you achieve your operational goals.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Link href="/contact">
                  <Button
                    variant="primary"
                    size="lg"
                    className="bg-white text-[var(--color-primary-dark)] hover:bg-slate-100 border-transparent shadow-lg"
                  >
                    Get Started
                  </Button>
                </Link>
                <Link
                  href="/services"
                  className="text-sm font-semibold leading-6 text-white hover:text-slate-200 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutCta;
