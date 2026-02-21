import React from "react";
import Select from "../../../ui/Select";
import TextArea from "../../../ui/TextArea";

const Compliance = ({ formData, handleChange, errors }) => {
  const securityOptions = [
    { value: "basic", label: "Basic" },
    { value: "standard", label: "Standard" },
    { value: "advanced", label: "Advanced" },
    { value: "enterprise", label: "Enterprise" },
  ];

  const frameworkOptions = [
    { value: "iso_27001", label: "ISO 27001" },
    { value: "pci_dss", label: "PCI DSS" },
    { value: "hipaa", label: "HIPAA" },
    { value: "gdpr", label: "GDPR" },
    { value: "soc2", label: "SOC 2" },
    { value: "none", label: "None" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Data Security Measures"
          name="dataSecurity"
          value={formData.dataSecurity}
          onChange={handleChange}
          options={securityOptions}
          required
          error={errors.dataSecurity}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          Compliance Frameworks <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {frameworkOptions.map((framework) => (
            <label
              key={framework.value}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="complianceFrameworks"
                value={framework.value}
                checked={formData.complianceFrameworks.includes(
                  framework.value,
                )}
                onChange={(e) => {
                  const newFrameworks = e.target.checked
                    ? [...formData.complianceFrameworks, framework.value]
                    : formData.complianceFrameworks.filter(
                        (f) => f !== framework.value,
                      );
                  handleChange({
                    target: {
                      name: "complianceFrameworks",
                      value: newFrameworks,
                    },
                  });
                }}
                className="w-4 h-4 rounded bg-slate-800 border border-slate-600 text-emerald-500 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-300">{framework.label}</span>
            </label>
          ))}
        </div>
        {errors.complianceFrameworks && (
          <p className="mt-1.5 text-sm text-red-400">
            {errors.complianceFrameworks}
          </p>
        )}
      </div>

      <TextArea
        label="Audit Reports Availability"
        name="auditReports"
        value={formData.auditReports}
        onChange={handleChange}
        placeholder="Describe your audit report availability and frequency..."
        rows={3}
      />
    </div>
  );
};

export default Compliance;
