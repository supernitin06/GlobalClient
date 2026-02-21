'use client';

import React from "react";

const ScrollReveal = ({ children, variant = "up", delay = 0, className = "" }) => {
  // Map variant to AOS animation names
  const aosAnimations = {
    up: "fade-up",
    down: "fade-down",
    left: "fade-right", // Matching previous direction logic
    right: "fade-left",
    zoom: "zoom-in",
    fade: "fade",
  };

  const animation = aosAnimations[variant] || "fade-up";

  return (
    <div
      data-aos={animation}
      data-aos-delay={delay}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
