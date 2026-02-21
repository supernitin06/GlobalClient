import React from "react";
import Input from "../../../ui/Input";
import Select from "../../../ui/Select";

const Infrastructure = ({ formData, handleChange, errors }) => {
  const locationTypes = [
    { value: "onsite", label: "On-site" },
    { value: "offshore", label: "Offshore" },
    { value: "nearshore", label: "Nearshore" },
    { value: "hybrid", label: "Hybrid" },
  ];

  const bandwidthOptions = [
    { value: "10mbps", label: "10 Mbps" },
    { value: "50mbps", label: "50 Mbps" },
    { value: "100mbps", label: "100 Mbps" },
    { value: "1gbps", label: "1 Gbps" },
    { value: "1gbps_plus", label: "1 Gbps+" },
  ];

  const powerOptions = [
    { value: "none", label: "No Backup" },
    { value: "ups", label: "UPS Only" },
    { value: "generator", label: "Generator" },
    { value: "dual_redundant", label: "Dual Redundant" },
  ];

  const securityOptions = [
    { value: "basic", label: "Basic Security" },
    { value: "standard", label: "Standard Security" },
    { value: "advanced", label: "Advanced Security" },
    { value: "enterprise", label: "Enterprise Grade" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Location Type"
          name="locationType"
          value={formData.locationType}
          onChange={handleChange}
          options={locationTypes}
          required
          error={errors.locationType}
        />
        <Select
          label="Internet Bandwidth"
          name="bandwidth"
          value={formData.bandwidth}
          onChange={handleChange}
          options={bandwidthOptions}
          required
          error={errors.bandwidth}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Select
          label="Power Backup"
          name="powerBackup"
          value={formData.powerBackup}
          onChange={handleChange}
          options={powerOptions}
          required
          error={errors.powerBackup}
        />
        <Select
          label="Security Level"
          name="security"
          value={formData.security}
          onChange={handleChange}
          options={securityOptions}
          required
          error={errors.security}
        />
      </div>
    </div>
  );
};

export default Infrastructure;
