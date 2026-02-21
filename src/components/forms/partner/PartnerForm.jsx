import React, { useState } from "react";
import CompanyInfo from "./sections/CompanyInfo";
import ContactPerson from "./sections/ContactPerson";
import Capacity from "./sections/Capacity";
import Experience from "./sections/Experience";
import Infrastructure from "./sections/Infrastructure";
import Compliance from "./sections/Compliance";
import Documents from "./sections/Documents";
import AdditionalNotes from "./sections/AdditionalNotes";
import Button from "../../ui/Button";
import { partnerValidation } from "./partnerValidation";

const PartnerForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    // Company Info
    companyName: "",
    registrationNumber: "",
    yearEstablished: "",
    companyType: "",
    headquarters: "",
    website: "",
    employeeCount: "",
    annualRevenue: "",

    // Contact Person
    contactName: "",
    contactDesignation: "",
    contactEmail: "",
    contactPhone: "",

    // Capacity
    seats: "",
    shifts: "",
    languages: [],
    services: [],

    // Experience
    yearsExperience: "",
    industries: [],
    clientReferences: "",
    certifications: [],

    // Infrastructure
    locationType: "",
    bandwidth: "",
    powerBackup: "",
    security: "",

    // Compliance
    dataSecurity: "",
    complianceFrameworks: [],
    auditReports: "",

    // Documents
    companyProfile: [],
    documentCertifications: [],
    financialStatements: [],

    // Additional
    additionalNotes: "",
    agreedToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const steps = [
    { title: "Company Info", component: CompanyInfo },
    { title: "Contact Person", component: ContactPerson },
    { title: "Capacity", component: Capacity },
    { title: "Experience", component: Experience },
    { title: "Infrastructure", component: Infrastructure },
    { title: "Compliance", component: Compliance },
    { title: "Documents", component: Documents },
    { title: "Additional", component: AdditionalNotes },
  ];

  const CurrentStepComponent = steps[currentStep].component;

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

  const handleNext = () => {
    const stepFields = getStepFields(currentStep);
    const stepErrors = partnerValidation(formData, stepFields);

    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }

    setErrors({});
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const validationErrors = partnerValidation(formData);
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

  const getStepFields = (step) => {
    const stepFields = {
      0: [
        "companyName",
        "registrationNumber",
        "yearEstablished",
        "companyType",
        "headquarters",
      ],
      1: ["contactName", "contactDesignation", "contactEmail", "contactPhone"],
      2: ["seats", "shifts", "languages", "services"],
      3: ["yearsExperience", "industries"],
      4: ["locationType", "bandwidth", "powerBackup", "security"],
      5: ["dataSecurity", "complianceFrameworks"],
      6: ["companyProfile"],
      7: ["agreedToTerms"],
    };
    return stepFields[step] || [];
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
          Application Submitted Successfully!
        </h3>
        <p className="text-slate-400 mb-6">
          We'll review your application and get back to you within 5-7 business
          days.
        </p>
        <Button onClick={() => window.location.reload()}>
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium
                  ${
                    index < currentStep
                      ? "bg-emerald-500 text-slate-950"
                      : index === currentStep
                        ? "bg-emerald-500/20 text-emerald-400 border-2 border-emerald-500"
                        : "bg-slate-800 text-slate-500"
                  }
                `}
              >
                {index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-full h-0.5 mx-2 ${index < currentStep ? "bg-emerald-500" : "bg-slate-800"}`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-2 text-center text-sm text-slate-400">
          Step {currentStep + 1} of {steps.length}: {steps[currentStep].title}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <CurrentStepComponent
          formData={formData}
          handleChange={handleChange}
          errors={errors}
        />

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            type="button"
            variant="secondary"
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            Back
          </Button>

          {currentStep < steps.length - 1 ? (
            <Button type="button" onClick={handleNext}>
              Next
            </Button>
          ) : (
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};

export default PartnerForm;
