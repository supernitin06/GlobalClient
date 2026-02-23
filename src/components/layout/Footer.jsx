"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/image/logo/yello.png";
import { useAppContext } from "@/context/AppContext";

import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const { state } = useAppContext();

  const isDark = state.theme === "dark";
  const textSecondary = isDark ? "text-gray-300" : "text-gray-600";
  const borderColor = isDark ? "border-white/10" : "border-gray-200";

  return (
    <footer
      className={`transition-all duration-300 ${
        isDark ? "bg-[#0b1220] text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* ================= MAIN GRID ================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* ================= COLUMN 1 ================= */}
        <div className="space-y-3">
          <Image src={logo} alt="logo" className="h-8 w-auto" />

          <p className={`text-xs leading-relaxed ${textSecondary}`}>
            Global Projects provides professional outsourcing and customer support solutions worldwide.
          </p>

          {/* CONTACT */}
          <div className={`space-y-1.5 text-xs ${textSecondary}`}>
            <a href="tel:+919211532100" className="flex items-center gap-2 hover:text-blue-500 transition">
              <FaPhoneAlt size={12} /> +91-9211532100
            </a>
            <a href="mailto:info@projectsglobal.in" className="flex items-center gap-2 hover:text-blue-500 transition">
              <FaEnvelope size={12} /> info@projectsglobal.in
            </a>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt size={12} className="mt-0.5" />
              Noida, India | USA | UK
            </p>
          </div>

          {/* HOURS */}
          <p className="text-[11px] opacity-70">
            Mon - Sat: 10:00 AM - 7:00 PM
          </p>

          {/* SOCIAL */}
          <div className="flex gap-2 pt-1">
            {[FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110
                  ${
                    isDark
                      ? "bg-white/10 hover:bg-blue-500"
                      : "bg-gray-100 hover:bg-blue-500 text-gray-700 hover:text-white"
                  }`}
                >
                  <Icon size={13} />
                </div>
              )
            )}
          </div>
        </div>

        {/* ================= COLUMN 2 ================= */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Services</h3>
          <ul className={`space-y-2 text-xs ${textSecondary}`}>
            {[
              "Inbound Customer Support",
              "Outbound Sales & Lead Generation",
              "Live Chat Support",
              "Email Support",
              "Technical Support (L1/L2)",
              "Back Office Operations",
            ].map((item, i) => (
              <li key={i} className="hover:text-blue-500 cursor-pointer transition">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* ================= COLUMN 3 ================= */}
        <div>
          <h3 className="font-semibold text-sm mb-3">Quick Links</h3>
          <ul className={`space-y-2 text-xs ${textSecondary}`}>
            <li><Link href="/about" className="hover:text-blue-500 transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-blue-500 transition">Services</Link></li>
            <li><Link href="/partner" className="hover:text-blue-500 transition">Partner With Us</Link></li>
            <li><Link href="/rfp" className="hover:text-blue-500 transition">RFP</Link></li>
            <li><Link href="/contact" className="hover:text-blue-500 transition">Contact Us</Link></li>
          </ul>
        </div>

        {/* ================= COLUMN 4 ================= */}
        <div className="space-y-4">
          <h3 className="font-semibold text-sm">Stay Updated</h3>

          {/* NEWSLETTER */}
          <div className="flex overflow-hidden rounded-md shadow-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className={`w-full px-3 py-1.5 text-xs outline-none ${
                isDark ? "bg-white/10 border border-white/20 text-white placeholder:text-gray-400" : "bg-white border border-gray-200"
              }`}
            />
            <button className="bg-blue-600 text-white px-3 text-xs hover:bg-blue-700 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>

          {/* WHATSAPP BUTTON */}
          <a
            href="https://wa.me/919211532100"
            target="_blank"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-1.5 rounded-md text-xs transition"
          >
            <FaWhatsapp size={13} /> WhatsApp Support
          </a>

          {/* SUPPORT & CONTACT */}
          <div className={`pt-3 border-t ${borderColor}`}>
            <h4 className="font-semibold text-xs mb-2">Support & Contact</h4>

            <div className={`grid grid-cols-2 text-[11px] gap-y-1 ${textSecondary}`}>
              <span>IVR</span><span>9211532400</span>
              <span>Phone</span><span>+91-9211532100</span>
              <span>Email</span><span>info@projectsglobal.in</span>
              <span>Project</span><span>contact@projectsglobal.in</span>
              <span>Billing</span><span>accounts@projectsglobal.in</span>
              <span>Technical</span><span>techsupport@projectsglobal.in</span>
              <span>Issues</span><span>noc@projectsglobal.in</span>
            </div>
          </div>
        </div>
      </div>

      {/* ================= DISCLAIMER ================= */}
      <div className={`text-[11px] px-4 py-3 text-center border-t ${borderColor} ${textSecondary}`}>
        <p className="max-w-5xl mx-auto leading-relaxed">
          Projects Global provides outsourcing and support services subject to contractual agreements.
          Information on this website is for general purposes only and does not constitute a binding offer
          or guarantee of performance.
        </p>
      </div>

      {/* ================= LEGAL LINKS ================= */}
      <div className={`text-[11px] text-center pb-2 ${textSecondary}`}>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/privacy-policy" className="hover:text-blue-500 transition">Privacy Policy</Link>
          <Link href="/terms-conditions" className="hover:text-blue-500 transition">Terms & Conditions</Link>
          <Link href="/cookie-policy" className="hover:text-blue-500 transition">Cookie Policy</Link>
          <Link href="/disclaimer" className="hover:text-blue-500 transition">Disclaimer</Link>
          <Link href="/compliance-policies" className="hover:text-blue-500 transition">Compliance & Policies</Link>
        </div>
      </div>

      {/* ================= COPYRIGHT ================= */}
      <div className={`border-t text-center py-2 text-[11px] ${borderColor} text-gray-500`}>
        © {year} Projects Global. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;