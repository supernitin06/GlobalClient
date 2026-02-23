"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus, FaQuestionCircle, FaGlobe, FaCogs, FaCheckCircle } from "react-icons/fa";
import { faqItems } from "@/components/home/homeData";
import ScrollReveal from "@/components/ui/ScrollReveal";

const FAQPage = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="relative min-h-screen bg-slate-50  overflow-hidden">
            {/* Premium Background Overlays */}
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_70%_20%,rgba(255,193,7,0.08),transparent_70%)] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[radial-gradient(circle_at_20%_80%,rgba(15,23,42,0.05),transparent_70%)] pointer-events-none" />

            {/* Floating Globe Pattern */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.02] flex items-center justify-center">
                <FaGlobe className="text-[800px] text-slate-900 absolute -top-40 -right-40 rotate-12" />
                <FaGlobe className="text-[600px] text-slate-900 absolute -bottom-40 -left-40 -rotate-12" />
            </div>

            <div className="pg-container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <ScrollReveal variant="up">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-xs uppercase tracking-widest mb-6">
                            <FaQuestionCircle /> Support Center
                        </span>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-[#0A1128] leading-tight mb-6">
                            Partner & Operational <span className="text-[var(--color-primary)]">FAQs</span>
                        </h1>
                        <p className="text-xl text-slate-600 leading-relaxed font-medium">
                            Everything you need to know about partnering with Global Project and BitMax Group. Clear information on centers, compliance, and our global delivery model.
                        </p>
                    </ScrollReveal>
                </div>

                <div className="max-w-4xl mx-auto space-y-4">
                    {faqItems.map((item, index) => (
                        <ScrollReveal key={index} variant="up" delay={index * 50}>
                            <div
                                className={`group rounded-3xl border transition-all duration-500 overflow-hidden ${activeIndex === index
                                        ? "bg-white border-[var(--color-primary)] shadow-[0_20px_40px_rgba(255,193,7,0.12)]"
                                        : "bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white shadow-sm"
                                    }`}
                            >
                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="flex items-center justify-between w-full p-6 md:p-8 text-left transition-colors"
                                >
                                    <div className="flex items-center gap-5">
                                        <span className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-all duration-500 ${activeIndex === index
                                                ? "bg-[var(--color-primary)] text-white rotate-[360deg]"
                                                : "bg-slate-100 text-slate-500 group-hover:bg-slate-200"
                                            }`}>
                                            {index === 0 ? <FaGlobe size={20} /> : index === 2 ? <FaCogs size={20} /> : <FaCheckCircle size={20} />}
                                        </span>
                                        <h3 className={`text-lg md:text-xl font-bold transition-colors duration-300 ${activeIndex === index ? "text-[#0A1128]" : "text-slate-700"
                                            }`}>
                                            {item.question}
                                        </h3>
                                    </div>
                                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${activeIndex === index
                                            ? "bg-[var(--color-primary)]/10 border-[var(--color-primary)]/20 text-[var(--color-primary)]"
                                            : "border-slate-200 text-slate-400 group-hover:border-slate-400"
                                        }`}>
                                        {activeIndex === index ? <FaMinus size={12} /> : <FaPlus size={12} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                        >
                                            <div className="px-6 md:px-8 pb-8 pt-2">
                                                <div className="h-px w-full bg-slate-100 mb-6" />
                                                <p className="text-slate-600 text-lg leading-relaxed font-medium pl-1 gap-4 flex flex-col">
                                                    {item.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                {/* Call to Action for more questions */}
                <ScrollReveal variant="up" delay={500}>
                    <div className="mt-16 p-10 rounded-[40px] bg-[#0A1128] text-white overflow-hidden relative group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[100px] pointer-events-none group-hover:bg-[var(--color-primary)]/20 transition-all duration-700" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
                            <div>
                                <h3 className="text-3xl font-extrabold mb-3">Still have questions?</h3>
                                <p className="text-slate-400 text-lg">Our team is ready to discuss your specific campaign requirements 24/7.</p>
                            </div>
                            <div className="flex flex-wrap gap-4 justify-center">
                                <button className="px-8 py-4 rounded-2xl bg-[var(--color-primary)] text-[#0A1128] font-extrabold transition-all hover:scale-105 active:scale-95 shadow-[0_10px_25px_rgba(255,193,7,0.3)]">
                                    Contact Support
                                </button>
                                <button className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-md text-white font-extrabold border border-white/10 transition-all hover:bg-white/20">
                                    Documentation
                                </button>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    );
};

export default FAQPage;
