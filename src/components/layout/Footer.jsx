'use client';

import React from "react";
import Link from "next/link";
import logo from "../../assets/image/logo/yello.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 text-white bg-[#0a2540] dark:bg-gradient-to-br dark:from-[#0a2540] dark:via-[#0d1b2a] dark:to-[#020617]">

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Company */}
        <div>
          <div className="flex items-center gap-3">
            <img src={logo.src} alt="logo" className="h-10" />
          </div>

          <p className="mt-4 text-sm text-gray-300 leading-6">
            Delivering global outsourcing solutions with excellence and trust.
          </p>

          <p className="mt-4 text-xs text-gray-400">
            Projects Outsource Licence: UTP/8357096IN
          </p>

          <p className="text-xs text-gray-400 mt-1">
            CIN: U78100DL2024PTC436257
          </p>
          <p className="text-xs text-gray-400">
            CIN: U97000DL2025PTC445774
          </p>
        </div>

        {/* Project Categories */}
        <div>
          <h4 className="text-lg font-semibold mb-4 !text-yellow-400 dark:!text-blue-400 !bg-none !bg-clip-border tracking-wide">
            Project Categories
          </h4>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li className="hover:text-yellow-400 transition">Chat Support Process</li>
            <li className="hover:text-yellow-400 transition">Inbound Call Center Project</li>
            <li className="hover:text-yellow-400 transition">(Healthcare Support Process)</li>
            <li className="hover:text-yellow-400 transition">Call Center Services</li>
            <li className="hover:text-yellow-400 transition">Inbound Airlines Projects</li>
            <li className="hover:text-yellow-400 transition">Backend Projects</li>
          </ul>
        </div>

        {/* Links + Emails */}
        <div>
          <h4 className="text-lg font-semibold mb-4 !text-yellow-400 dark:!text-blue-400 !bg-none !bg-clip-border tracking-wide">
            Quick Links
          </h4>

          <ul className="space-y-2 text-gray-300 text-sm">
            <li>
              <Link href="/about" className="hover:text-yellow-400 transition">
                About Global Projects
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="hover:text-yellow-400 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-yellow-400 transition">
                Contact Us
              </Link>
            </li>
          </ul>

          {/* Emails */}
          <h4 className="text-lg font-semibold mt-6 mb-3 !text-yellow-400 dark:!text-blue-400 !bg-none !bg-clip-border tracking-wide">
            Support Emails
          </h4>

          <ul className="space-y-1 text-gray-300 text-sm">
            <li>info@projectsglobal.in</li>
            <li>contact@projectsglobal.in</li>
            <li>accounts@projectsglobal.in</li>
            <li>techsupport@projectsglobal.in</li>
            <li>noc@projectsglobal.in</li>
            <li>support@projectsglobal.in</li>
          </ul>
        </div>

        {/* Contact + Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4 !text-yellow-400 dark:!text-blue-400 !bg-none !bg-clip-border tracking-wide">
            Contact
          </h4>

          <div className="text-gray-300 text-sm space-y-1">
            <p>📞 IVR: 9211532400</p>
            <p>📞 Phone: +91-9211532100</p>
          </div>

          <h4 className="text-lg font-semibold mt-6 mb-3 !text-yellow-400 dark:!text-blue-400 !bg-none !bg-clip-border tracking-wide">
            Addresses
          </h4>

          <div className="text-gray-300 text-sm space-y-2">
            <p>🇮🇳 Bhutani Alphathum, Tower C, Sector 90, Noida - 201305</p>
            <p>🇺🇸 530/B Lytton Ave, Palo Alto, CA 94301</p>
            <p>🇬🇧 25 Lever St, Manchester M1 1EA</p>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col lg:flex-row items-center justify-between gap-4">

          <div className="flex items-center gap-3">
            <img src={logo.src} alt="logo" className="h-8" />
            <p className="text-gray-400 text-sm">
              © {year} Global Projects | A Unit of BITMAX Group
            </p>
          </div>

          <p className="text-gray-400 text-sm text-center lg:text-right">
            All Rights Reserved.
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;