import React from "react";
import Input from "../../../ui/Input";
import Select from "../../../ui/Select";
import TextArea from "../../../ui/TextArea";

const Experience = ({ formData, handleChange, errors }) => {
  const experienceOptions = [
    { value: "0-1", label: "Less than 1 year" },
    { value: "1-3", label: "1-3 years" },
    { value: "3-5", label: "3-5 years" },
    { value: "5-10", label: "5-10 years" },
    { value: "10+", label: "10+ years" },
  ];

  const industryOptions = [
    { value: "healthcare", label: "Healthcare" },
    { value: "finance", label: "Finance & Banking" },
    { value: "retail", label: "Retail & E-commerce" },
    { value: "telecom", label: "Telecommunications" },
    { value: "travel", label: "Travel & Hospitality" },
    { value: "technology", label: "Technology" },
    { value: "education", label: "Education" },
    { value: "government", label: "Government" },
  ];

  const certificationOptions = [
    { value: "iso_27001", label: "ISO 27001" },
    { value: "iso_9001", label: "ISO 9001" },
    { value: "pci_dss", label: "PCI DSS" },
    { value: "hipaa", label: "HIPAA" },
    { value: "soc2", label: "SOC 2" },
    { value: "gdpr", label: "GDPR" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Years of Experience"
          name="yearsExperience"
          value={formData.yearsExperience}
          onChange={handleChange}
          options={experienceOptions}
          required
          error={errors.yearsExperience}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          Industries Served <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {industryOptions.map((industry) => (
            <label
              key={industry.value}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="industries"
                value={industry.value}
                checked={formData.industries.includes(industry.value)}
                onChange={(e) => {
                  const newIndustries = e.target.checked
                    ? [...formData.industries, industry.value]
                    : formData.industries.filter((i) => i !== industry.value);
                  handleChange({
                    target: { name: "industries", value: newIndustries },
                  });
                }}
                className="w-4 h-4 rounded bg-slate-800 border border-slate-600 text-emerald-500 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-300">{industry.label}</span>
            </label>
          ))}
        </div>
        {errors.industries && (
          <p className="mt-1.5 text-sm text-red-400">{errors.industries}</p>
        )}
      </div>

      <TextArea
        label="Client References"
        name="clientReferences"
        value={formData.clientReferences}
        onChange={handleChange}
        placeholder="List your key clients and services provided..."
        rows={3}
      />

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          Certifications
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {certificationOptions.map((cert) => (
            <label
              key={cert.value}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="certifications"
                value={cert.value}
                checked={formData.certifications.includes(cert.value)}
                onChange={(e) => {
                  const newCerts = e.target.checked
                    ? [...formData.certifications, cert.value]
                    : formData.certifications.filter((c) => c !== cert.value);
                  handleChange({
                    target: { name: "certifications", value: newCerts },
                  });
                }}
                className="w-4 h-4 rounded bg-slate-800 border border-slate-600 text-emerald-500 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-300">{cert.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
