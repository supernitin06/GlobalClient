import React, { useState } from "react";
import Input from "../../ui/Input";
import Select from "../../ui/Select";
import TextArea from "../../ui/TextArea";
import Button from "../../ui/Button";
import Checkbox from "../../ui/Checkbox";
import { rfpValidation } from "./rfpValidation";

const RFPForm = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "",
    projectBudget: "",
    projectTimeline: "",
    projectDescription: "",
    goals: "",
    targetAudience: "",
    competitors: "",
    additionalInfo: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const serviceTypes = [
    { value: "digital_marketing", label: "Digital Marketing" },
    { value: "web_development", label: "Web Development" },
    { value: "mobile_app", label: "Mobile App Development" },
    { value: "cloud_solutions", label: "Cloud Solutions" },
    { value: "consulting", label: "Consulting" },
    { value: "other", label: "Other" },
  ];

  const budgetRanges = [
    { value: "under_5k", label: "Under $5,000" },
    { value: "5k_10k", label: "$5,000 - $10,000" },
    { value: "10k_25k", label: "$10,000 - $25,000" },
    { value: "25k_50k", label: "$25,000 - $50,000" },
    { value: "50k_plus", label: "$50,000+" },
  ];

  const timelines = [
    { value: "asap", label: "ASAP" },
    { value: "1_month", label: "Within 1 Month" },
    { value: "1_3_months", label: "1-3 Months" },
    { value: "3_6_months", label: "3-6 Months" },
    { value: "flexible", label: "Flexible" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = rfpValidation(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitting(false);
      return;
    }

    // Simulate API call
    setTimeout(() => {
      setSubmitSuccess(true);
      setIsSubmitting(false);
    }, 1500);
  };

  if (submitSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
          <svg
            className="w-8 h-8 text-emerald-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">
          Request Submitted Successfully!
        </h3>
        <p className="text-slate-400 mb-6">
          We'll review your request and get back to you within 24-48 hours.
        </p>
        <Button onClick={() => setSubmitSuccess(false)}>
          Submit Another Request
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Company Name"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          placeholder="Your company name"
          required
          error={errors.companyName}
        />
        <Input
          label="Contact Person"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          placeholder="Your full name"
          required
          error={errors.contactName}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email Address"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="you@company.com"
          required
          error={errors.email}
        />
        <Input
          label="Phone Number"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          required
          error={errors.phone}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Select
          label="Service Type"
          name="serviceType"
          value={formData.serviceType}
          onChange={handleChange}
          options={serviceTypes}
          required
          error={errors.serviceType}
        />
        <Select
          label="Project Budget"
          name="projectBudget"
          value={formData.projectBudget}
          onChange={handleChange}
          options={budgetRanges}
          required
          error={errors.projectBudget}
        />
        <Select
          label="Timeline"
          name="projectTimeline"
          value={formData.projectTimeline}
          onChange={handleChange}
          options={timelines}
          required
          error={errors.projectTimeline}
        />
      </div>

      <TextArea
        label="Project Description"
        name="projectDescription"
        value={formData.projectDescription}
        onChange={handleChange}
        placeholder="Describe your project in detail..."
        rows={4}
        required
        error={errors.projectDescription}
      />

      <TextArea
        label="Goals & Objectives"
        name="goals"
        value={formData.goals}
        onChange={handleChange}
        placeholder="What do you want to achieve with this project?"
        rows={3}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TextArea
          label="Target Audience"
          name="targetAudience"
          value={formData.targetAudience}
          onChange={handleChange}
          placeholder="Who is your target audience?"
          rows={3}
        />
        <TextArea
          label="Competitors"
          name="competitors"
          value={formData.competitors}
          onChange={handleChange}
          placeholder="Who are your main competitors?"
          rows={3}
        />
      </div>

      <TextArea
        label="Additional Information"
        name="additionalInfo"
        value={formData.additionalInfo}
        onChange={handleChange}
        placeholder="Any other details you'd like to share..."
        rows={3}
      />

      <Checkbox
        label="I agree to the Terms & Conditions and Privacy Policy"
        name="agreedToTerms"
        checked={formData.agreedToTerms}
        onChange={handleChange}
        error={errors.agreedToTerms}
      />

      <Button
        type="submit"
        size="large"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Submitting..." : "Submit Request"}
      </Button>
    </form>
  );
};

export default RFPForm;
