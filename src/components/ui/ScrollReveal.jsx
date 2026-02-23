'use client';

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ScrollReveal = ({ children, variant = "up", delay = 0, duration = 1, className = "" }) => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const el = containerRef.current;

    // Initial states
    const variants = {
      up: { y: 60, opacity: 0 },
      down: { y: -60, opacity: 0 },
      left: { x: -60, opacity: 0 },
      right: { x: 60, opacity: 0 },
      zoom: { scale: 0.8, opacity: 0 },
      fade: { opacity: 0 },
    };

    const startState = variants[variant] || variants.up;

    gsap.from(el, {
      ...startState,
      duration: duration,
      delay: delay / 1000, // converting ms to s
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
