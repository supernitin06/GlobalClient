'use client';

import React, { useState } from "react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import heroImage from "@/assets/image/call-center-3614379_1920.jpg";
import Button from "@/components/ui/Button";

const whyPartner = [
    "Verified International Campaign Opportunities",
    "Transparent Reporting & SLA Framework",
    "Long-Term Business Partnership Potential",
    "Fast Project Deployment & Go-Live Support",
    "Structured Training & Process Documentation",
    "Quality Monitoring and Continuous Feedback",
    "Compliance-Based Operational Environment",
];

const requirements = [
    "Stable internet connectivity with backup",
    "Power backup / UPS support",
    "Noise-free operational floor",
    "Dedicated systems and headset setup",
    "Trained agents and supervisors",
    "Team Leaders (TL) and QA structure",
    "KYC verified staff",
    "NDA readiness and compliance discipline",
];

const inputClass =
    "mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-700 outline-none transition focus:border-[var(--color-primary)] focus:shadow-[0_0_0_3px_rgba(13,110,253,0.1)]";
const labelClass = "text-sm font-medium text-slate-700";
const sectionClass = "rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_10px_22px_rgba(15,23,42,0.06)]";

const PartnerWithUs = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="mx-auto max-w-7xl px-4 pt-2 pb-6 sm:px-6 lg:px-8">
            <ScrollReveal variant="up">
                <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_16px_30px_rgba(15,23,42,0.08)]">
                    <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="border-b border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.08),rgba(255,193,7,0.12))] px-7 py-7 lg:border-b-0 lg:border-r">
                            <p className="text-sm font-semibold text-[var(--color-primary)]">Partner With Us</p>
                            <h1 className="pg-page-hero-title mt-2 text-4xl font-bold">Join Our Global Outsourcing Partner Network</h1>
                            <p className="pg-page-hero-copy mt-4 max-w-xl text-slate-700">
                                Collaborate with Projects Global to access verified campaign opportunities, structured go-live support,
                                and long-term outsourcing growth.
                            </p>
                            <div className="mt-5 flex flex-wrap gap-2">
                                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">Verified Opportunities</span>
                                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">Fast Deployment</span>
                                <span className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700">SLA Framework</span>
                            </div>
                        </div>
                        <div className="relative h-52 lg:h-full bg-slate-200 flex items-center justify-center">
                            {heroImage ? (
                                <img src={heroImage.src} alt="Partner call center operations" loading="eager" fetchPriority="high" className="hero-float h-full w-full object-cover" />
                            ) : (
                                <div className="text-slate-400 font-medium italic">Hero Image Placeholder</div>
                            )}
                            <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-transparent to-transparent" />
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            <section className="mt-6 grid gap-6 md:grid-cols-2">
                <ScrollReveal variant="left">
                    <article className={sectionClass}>
                        <div className="rounded-xl border border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.07),rgba(255,193,7,0.1))] px-4 py-3">
                            <h2 className="text-2xl font-bold">Why Partner with Projects Global?</h2>
                        </div>
                        <ul className="mt-4 grid gap-2 text-slate-700">
                            {whyPartner.map((item, index) => (
                                <li key={item} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                                    <span className="mt-0.5 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                                        {index + 1}
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </ScrollReveal>

                <ScrollReveal variant="right" delay={90}>
                    <article className={sectionClass}>
                        <div className="rounded-xl border border-slate-200 bg-[linear-gradient(120deg,rgba(13,110,253,0.07),rgba(255,193,7,0.1))] px-4 py-3">
                            <h2 className="text-2xl font-bold">Minimum Operational Requirements</h2>
                        </div>
                        <ul className="mt-4 grid gap-2 text-slate-700">
                            {requirements.map((item, index) => (
                                <li key={item} className="flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-sm">
                                    <span className="mt-0.5 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-[var(--color-primary-light)] text-[10px] font-bold text-[var(--color-primary-dark)]">
                                        {index + 1}
                                    </span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </article>
                </ScrollReveal>
            </section>

            <ScrollReveal variant="up" delay={120}>
                <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_24px_rgba(15,23,42,0.08)]">
                    <h2 className="text-2xl font-bold text-slate-900">Apply for Projects - Call Center Registration Form</h2>
                    <p className="mt-2 text-sm text-slate-600">ProjectsGlobal.in (International US/UK Style)</p>

                    <form className="mt-6 space-y-8" onSubmit={handleSubmit}>
                        <div className={sectionClass}>
                            <h3 className="text-xl font-semibold text-slate-900">A. Company / Center Information</h3>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                <label className={labelClass}>
                                    Call Center / Company Name *
                                    <input className={inputClass} type="text" required />
                                </label>
                                <label className={labelClass}>
                                    Registered Business Name
                                    <input className={inputClass} type="text" />
                                </label>
                                <label className={labelClass}>
                                    Website URL
                                    <input className={inputClass} type="url" />
                                </label>
                                <label className={labelClass}>
                                    Company Type *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Pvt Ltd</option>
                                        <option>LLP</option>
                                        <option>Partnership</option>
                                        <option>Proprietorship</option>
                                        <option>Other</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    Year Established *
                                    <input className={inputClass} type="number" required />
                                </label>
                                <label className={`${labelClass} md:col-span-2`}>
                                    Office Address *
                                    <textarea className={inputClass} rows="3" required />
                                </label>
                                <label className={labelClass}>
                                    City *
                                    <input className={inputClass} type="text" required />
                                </label>
                                <label className={labelClass}>
                                    State *
                                    <input className={inputClass} type="text" required />
                                </label>
                                <label className={labelClass}>
                                    Country *
                                    <input className={inputClass} type="text" required />
                                </label>
                                <label className={labelClass}>
                                    Pin Code / Postal Code *
                                    <input className={inputClass} type="text" required />
                                </label>
                            </div>
                        </div>

                        <div className={sectionClass}>
                            <h3 className="text-xl font-semibold text-slate-900">B. Contact Person Details</h3>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                <label className={labelClass}>
                                    Full Name *
                                    <input className={inputClass} type="text" required />
                                </label>
                                <label className={labelClass}>
                                    Designation *
                                    <input className={inputClass} type="text" required />
                                </label>
                                <label className={labelClass}>
                                    Email Address *
                                    <input className={inputClass} type="email" required />
                                </label>
                                <label className={labelClass}>
                                    Mobile Number *
                                    <input className={inputClass} type="tel" required />
                                </label>
                                <label className={labelClass}>
                                    WhatsApp Number *
                                    <input className={inputClass} type="tel" required />
                                </label>
                            </div>
                        </div>

                        <div className={sectionClass}>
                            <h3 className="text-xl font-semibold text-slate-900">C. Center Capacity</h3>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                <label className={labelClass}>
                                    Total Seats Available *
                                    <input className={inputClass} type="number" required />
                                </label>
                                <label className={labelClass}>
                                    Seats Available for New Projects *
                                    <input className={inputClass} type="number" required />
                                </label>
                                <label className={labelClass}>
                                    Voice Process Capability *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <fieldset className="rounded-lg border border-slate-300 p-3">
                                    <legend className="px-2 text-sm text-slate-600">Non-Voice Capability *</legend>
                                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-700">
                                        <label><input type="checkbox" className="mr-2" required />Chat</label>
                                        <label><input type="checkbox" className="mr-2" />Email</label>
                                        <label><input type="checkbox" className="mr-2" />Back Office</label>
                                    </div>
                                </fieldset>
                                <label className={labelClass}>
                                    Shift Availability *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Day</option>
                                        <option>Night</option>
                                        <option>24x7</option>
                                        <option>Rotational</option>
                                    </select>
                                </label>
                                <fieldset className="rounded-lg border border-slate-300 p-3">
                                    <legend className="px-2 text-sm text-slate-600">Languages Supported *</legend>
                                    <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-700">
                                        <label><input type="checkbox" className="mr-2" required />English</label>
                                        <label><input type="checkbox" className="mr-2" />Hindi</label>
                                        <label><input type="checkbox" className="mr-2" />Other</label>
                                    </div>
                                </fieldset>
                            </div>
                        </div>

                        <div className={sectionClass}>
                            <h3 className="text-xl font-semibold text-slate-900">D. Experience & Expertise</h3>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                <label className={labelClass}>
                                    Total BPO Experience (Years) *
                                    <input className={inputClass} type="number" required />
                                </label>
                                <label className={labelClass}>
                                    International Process Experience *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    Previous Process Type *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Telecom</option>
                                        <option>E-commerce</option>
                                        <option>Banking</option>
                                        <option>Healthcare</option>
                                        <option>Other</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    Team Leaders Available *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    QA Team Available *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    Trainers Available
                                    <select className={inputClass}>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className={sectionClass}>
                            <h3 className="text-xl font-semibold text-slate-900">E. Infrastructure & Technology</h3>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                <label className={labelClass}>
                                    Internet Bandwidth (Mbps) *
                                    <input className={inputClass} type="number" required />
                                </label>
                                <label className={labelClass}>
                                    Internet Backup Available *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    Power Backup / UPS Available *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    Number of Systems Available *
                                    <input className={inputClass} type="number" required />
                                </label>
                                <label className={labelClass}>
                                    Headsets Available *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    Dialer Setup Available (If Voice)
                                    <select className={inputClass}>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                        <option>Can Arrange</option>
                                    </select>
                                </label>
                                <label className={`${labelClass} md:col-span-2`}>
                                    CRM Experience *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Zendesk</option>
                                        <option>Freshdesk</option>
                                        <option>Salesforce</option>
                                        <option>Custom CRM</option>
                                        <option>Other</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className={sectionClass}>
                            <h3 className="text-xl font-semibold text-slate-900">F. Compliance Readiness</h3>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                <label className={labelClass}>
                                    Are all agents KYC Verified? *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    NDA Signing Capability? *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    Secure Password Policy Followed? *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    Can you provide Daily Attendance Reports? *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    Can you support IP-Based Compliance if required? *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                                <label className={labelClass}>
                                    CCTV / Floor Monitoring Available *
                                    <select className={inputClass} required>
                                        <option value="">Select</option>
                                        <option>Yes</option>
                                        <option>No</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className={sectionClass}>
                            <h3 className="text-xl font-semibold text-slate-900">G. Document Upload (Optional)</h3>
                            <div className="mt-4 grid gap-4 md:grid-cols-2">
                                <label className={labelClass}>
                                    Upload Company Registration Certificate
                                    <input className={inputClass} type="file" />
                                </label>
                                <label className={labelClass}>
                                    Upload GST Certificate (if applicable)
                                    <input className={inputClass} type="file" />
                                </label>
                                <label className={labelClass}>
                                    Upload Office / Floor Photos
                                    <input className={inputClass} type="file" />
                                </label>
                                <label className={labelClass}>
                                    Upload Previous Experience Proof / References
                                    <input className={inputClass} type="file" />
                                </label>
                            </div>
                        </div>

                        <div className={sectionClass}>
                            <h3 className="text-xl font-semibold text-slate-900">H. Additional Notes</h3>
                            <label className={`${labelClass} mt-4 block`}>
                                Message / Additional Information
                                <textarea className={inputClass} rows="4" />
                            </label>
                        </div>

                        <div className={sectionClass}>
                            <h3 className="text-xl font-semibold text-slate-900">I. Consent</h3>
                            <label className="mt-4 flex items-start gap-3 text-sm text-slate-700">
                                <input type="checkbox" required className="mt-1 h-4 w-4 accent-[var(--color-primary)]" />
                                <span>
                                    I confirm that the information provided is accurate. I understand that Projects Global may conduct
                                    verification checks before project allocation. I agree to comply with NDA, confidentiality, and
                                    operational compliance requirements if selected.
                                </span>
                            </label>
                            <div className="mt-6">
                                <Button type="submit" variant="primary" size="md">Submit Application</Button>
                            </div>
                        </div>
                    </form>

                    {submitted && (
                        <p className="mt-6 rounded-lg border border-[rgba(13,110,253,0.4)] bg-[rgba(13,110,253,0.1)] p-4 text-sm text-[var(--color-primary-dark)]">
                            Thank You for Applying. Your application has been successfully submitted. Our onboarding team will review
                            your details and contact you within 24-72 business hours. For urgent communication, please contact us on
                            WhatsApp: +91 [Insert Number].
                        </p>
                    )}
                </section>
            </ScrollReveal>
        </div>
    );
};

export default PartnerWithUs;




