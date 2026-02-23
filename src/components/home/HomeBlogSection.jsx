"use client";

import React from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaArrowRight, FaCalendarAlt, FaUser, FaGlobe } from "react-icons/fa";
import Button from "@/components/ui/Button";
import logo from "../../assets/image/logo/yello.png";

const HomeBlogSection = ({ blogs }) => {
    return (
        <section className="relative overflow-hidden py-24 bg-slate-50/50">
            {/* Background Decorative Overlay */}
            <div className="absolute inset-0 pointer-events-none opacity-[0.03] flex items-center justify-center overflow-hidden">
                <FaGlobe className="text-[600px] text-slate-900 rotate-12" />
            </div>

            <div className="pg-container relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-[var(--color-primary)] font-bold uppercase tracking-widest text-sm mb-3">
                            Resource Center
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-[#0A1128] leading-tight">
                            Latest Insights from <span className="text-[var(--color-primary)]">Global Projects</span>
                        </h3>
                        <p className="mt-4 text-slate-600 text-lg leading-relaxed">
                            Stay updated with the latest trends in global outsourcing, AI integration, and operational excelence.
                        </p>
                    </div>
                    <Link href="/blog">
                        <Button variant="outline" size="md" className="group !rounded-full border-slate-200 hover:border-[var(--color-primary)]">
                            View All Insights
                            <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                        </Button>
                    </Link>
                </div>

                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={1}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true, el: ".swiper-pagination-blogs" }}
                    breakpoints={{
                        640: { slidesPerView: 1.5 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    className="pb-16"
                >
                    {blogs.map((blog) => (
                        <SwiperSlide key={blog.id}>
                            <div className="group h-full bg-white rounded-3xl border border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.04)] overflow-hidden transition-all duration-500 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-2">
                                {/* Image Wrap */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-[#0A1128] shadow-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary)] animate-pulse" />
                                        BPO Strategy
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <span className="flex items-center gap-1.5">
                                            <FaCalendarAlt className="text-[var(--color-primary)]" />
                                            {blog.date}
                                        </span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300" />
                                        <span className="flex items-center gap-1.5 font-semibold text-slate-700">
                                            <FaUser className="text-[var(--color-primary)]" />
                                            {blog.author}
                                        </span>
                                    </div>

                                    <h4 className="text-xl font-bold text-[#0A1128] mb-4 leading-snug group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                                        {blog.title}
                                    </h4>

                                    <p className="text-slate-600 text-[15px] leading-relaxed mb-6 line-clamp-3">
                                        {blog.description}
                                    </p>

                                    <Link
                                        href={`/blog/${blog.id}`}
                                        className="inline-flex items-center gap-2 text-sm font-extrabold text-[var(--color-primary)] group/link"
                                    >
                                        Read More
                                        <span className="h-8 w-8 rounded-full border border-slate-100 flex items-center justify-center transition-all group-hover/link:bg-[var(--color-primary)] group-hover/link:text-white group-hover/link:border-transparent">
                                            <FaArrowRight size={12} />
                                        </span>
                                    </Link>
                                </div>

                                {/* Subtle Brand Overlay on card hover */}
                                <div className="absolute -bottom-12 -right-12 opacity-0 group-hover:opacity-10 transition-opacity duration-1000 transform group-hover:rotate-12 pointer-events-none">
                                    <img src={logo.src} alt="" className="w-48 grayscale brightness-0 invert" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="swiper-pagination-blogs flex justify-center mt-4"></div>
            </div>

            <style jsx global>{`
        .swiper-pagination-blogs .swiper-pagination-bullet {
          width: 25px;
          height: 6px;
          border-radius: 3px;
          background: #0A1128;
          opacity: 0.1;
          transition: all 0.3s;
        }
        .swiper-pagination-blogs .swiper-pagination-bullet-active {
          width: 45px;
          background: var(--color-primary);
          opacity: 1;
        }
      `}</style>
        </section>
    );
};

export default HomeBlogSection;
