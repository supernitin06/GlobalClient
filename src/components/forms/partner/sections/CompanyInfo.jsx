import React from "react";
import Input from "../../../ui/Input";
import Select from "../../../ui/Select";

const CompanyInfo = ({ formData, handleChange, errors }) => {
  const companyTypes = [
    { value: "llc", label: "LLC" },
    { value: "corporation", label: "Corporation" },
    { value: "partnership", label: "Partnership" },
    { value: "sole_proprietorship", label: "Sole Proprietorship" },
    { value: "other", label: "Other" },
  ];

  const employeeCounts = [
    { value: "1-10", label: "1-10" },
    { value: "11-50", label: "11-50" },
    { value: "51-100", label: "51-100" },
    { value: "101-500", label: "101-500" },
    { value: "500+", label: "500+" },
  ];

  const revenueRanges = [
    { value: "under_1m", label: "Under $1M" },
    { value: "1m_5m", label: "$1M - $5M" },
    { value: "5m_10m", label: "$5M - $10M" },
    { value: "10m_50m", label: "$10M - $50M" },
    { value: "50m_plus", label: "$50M+" },
  ];

  return (
    <div className="space-y-6">
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
          label="Registration Number"
          name="registrationNumber"
          value={formData.registrationNumber}
          onChange={handleChange}
          placeholder="Company registration number"
          required
          error={errors.registrationNumber}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Year Established"
          name="yearEstablished"
          type="number"
          value={formData.yearEstablished}
          onChange={handleChange}
          placeholder="e.g., 2010"
          required
          error={errors.yearEstablished}
        />
        <Select
          label="Company Type"
          name="companyType"
          value={formData.companyType}
          onChange={handleChange}
          options={companyTypes}
          required
          error={errors.companyType}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Headquarters"
          name="headquarters"
          value={formData.headquarters}
          onChange={handleChange}
          placeholder="City, Country"
          required
          error={errors.headquarters}
        />
        <Input
          label="Website"
          name="website"
          type="url"
          value={formData.website}
          onChange={handleChange}
          placeholder="https://www.company.com"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Number of Employees"
          name="employeeCount"
          value={formData.employeeCount}
          onChange={handleChange}
          options={employeeCounts}
        />
        <Select
          label="Annual Revenue"
          name="annualRevenue"
          value={formData.annualRevenue}
          onChange={handleChange}
          options={revenueRanges}
        />
      </div>
    </div>
  );
};

export default CompanyInfo;
