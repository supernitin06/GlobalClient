'use client';

import React from "react";
import Link from "next/link";
import ScrollReveal from "../ui/ScrollReveal";
import Button from "../ui/Button";

import serviceImage from "../../assets/image/customer-service-concept-illustration.webp";
import aboutImage from "../../assets/image/call-center-2944063_1920.jpg";

const HomeAboutServicesSection = ({ services }) => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-14 grid items-stretch gap-6 lg:grid-cols-2">
      <ScrollReveal variant="up">
        <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(15,23,42,0.09),rgba(255,193,7,0.12))] px-7 py-5">
            <p className="text-xs font-bold uppercase tracking-wide text-slate-600">About Preview Section</p>
            <h2 className="mt-2 text-3xl font-bold text-slate-900">Who We Are</h2>
          </div>

          <div className="flex flex-1 flex-col justify-between p-7">
            <div>
              <div className="mb-5 overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-1.5 aspect-video flex items-center justify-center">
                {aboutImage ? (
                  <img
                    src={aboutImage.src}
                    alt="About Projects Global"
                    loading="lazy"
                    className="h-full w-full rounded-xl object-cover object-center"
                  />
                ) : (
                  <div className="text-slate-400 italic text-sm">About Image Placeholder</div>
                )}
              </div>
              <p className="text-slate-600 text-justify">
                Projects Global is a professional outsourcing solutions provider delivering scalable voice and non-voice support services to businesses across global markets. We specialize in enabling organizations to streamline operations, optimize customer engagement, and enhance service efficiency through structured, technology-driven outsourcing frameworks.

                Our core objective is to help businesses reduce operational overhead while maintaining high service quality standards. By leveraging trained agent networks, verified outsourcing centers, and robust compliance-driven processes, we ensure consistent performance, measurable outcomes, and long-term operational reliability.

                We provide comprehensive support solutions including inbound and outbound voice services, customer care, technical support, lead generation, back-office operations, data processing, email and chat support, and industry-specific process management. Each engagement model is customized to align with client goals, service-level agreements (SLAs), and performance benchmarks.

                Projects Global operates with a structured governance model that emphasizes:

                Strict compliance protocols

                Quality assurance and performance monitoring

                Data security and confidentiality standards

                Scalable workforce deployment

                Continuous training and skill enhancement

                Our verified outsourcing centers undergo rigorous evaluation processes to ensure infrastructure readiness, regulatory compliance, data protection alignment, and operational transparency. This allows us to confidently connect businesses with reliable support ecosystems that meet international standards.

                Through a combination of technology integration, process automation, and performance analytics, we enable clients to gain operational visibility while maintaining cost efficiency. Our scalable delivery model ensures flexibility—whether supporting startups, mid-sized enterprises, or large global organizations.

                By partnering with Projects Global, businesses gain access to:

                Reduced operational complexity

                Improved customer satisfaction metrics

                Faster turnaround times

                Flexible scaling capabilities

                Structured reporting and accountability

                We are committed to building long-term partnerships grounded in transparency, operational excellence, and measurable value delivery. Our mission is to serve as a trusted outsourcing partner that empowers organizations to focus on strategic growth while we manage and optimize their support operations with precision and reliability.
              </p>
              <p className="mt-4 text-slate-600">
                We help organisations reduce operational workload, improve customer satisfaction, and expand support
                capabilities through trained agent networks, verified outsourcing centers, and structured compliance
                processes.
              </p>
            </div>

            <Link href="/about" className="mt-8 inline-flex">
              <Button variant="outline" size="md">Learn More</Button>
            </Link>
          </div>
        </article>
      </ScrollReveal>

      <ScrollReveal variant="up" delay={120}>
        <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
          <div className="relative aspect-video bg-slate-100 flex items-center justify-center border-b border-slate-200">
            {serviceImage ? (
              <img
                src={serviceImage.src}
                alt="Our outsourcing services"
                loading="lazy"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="text-slate-400 italic text-sm">Service Image Placeholder</div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            <p className="absolute bottom-4 left-5 rounded-full bg-white/85 px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[var(--color-primary-dark)]">
              Services Preview Section
            </p>
          </div>

          <div className="flex flex-1 flex-col p-7">
            <h2 className="text-3xl font-bold text-slate-900">Our Outsourcing Services</h2>
            <div className="mt-4 grid flex-1 gap-2">
              {services.map((item, index) => (
                <div key={item} className="flex items-center rounded-lg border border-slate-200 bg-slate-50 px-3 py-2">
                  <span className="mr-2 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                    {index + 1}
                  </span>
                  <span className="text-sm text-slate-700">{item}</span>
                </div>
              ))}
            </div>
            <Link href="/services" className="mt-6 inline-flex">
              <Button variant="primary" size="md">View Services</Button>
            </Link>
          </div>
        </article>
      </ScrollReveal>
    </section>
  );
};

export default HomeAboutServicesSection;
