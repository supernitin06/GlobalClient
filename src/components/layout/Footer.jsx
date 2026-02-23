"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/image/logo/yello.png";
import { useTheme } from "next-themes";
import ReactCountryFlag from "react-country-flag";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaInfoCircle,
  FaEnvelope,
  FaPhone,
  FaArrowRight,
  FaShieldAlt,
  FaPaperPlane,
  FaBolt,
  FaGlobe,
  FaCheckCircle,
} from "react-icons/fa";

/* ─── Static data ───────────────────────────────────────── */
const socialLinks = [
  { Icon: FaInstagram, href: "#", label: "Instagram" },
  { Icon: FaFacebookF, href: "#", label: "Facebook" },
  { Icon: FaWhatsapp, href: "https://wa.me/919211532400", label: "WhatsApp" },
  { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
];

const offices = [
  { code: "IN", label: "Bhutani Alphathum, Tower C, Unit 1034, Noida, India" },
  { code: "US", label: "Palo Alto, CA, United States" },
  { code: "GB", label: "Manchester, United Kingdom" },
];

const projectLinks = [
  "Chat Support Process",
  "Inbound Call Center – Healthcare",
  "Call Center Services",
  "Inbound Call Center – Airlines",
];

const aboutLinks = [
  { label: "About Projects Global", href: "/about" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Disclaimer", href: "/disclaimer" },
  { label: "Compliance & Policies", href: "/compliance-policies" },
  { label: "Contact Us", href: "/contact" },
];

const contactRows = [
  { dept: "IVR", contact: "9211532400", type: "phone" },
  { dept: "Phone Support", contact: "+91-9211532100", type: "phone" },
  { dept: "General Info", contact: "info@projectsglobal.in", type: "email" },
  { dept: "Projects", contact: "contact@projectsglobal.in", type: "email" },
  { dept: "Billing", contact: "accounts@projectsglobal.in", type: "email" },
  { dept: "Technical", contact: "techsupport@projectsglobal.in", type: "email" },
  { dept: "NOC / Issues", contact: "noc@projectsglobal.in", type: "email" },
];

const nlPerks = [
  { icon: FaBolt, text: "Industry insights weekly" },
  { icon: FaGlobe, text: "Global outsourcing trends" },
  { icon: FaCheckCircle, text: "Exclusive partner offers" },
];

/* ─── Floating particle (pure CSS animation via inline style) ── */
function Particle({ style }) {
  return (
    <span
      className="absolute rounded-full pointer-events-none opacity-0"
      style={style}
    />
  );
}

/* ─── Column heading ─────────────────────────────────────── */
function ColHeading({ icon: Icon, children }) {
  return (
    <div className="flex items-center gap-2.5 mb-5">
      <span className="flex items-center justify-center w-7 h-7 rounded-lg text-[12px] bg-[#FFC107]/20 text-[#FFC107]">
        <Icon />
      </span>
      <h3 className="text-[12px] font-bold uppercase tracking-[0.14em] text-white/80">
        {children}
      </h3>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   NEWSLETTER BANNER
═══════════════════════════════════════════════════════════ */
function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  /* Intersection observer – slide in when visible */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1400);
  };

  /* Particle specs */
  const particles = [
    { width: 6, height: 6, top: "12%", left: "8%", bg: "#FFC107", animDuration: "5s", animDelay: "0s" },
    { width: 10, height: 10, top: "70%", left: "15%", bg: "#93c5fd", animDuration: "7s", animDelay: "1s" },
    { width: 5, height: 5, top: "30%", left: "28%", bg: "#ffffff", animDuration: "6s", animDelay: "0.5s" },
    { width: 8, height: 8, top: "60%", left: "60%", bg: "#FFC107", animDuration: "8s", animDelay: "2s" },
    { width: 6, height: 6, top: "20%", left: "75%", bg: "#93c5fd", animDuration: "5.5s", animDelay: "1.5s" },
    { width: 12, height: 12, top: "80%", left: "88%", bg: "#ffffff", animDuration: "9s", animDelay: "0.8s" },
    { width: 5, height: 5, top: "45%", left: "92%", bg: "#FFC107", animDuration: "6.5s", animDelay: "3s" },
    { width: 7, height: 7, top: "10%", left: "53%", bg: "#60a5fa", animDuration: "7.5s", animDelay: "0.3s" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0f1e45 0%, #1e3d85 45%, #162d68 78%, #0a1530 100%)",
      }}
    >
      {/* Animated particles */}
      {particles.map((p, i) => (
        <Particle
          key={i}
          style={{
            width: p.width,
            height: p.height,
            top: p.top,
            left: p.left,
            background: p.bg,
            animation: `nlFloat ${p.animDuration} ease-in-out ${p.animDelay} infinite`,
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Yellow glow orb left */}
      <div
        className="pointer-events-none absolute -top-24 -left-24 w-80 h-80 rounded-full opacity-20"
        style={{ background: "radial-gradient(circle, #FFC107 0%, transparent 70%)" }}
      />
      {/* Blue glow orb right */}
      <div
        className="pointer-events-none absolute -bottom-24 -right-12 w-72 h-72 rounded-full opacity-15"
        style={{ background: "radial-gradient(circle, #60a5fa 0%, transparent 70%)" }}
      />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-16">
        <div
          className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {/* Left — copy */}
          <div className="flex-1 text-center lg:text-left">
            <div
              className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 mb-4 text-[11px] font-bold uppercase tracking-[0.14em]"
              style={{
                background: "rgba(255,193,7,0.18)",
                border: "1px solid rgba(255,193,7,0.4)",
                color: "#FFC107",
              }}
            >
              <FaBolt size={10} />
              Stay Ahead of the Industry
            </div>

            <h2
              className="text-3xl sm:text-4xl font-extrabold leading-tight text-white"
              style={{ letterSpacing: "-0.01em" }}
            >
              Get Outsourcing Insights
              <br />
              <span
                style={{
                  backgroundImage: "linear-gradient(90deg, #FFC107 0%, #FFE082 50%, #FFC107 100%)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  color: "transparent",
                  animation: "nlShimmer 3s linear infinite",
                }}
              >
                Delivered to Your Inbox
              </span>
            </h2>

            <p className="mt-4 text-[15px] leading-7 max-w-md mx-auto lg:mx-0" style={{ color: "rgba(255,255,255,0.65)" }}>
              Join 2,000+ BPO leaders receiving exclusive industry reports,
              outsourcing strategies, and partner opportunities every week.
            </p>

            {/* Perks */}
            <div className="mt-6 flex flex-wrap justify-center lg:justify-start gap-4">
              {nlPerks.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-[13px]" style={{ color: "rgba(255,255,255,0.75)" }}>
                  <Icon size={12} style={{ color: "#FFC107", flexShrink: 0 }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div
            className="w-full lg:w-[420px] rounded-2xl p-6 sm:p-7"
            style={{
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.14)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 24px 48px rgba(0,0,0,0.28)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(40px)",
              transition: "opacity 0.75s 0.2s ease, transform 0.75s 0.2s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center py-6 gap-3 text-center">
                <FaCheckCircle size={40} style={{ color: "#4ade80" }} />
                <p className="text-white font-bold text-lg">You're in!</p>
                <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 13 }}>
                  Thank you for subscribing. Watch your inbox for the latest insights.
                </p>
              </div>
            ) : (
              <>
                <p className="text-white font-bold text-[16px] mb-1">Subscribe for Free</p>
                <p className="text-[12.5px] mb-5" style={{ color: "rgba(255,255,255,0.55)" }}>
                  No spam. Unsubscribe anytime.
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                  <div className="relative">
                    <FaEnvelope
                      size={13}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    />
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl pl-9 pr-4 py-3 text-[13.5px] text-white placeholder-white/35 outline-none focus:ring-2 transition"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.14)",
                      }}
                      onFocus={e => (e.target.style.borderColor = "rgba(255,193,7,0.6)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.14)")}
                    />
                  </div>

                  <div className="relative">
                    <FaEnvelope
                      size={13}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2"
                      style={{ color: "rgba(255,255,255,0.35)" }}
                    />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="Work email address"
                      required
                      className="w-full rounded-xl pl-9 pr-4 py-3 text-[13.5px] text-white placeholder-white/35 outline-none transition"
                      style={{
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.14)",
                      }}
                      onFocus={e => (e.target.style.borderColor = "rgba(255,193,7,0.6)")}
                      onBlur={e => (e.target.style.borderColor = "rgba(255,255,255,0.14)")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full flex items-center justify-center gap-2.5 rounded-xl py-3.5 text-[14px] font-bold transition-all duration-200 hover:brightness-110 hover:scale-[1.02] active:scale-[0.99] disabled:opacity-70"
                    style={{
                      background: "linear-gradient(135deg, #FFC107 0%, #f59e0b 100%)",
                      color: "#0f172a",
                      boxShadow: "0 8px 22px rgba(255,193,7,0.35)",
                    }}
                  >
                    {status === "loading" ? (
                      <>
                        <span
                          className="w-4 h-4 rounded-full border-2 border-[#0f172a]/30 border-t-[#0f172a] animate-spin"
                        />
                        Subscribing…
                      </>
                    ) : (
                      <>
                        <FaPaperPlane size={13} />
                        Subscribe Now
                      </>
                    )}
                  </button>
                </form>

                <p className="mt-4 text-center text-[11px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                  🔒 Your data is safe. We never share your information.
                </p>
              </>
            )}
          </div>
        </div>
      </div>

      {/* CSS keyframes via style tag */}
      <style>{`
        @keyframes nlFloat {
          0%,100% { transform:translateY(0) scale(1); opacity:0.18; }
          50%      { transform:translateY(-18px) scale(1.2); opacity:0.38; }
        }
        @keyframes nlShimmer {
          0%   { background-position: 0% center; }
          100% { background-position: 200% center; }
        }
      `}</style>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════ */
const Footer = () => {
  const year = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  /* Footer always uses primary navy palette regardless of page theme */
  return (
    <>
      {/* Newsletter banner — visible on every page (placed above footer) */}
      <NewsletterBanner />

      {/* ─────────────────────────────────────────────────────
          MAIN FOOTER  (primary brand navy palette)
      ───────────────────────────────────────────────────── */}
      <footer
        style={{
          background: isDark
            ? "linear-gradient(180deg, #152e72ff 0%, #06091a 100%)"
            : "linear-gradient(180deg, #0f1e45 0%, #1e3d85 60%, #162d68 100%)",
          color: "#ffffff",
        }}
        className="relative mt-7 overflow-hidden"
      >
        {/* Subtle grain texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "180px",
          }}
        />

        {/* Grid dots overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        {/* Gold glow top-right */}
        <div
          className="pointer-events-none absolute -top-20 right-0 w-80 h-80 rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, #FFC107 0%, transparent 65%)" }}
        />

        {/* ── MAIN GRID ── */}
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-5  pb-7">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.5fr] gap-10 lg:gap-8">

            {/* COL 1 · Brand */}
            <div className="space-y-7">
              <div>
                <Image src={logo} alt="Projects Global" className="h-9 w-auto object-contain" />
                <p className="mt-3 text-[13px] leading-6 max-w-[260px]" style={{ color: "rgba(255,255,255,0.55)" }}>
                  Premium BPO, outsourcing & call‑centre solutions delivered
                  across India, USA and the UK.
                </p>
              </div>

              {/* Social */}
              <div className="flex gap-2.5">
                {socialLinks.map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noreferrer"
                    className="group w-9 h-9 flex items-center justify-center rounded-xl transition-all duration-200 hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                      color: "rgba(255,255,255,0.55)",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(255,193,7,0.2)";
                      e.currentTarget.style.borderColor = "rgba(255,193,7,0.5)";
                      e.currentTarget.style.color = "#FFC107";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.08)";
                      e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)";
                      e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                    }}
                  >
                    <Icon size={13} />
                  </a>
                ))}
              </div>

              {/* Offices */}
              <div className="space-y-3">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.13em] flex items-center gap-1.5"
                  style={{ color: "#FFC107" }}
                >
                  <FaMapMarkerAlt size={10} /> Our Offices
                </p>
                {offices.map(({ code, label }) => (
                  <div
                    key={code}
                    className="flex gap-2.5 items-start text-[12.5px] leading-5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    <ReactCountryFlag
                      countryCode={code}
                      svg
                      style={{ width: "1.15em", marginTop: "2px", flexShrink: 0 }}
                    />
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* COL 2 · Project Categories */}
            <div>
              <ColHeading icon={FaProjectDiagram}>Project Categories</ColHeading>
              <ul className="space-y-2.5">
                {projectLinks.map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="group flex items-center gap-2 text-[13px] transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#FFC107")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      <FaArrowRight
                        size={9}
                        className="shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                        style={{ color: "#FFC107" }}
                      />
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 3 · About */}
            <div>
              <ColHeading icon={FaInfoCircle}>About</ColHeading>
              <ul className="space-y-2.5">
                {aboutLinks.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className="group flex items-center gap-2 text-[13px] transition-colors duration-150"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#FFC107")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
                    >
                      <FaArrowRight
                        size={9}
                        className="shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150"
                        style={{ color: "#FFC107" }}
                      />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* COL 4 · Support & Contact */}
            <div>
              <ColHeading icon={FaEnvelope}>Support & Contact</ColHeading>
              <div
                className="rounded-xl overflow-hidden text-[12px]"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.04)",
                }}
              >
                {/* Header */}
                <div
                  className="grid grid-cols-2 gap-2 px-3.5 py-2 font-semibold text-[11px] uppercase tracking-wider"
                  style={{
                    background: "rgba(255,193,7,0.12)",
                    borderBottom: "1px solid rgba(255,255,255,0.08)",
                    color: "#FFC107",
                  }}
                >
                  <span>Department</span>
                  <span>Contact</span>
                </div>

                {contactRows.map(({ dept, contact, type }, i) => (
                  <div
                    key={dept}
                    className="grid grid-cols-2 gap-2 px-3.5 py-2.5 items-center transition-colors duration-100"
                    style={{
                      borderBottom: i !== contactRows.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.04)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ color: "rgba(255,255,255,0.6)" }}>{dept}</span>
                    <span>
                      {type === "email" ? (
                        <a
                          href={`mailto:${contact}`}
                          className="flex items-center gap-1 truncate"
                          style={{ color: "#93c5fd" }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#60a5fa")}
                          onMouseLeave={e => (e.currentTarget.style.color = "#93c5fd")}
                        >
                          <FaEnvelope size={10} className="shrink-0" />
                          <span className="truncate">{contact}</span>
                        </a>
                      ) : (
                        <a
                          href={`tel:${contact}`}
                          className="flex items-center gap-1"
                          style={{ color: "#4ade80" }}
                          onMouseEnter={e => (e.currentTarget.style.color = "#86efac")}
                          onMouseLeave={e => (e.currentTarget.style.color = "#4ade80")}
                        >
                          <FaPhone size={9} className="shrink-0" />
                          {contact}
                        </a>
                      )}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div
            className="h-px w-full"
            style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.12) 30%, rgba(255,193,7,0.3) 50%, rgba(255,255,255,0.12) 70%, transparent)" }}
          />
        </div>

        {/* ── LICENCE STRIP ── */}
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px]">
            <div
              className="flex items-center gap-2 font-medium"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              <FaShieldAlt style={{ color: "#FFC107" }} size={12} />
              Projects Outsource Licence:&nbsp;
              <span className="font-semibold text-white">UTP/8357096IN</span>
            </div>

            <div
              className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              <span>
                CIN:&nbsp;
                <span className="font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>U78100DL2024PTC436257</span>
              </span>
              <span className="hidden sm:block w-px h-3.5 bg-white/15" />
              <span>
                CIN:&nbsp;
                <span className="font-semibold" style={{ color: "rgba(255,255,255,0.75)" }}>U97000DL2025PTC445774</span>
              </span>
            </div>
          </div>
        </div>

        {/* ── COPYRIGHT ── */}
        <div
          className="relative"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)", background: "rgba(0,0,0,0.22)" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-3.5 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11.5px]">
            <span style={{ color: "rgba(255,255,255,0.35)" }}>
              © {year} Projects Global. All rights reserved.
            </span>
            <div className="flex items-center gap-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms", href: "/terms-conditions" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map(({ label, href }, i, arr) => (
                <React.Fragment key={label}>
                  <Link
                    href={href}
                    className="transition-colors duration-150 hover:text-white"
                    style={{ color: "rgba(255,255,255,0.3)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#FFC107")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
                  >
                    {label}
                  </Link>
                  {i < arr.length - 1 && (
                    <span style={{ color: "rgba(255,255,255,0.15)", fontSize: 8 }}>●</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;