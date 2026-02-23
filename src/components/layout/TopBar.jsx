'use client';

import React from "react";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaClock, FaArrowRight, FaWhatsapp } from "react-icons/fa";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const pathname = usePathname();

  return (
    <div className="fixed inset-x-0 top-0 z-[110] border-b border-white/10 bg-[#0A1128] text-white/80 shadow-sm">
      <div className="pg-container flex h-10 items-center justify-between text-[11px] font-medium tracking-tight">

        {/* Contact Info */}
        <div className="hidden items-center gap-6 lg:flex">
          <div className="flex items-center gap-2 group cursor-pointer transition-colors hover:text-white">
            <FaPhoneAlt className="text-[#FFC107] text-[10px]" />
            <a href="tel:+919211532400">+91 92115 32400</a>
          </div>
          <div className="flex items-center gap-2 group cursor-pointer transition-colors hover:text-white">
            <FaEnvelope className="text-[#FFC107] text-[10px]" />
            <a href="mailto:info@projectsglobal.in">info@projectsglobal.in</a>
          </div>
        </div>

        {/* Right Side Links */}
        <div className="ml-auto flex items-center gap-5">
          <Link
            href="/requestproposal"
            className="flex items-center gap-2 text-[#FFC107] font-bold uppercase tracking-wider transition-all hover:gap-3 hover:brightness-110"
          >
            Partner With Us
            <FaArrowRight size={9} />
          </Link>

          <div className="hidden sm:block h-3 w-px bg-white/10" />

          <Link href="/about" className="hover:text-white transition-colors text-[10px]">Career</Link>

          {/* Attractive FAQ Button - Pure Yellow on Active */}
          <Link href="/faq">
            <span className={`px-4 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 ${pathname === "/faq"
              ? "bg-[#FFC107] text-[#0A1128] shadow-[0_6px_15px_rgba(255,193,7,0.4)] scale-110 border-transparent animate-blink"
              : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-[#FFC107]/50"
              }`}>
              FAQ
            </span>
          </Link>

          <Link href="/contact" className="hover:text-white transition-colors text-[10px]">Help Center</Link>
        </div>
      </div>
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-blink {
          animation: blink 1.5s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
};

export default TopBar;
