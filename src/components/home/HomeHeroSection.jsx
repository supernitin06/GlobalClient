'use client';

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ui/ScrollReveal";
import Button from "@/components/ui/Button";

import heroImage1 from "../../assets/image/call-center-3614379_1920.jpg";
import heroImage2 from "../../assets/image/customer-service-concept-illustration.webp";
import heroImage3 from "../../assets/image/top-view-messy-office-workspace-with-tablet.jpg";
import heroImage4 from "../../assets/image/day-office-travel-agency.jpg";

const defaultChannels = [
  "Inbound Support",
  "Outbound Sales",
  "Chat Support",
  "Email Support",
  "Technical Support",
  "Back Office Operations",
];

const heroHeadingWords = [
  "Global",
  "Outsourcing",
  "Solutions",
  "for",
  "Customer",
  "Support",
  "&",
  "Sales",
];

const heroTaglineChunks = [
  "Scale your business with reliable call center outsourcing,",
  "trained agents,",
  "and SLA-driven performance.",
];

const heroSlides = [
  {
    image: heroImage1,
    tag: "Global Delivery",
  },
  {
    image: heroImage2,
    tag: "Customer Experience",
  },
  {
    image: heroImage3,
    tag: "Data-Led Operations",
  },
  {
    image: heroImage4,
    tag: "Scale & Performance",
  },
];

const HomeHeroSection = ({
  supportChannels = defaultChannels,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isHeroPop, setIsHeroPop] = useState(false);
  const heroPopTimerRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5200);

    return () => {
      clearInterval(timer);
      if (heroPopTimerRef.current) {
        window.clearTimeout(heroPopTimerRef.current);
      }
    };
  }, []);

  const onHeroPop = () => {
    setIsHeroPop(true);
    if (heroPopTimerRef.current) {
      window.clearTimeout(heroPopTimerRef.current);
    }
    heroPopTimerRef.current = window.setTimeout(() => setIsHeroPop(false), 520);
  };

  return (
    <section
      className={`pg-hero-premium relative overflow-hidden border-b border-slate-200 bg-white py-6 md:py-7 lg:py-7 ${isHeroPop ? "is-3d-pop" : ""}`}
      onClick={onHeroPop}
    >
      <div className="pg-hero-bg-track absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.tag}
            className={`pg-hero-bg-slide ${activeSlide === index ? "is-active" : ""}`}
          >
            <img
              src={slide.image.src}
              alt={slide.tag}
              loading={index === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(95deg,rgba(2,6,23,0.76)_0%,rgba(2,6,23,0.64)_40%,rgba(2,6,23,0.46)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_35%,rgba(59,130,246,0.34),transparent_44%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_72%,rgba(250,204,21,0.22),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(112deg,rgba(15,23,42,0.11),transparent_32%,rgba(255,193,7,0.1))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_8%,rgba(15,23,42,0.12),transparent_32%)]" />
      <div className="absolute -left-24 top-14 h-72 w-72 rounded-full bg-[rgba(15,23,42,0.2)] blur-3xl" />
      <div className="absolute -right-24 bottom-4 h-80 w-80 rounded-full bg-[rgba(255,193,7,0.16)] blur-3xl" />

      <div className="pg-hero-content-wrap relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-5 lg:grid-cols-1">
          <ScrollReveal variant="left">
            <div className="max-w-4xl">
              <p className="pg-hero-kicker inline-flex items-center rounded-full border border-white/35 bg-white/14 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-white">
                Trusted Outsourcing Partner
              </p>

              <h1 className="pg-hero-heading mt-4 max-w-3xl text-3xl font-extrabold leading-[1.04] sm:text-[2.65rem] lg:text-[3.1rem]">
                {heroHeadingWords.map((word, index) => (
                  <span
                    key={`${word}-${index}`}
                    className="pg-hero-word"
                    style={{ "--word-index": index }}
                  >
                    {word}
                  </span>
                ))}
              </h1>

              <p className="mt-3.5 max-w-2xl text-base leading-relaxed text-slate-100 sm:text-[1.05rem]">
                {heroTaglineChunks.map((chunk, index) => (
                  <span
                    key={chunk}
                    className="pg-hero-subline"
                    style={{ "--subline-index": index }}
                  >
                    {chunk}
                  </span>
                ))}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="pg-hero-chip rounded-full border border-white/35 bg-white/14 px-3.5 py-1.5 text-xs font-semibold text-white" style={{ "--chip-index": 0 }}>SLA-Driven Delivery</span>
                <span className="pg-hero-chip rounded-full border border-white/35 bg-white/14 px-3.5 py-1.5 text-xs font-semibold text-white" style={{ "--chip-index": 1 }}>Verified Partner Centers</span>
                <span className="pg-hero-chip rounded-full border border-white/35 bg-white/14 px-3.5 py-1.5 text-xs font-semibold text-white" style={{ "--chip-index": 2 }}>Rapid Go-Live Support</span>
              </div>

              <p className="mt-4 text-sm font-semibold text-white">Support Channels:</p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {supportChannels.map((channel, index) => (
                  <span
                    key={channel}
                    className="pg-hero-channel rounded-full border border-white/30 bg-white/12 px-3 py-1.5 text-xs font-medium text-white shadow-sm transition hover:-translate-y-0.5 hover:border-white/50"
                    style={{ "--channel-index": index }}
                  >
                    <span className="h-1 w-1 rounded-full bg-[var(--color-primary)]" />
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/requestproposal">
                  <Button
                    variant="primary"
                    size="lg"
                    iconRight={
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    }
                  >
                    Request a Proposal
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="secondary" size="lg">
                    Schedule a Consultation
                  </Button>
                </Link>
              </div>

              <div className="mt-4 flex items-center gap-2.5">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.tag}
                    type="button"
                    aria-label={`Show ${slide.tag} slide`}
                    onClick={() => setActiveSlide(index)}
                    className={`pg-hero-dot ${activeSlide === index ? "is-active" : ""}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HomeHeroSection;
