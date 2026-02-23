"use client";
import React from "react";
import AboutHero from "./AboutHero";
import AboutStory from "./AboutStory";
import AboutValues from "./AboutValues";
import AboutTeam from "./AboutTeam";
import AboutCta from "./AboutCta";

const AboutMain = () => {
  return (
    <div className="bg-white">
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTeam />
      <AboutCta />
    </div>
  );
};

export default AboutMain;
