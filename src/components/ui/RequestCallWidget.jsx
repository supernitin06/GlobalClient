"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneVolume } from "react-icons/fa";
import Link from "next/link";

const RequestCallWidget = () => {
    const [constraints, setConstraints] = React.useState({ left: 0, right: 0, top: 0, bottom: 0 });

    React.useEffect(() => {
        setConstraints({
            left: -window.innerWidth + 100,
            right: 0,
            top: -window.innerHeight + 100,
            bottom: 0
        });
    }, []);

    return (
        <div className="fixed bottom-8 right-8 z-[120]">
            <Link href="/contact">
                <motion.div
                    drag
                    dragConstraints={constraints}
                    dragElastic={0.1}
                    whileDrag={{ scale: 1.1, cursor: "grabbing" }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    whileHover={{
                        scale: 1.15,
                        rotate: -8,
                        boxShadow: "0 25px 50px -12px rgba(255, 193, 7, 0.5)"
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#FFC107] text-[#0A1128] shadow-[0_15px_30px_rgba(255,193,7,0.4)] transition-all duration-300 group cursor-grab active:cursor-grabbing"
                >
                    {/* Continuous Blinking/Pulse Effect */}
                    <span className="absolute inset-0 rounded-full bg-[#FFC107] animate-ping opacity-30 scale-125 pointer-events-none" />
                    <span className="absolute inset-0 rounded-full bg-[#FFC107] animate-pulse opacity-20 scale-150 pointer-events-none" />

                    {/* Floating Tooltip */}
                    <div className="absolute right-full mr-4 whitespace-nowrap rounded-xl bg-[#0A1128] px-4 py-2 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none">
                        Request a Call (Drag Me!)
                        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 border-8 border-transparent border-l-[#0A1128]" />
                    </div>

                    {/* Icon with blink animation */}
                    <motion.div
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="relative z-10 pointer-events-none"
                    >
                        <FaPhoneVolume size={28} className="transition-transform duration-500 group-hover:-rotate-12" />
                    </motion.div>

                    {/* Online status indicator */}
                    <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-white flex items-center justify-center shadow-lg border-2 border-[#FFC107]">
                        <span className="h-2 w-2 rounded-full bg-[#FFC107] animate-pulse" />
                    </span>
                </motion.div>
            </Link>

            <style jsx global>{`
                @keyframes blink {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
                .animate-blink {
                    animation: blink 1s infinite;
                }
            `}</style>
        </div>
    );
};

export default RequestCallWidget;
