'use client';

import React, { useEffect, useMemo, useRef, useState } from "react";
import Button from "../ui/Button";

const initialState = {
  salutation: "Mr.",
  firstName: "",
  lastName: "",
  email: "",
  whatsapp: "",
  phone: "",
  website: "",
  address1: "",
  address2: "",
  city: "",
  state: "",
  zip: "",
  country: "",
  company: "",
  companyReg: "",
  companyType: "",
  seats: "",
  interestedProjects: "",
  preferredCity: "",
  preferredCallTime: "",
  agree: false,
};

const ProjectDetailFormModal = ({ open, onClose, project }) => {
  const panelRef = useRef(null);
  const [formData, setFormData] = useState({
    ...initialState,
    country: project?.country || "",
    interestedProjects: project?.title || "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  const title = useMemo(() => project?.title || "Project", [project]);

  if (!open) return null;

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Backdrop */}
      <div className="pg-project-modal-mask absolute inset-0" onClick={onClose} aria-hidden="true" />

      {/* Modal Surface */}
      <div
        ref={panelRef}
        tabIndex={-1}
        className="pg-project-modal-enter relative z-10 flex max-h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[linear-gradient(160deg,#ffffff,rgba(246,250,255,0.96))] shadow-[0_32px_80px_rgba(2,6,23,0.45)] focus:outline-none"
      >
        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-slate-200 bg-[linear-gradient(120deg,rgba(30,61,133,0.08),rgba(250,204,21,0.14))] px-4 py-3 sm:px-6">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">Project Verification Form</p>
            <h3 className="bg-gradient-to-r from-[var(--color-primary-dark)] via-[var(--color-primary)] to-[#3b82f6] bg-clip-text text-base font-black text-transparent sm:text-lg">
              {title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="group inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-90"
            aria-label="Close"
          >
            <span className="text-lg leading-none text-slate-400 group-hover:text-slate-600 transition-colors">×</span>
          </button>
        </div>

        {/* Form Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 overscroll-contain">
          {submitted && (
            <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
              Form submitted successfully. Our team will contact you shortly.
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-12">
            <label className="sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Prefix</span>
              <select name="salutation" value={formData.salutation} onChange={onChange} className="pg-project-input">
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>
              </select>
            </label>
            <label className="sm:col-span-5">
              <span className="mb-1 block text-xs font-semibold text-slate-600">First Name</span>
              <input name="firstName" value={formData.firstName} onChange={onChange} required className="pg-project-input" />
            </label>
            <label className="sm:col-span-5">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Last Name</span>
              <input name="lastName" value={formData.lastName} onChange={onChange} required className="pg-project-input" />
            </label>

            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Email</span>
              <input type="email" name="email" value={formData.email} onChange={onChange} required className="pg-project-input" />
            </label>
            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">WhatsApp Number</span>
              <input name="whatsapp" value={formData.whatsapp} onChange={onChange} className="pg-project-input" />
            </label>
            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Phone Number</span>
              <input name="phone" value={formData.phone} onChange={onChange} required className="pg-project-input" />
            </label>

            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Website</span>
              <input name="website" value={formData.website} onChange={onChange} className="pg-project-input" />
            </label>
            <label className="sm:col-span-8">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Address</span>
              <input name="address1" value={formData.address1} onChange={onChange} className="pg-project-input" />
            </label>

            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Address Line 2</span>
              <input name="address2" value={formData.address2} onChange={onChange} className="pg-project-input" />
            </label>
            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">City / Town</span>
              <input name="city" value={formData.city} onChange={onChange} className="pg-project-input" />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-slate-600">State</span>
              <input name="state" value={formData.state} onChange={onChange} className="pg-project-input" />
            </label>
            <label className="sm:col-span-2">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Zip Code</span>
              <input name="zip" value={formData.zip} onChange={onChange} className="pg-project-input" />
            </label>

            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Country</span>
              <input name="country" value={formData.country} onChange={onChange} className="pg-project-input" />
            </label>
            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Company Name</span>
              <input name="company" value={formData.company} onChange={onChange} required className="pg-project-input" />
            </label>
            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Company Registration</span>
              <input name="companyReg" value={formData.companyReg} onChange={onChange} className="pg-project-input" />
            </label>

            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Company Type</span>
              <select name="companyType" value={formData.companyType} onChange={onChange} className="pg-project-input">
                <option value="">Please Select</option>
                <option value="bpo">BPO / Call Center</option>
                <option value="outsourcing">Outsourcing Agency</option>
                <option value="startup">Startup</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Seats Available</span>
              <input name="seats" value={formData.seats} onChange={onChange} className="pg-project-input" />
            </label>
            <label className="sm:col-span-4">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Interested Project</span>
              <input name="interestedProjects" value={formData.interestedProjects} onChange={onChange} className="pg-project-input" />
            </label>

            <label className="sm:col-span-6">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Preferred City</span>
              <input name="preferredCity" value={formData.preferredCity} onChange={onChange} className="pg-project-input" />
            </label>
            <label className="sm:col-span-6">
              <span className="mb-1 block text-xs font-semibold text-slate-600">Preferred Contact Time</span>
              <input type="datetime-local" name="preferredCallTime" value={formData.preferredCallTime} onChange={onChange} className="pg-project-input" />
            </label>

            <label className="sm:col-span-12 flex items-start gap-2 rounded-lg border border-slate-200 bg-slate-50 px-3 py-2 text-xs text-slate-600">
              <input type="checkbox" name="agree" checked={formData.agree} onChange={onChange} className="mt-0.5" required />
              <span>I agree to Terms and Conditions and consent to project verification.</span>
            </label>

            <div className="sm:col-span-12 mt-1">
              <Button type="submit" variant="primary" size="md" className="w-full sm:w-[210px]">
                Submit Details
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailFormModal;
