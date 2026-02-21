import React from "react";
import AboutIntroSection from "@/components/about/AboutIntroSection";
import AboutMissionVisionSection from "@/components/about/AboutMissionVisionSection";
import AboutContentSections from "@/components/about/AboutContentSections";
import AboutClosingCtaSection from "@/components/about/AboutClosingCtaSection";
import {
  aboutIntro,
  approach,
  compliance,
  industries,
  missionVision,
  whatWeDo,
  whyProjectsGlobal,
} from "@/components/about/aboutData";

const boxClass = "rounded-2xl border border-slate-200 bg-white p-5";

const About = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-8 h-64 w-64 rounded-full bg-[rgba(15,23,42,0.12)] blur-3xl" />
      <div className="pointer-events-none absolute -right-20 top-44 h-72 w-72 rounded-full bg-[rgba(255,193,7,0.12)] blur-3xl" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <AboutIntroSection intro={aboutIntro} boxClass={boxClass} />
        <AboutMissionVisionSection missionVision={missionVision} boxClass={boxClass} />
        <AboutContentSections
          boxClass={boxClass}
          whatWeDo={whatWeDo}
          whyProjectsGlobal={whyProjectsGlobal}
          approach={approach}
          compliance={compliance}
          industries={industries}
        />
        <AboutClosingCtaSection boxClass={boxClass} />
      </div>
    </div>
  );
};

export default About;
