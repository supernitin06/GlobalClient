"use client";

import React, { useEffect, useState } from "react";
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
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaProjectDiagram,
  FaInfoCircle,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <footer
      className={`transition-all duration-300 ${
        isDark
          ? "bg-[#0b1220] text-white"
          : "bg-white text-gray-800"
      }`}
    >
      {/* MAIN GRID */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* LEFT */}
        <div className="space-y-4">
          <Image src={logo} alt="logo" className="h-10 w-auto" />

          {/* SOCIAL */}
          <div className="flex gap-3">
            {[FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn].map(
              (Icon, i) => (
                <div
                  key={i}
                  className={`w-9 h-9 flex items-center justify-center rounded-full cursor-pointer transition duration-300 hover:scale-110
                  ${
                    isDark
                      ? "bg-white/10 hover:bg-gradient-to-r from-blue-500 to-purple-500"
                      : "bg-gray-200 hover:bg-gradient-to-r from-blue-500 to-purple-500 text-gray-700 hover:text-white"
                  }`}
                >
                  <Icon size={14} />
                </div>
              )
            )}
          </div>

          {/* ADDRESSES */}
          <div className="space-y-3 text-xs">
            <h3 className="font-semibold text-sm flex items-center gap-2">
              <FaMapMarkerAlt /> Our Offices
            </h3>

            <p className={`flex gap-2 items-start ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              <ReactCountryFlag countryCode="IN" svg style={{ width: "1.2em" }} />
              Bhutani Alphathum, Tower C, Unit 1034, Noida, India
            </p>

            <p className={`flex gap-2 items-start ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              <ReactCountryFlag countryCode="US" svg style={{ width: "1.2em" }} />
              Palo Alto, CA, United States
            </p>

            <p className={`flex gap-2 items-start ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              <ReactCountryFlag countryCode="GB" svg style={{ width: "1.2em" }} />
              Manchester, United Kingdom
            </p>
          </div>
        </div>

        {/* PROJECT */}
        <div>
          <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
            <FaProjectDiagram /> Project Categories
          </h3>

          <ul className={`text-xs space-y-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            <li>Chat Support Process</li>
            <li>Inbound Call Center Project (Healthcare)</li>
            <li>Call Center Services</li>
            <li>Inbound Call Center Airlines (International)</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
            <FaInfoCircle /> About
          </h3>

          <ul className={`text-xs space-y-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            <li><Link href="#">About Global Projects</Link></li>
            <li><Link href="#">Terms & Conditions</Link></li>
            <li><Link href="#">Explore Work</Link></li>
            <li><Link href="#">Backend Projects</Link></li>
            <li><Link href="#">Contact Us</Link></li>
          </ul>
        </div>

        {/* SUPPORT */}
        <div>
          <h3 className="font-semibold text-sm mb-4 flex items-center gap-2">
            <FaEnvelope /> Support & Contact
          </h3>

          <div className="text-xs space-y-2">
            <div className={`grid grid-cols-2 font-semibold border-b pb-1 ${
              isDark ? "border-white/10" : "border-gray-300"
            }`}>
              <span>Department</span>
              <span>Contact</span>
            </div>

            <div className={`grid grid-cols-2 gap-2 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
              <span>IVR</span>
              <span className="flex items-center gap-1">9211532400</span>

              <span>Phone Support</span>
              <span className="flex items-center gap-1">+91-9211532100</span>

              <span>General Info</span>
              <span className="flex items-center gap-1"> info@projectsglobal.in</span>

              <span>Project</span>
              <span className="flex items-center gap-1"> contact@projectsglobal.in</span>

              <span>Billing</span>
              <span className="flex items-center gap-1"> accounts@projectsglobal.in</span>

              <span>Technical</span>
              <span className="flex items-center gap-1"> techsupport@projectsglobal.in</span>

              <span>Issues</span>
              <span className="flex items-center gap-1"> noc@projectsglobal.in</span>
            </div>
          </div>
        </div>

      </div>

      {/* LICENSE */}
     <div
  className={`border-t text-center py-2 text-xs ${
    isDark
      ? "border-white/10 text-gray-300"
      : "border-gray-300 text-gray-600"
  }`}
>
  <p className="font-medium mb-2">
    Projects Outsource Licence : UTP/8357096IN
  </p>

  <div
    className={`inline-flex flex-wrap items-center justify-center gap-3 px-4 py-2 rounded-lg border ${
      isDark
        ? "border-white/20 bg-white/5 text-white"
        : "border-gray-300 bg-white text-gray-700"
    }`}
  >
    <span className="font-medium">
      CIN: U78100DL2024PTC436257
    </span>

    <span className="w-px h-4 bg-gray-400/40"></span>

    <span className="font-medium">
      CIN: U97000DL2025PTC445774
    </span>
  </div>
</div>

      {/* COPYRIGHT */}
      <div className={`border-t text-center py-3 text-[11px] ${
        isDark ? "border-white/10 text-gray-400" : "border-gray-300 text-gray-500"
      }`}>
        © {year} Projects Global. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;