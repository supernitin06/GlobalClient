"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppWidget = () => {
    return (
        <div className="fixed bottom-8 left-8 z-[120]">
            <motion.a
                href="https://wa.me/919211532400"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{
                    scale: 1.15,
                    rotate: 8,
                    boxShadow: "0 25px 50px -12px rgba(37, 211, 102, 0.5)"
                }}
                whileTap={{ scale: 0.9 }}
                className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_15px_30px_rgba(37,211,102,0.4)] transition-all duration-300 group"
            >
                {/* Continuous Pulse Waves */}
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 scale-125 pointer-events-none" />
                <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-10 scale-150 pointer-events-none" style={{ animationDelay: '0.5s' }} />

                {/* Floating Tooltip */}
                <div className="absolute left-full ml-4 whitespace-nowrap rounded-xl bg-[#0A1128] px-4 py-2 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                    Contact us on WhatsApp
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 border-8 border-transparent border-r-[#0A1128]" />
                </div>

                <FaWhatsapp size={32} className="relative z-10 transition-transform text-white duration-500 group-hover:rotate-12" />

                {/* Active Badge */}
                <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-[#25D366]">
                    <span className="h-2 w-2 rounded-full bg-[#25D366] animate-pulse" />
                </span>
            </motion.a>
        </div>
    );
};

export default WhatsAppWidget;
