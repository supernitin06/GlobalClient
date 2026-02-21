import React from "react";
import Input from "../../../ui/Input";
import Select from "../../../ui/Select";

const Capacity = ({ formData, handleChange, errors }) => {
  const shiftOptions = [
    { value: "single", label: "Single Shift" },
    { value: "double", label: "Double Shift" },
    { value: "24_7", label: "24/7 Operations" },
    { value: "flexible", label: "Flexible" },
  ];

  const languageOptions = [
    { value: "english", label: "English" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
    { value: "mandarin", label: "Mandarin" },
    { value: "japanese", label: "Japanese" },
    { value: "hindi", label: "Hindi" },
    { value: "arabic", label: "Arabic" },
  ];

  const serviceOptions = [
    { value: "inbound", label: "Inbound Calling" },
    { value: "outbound", label: "Outbound Calling" },
    { value: "email_support", label: "Email Support" },
    { value: "chat_support", label: "Live Chat Support" },
    { value: "social_media", label: "Social Media Support" },
    { value: "technical_support", label: "Technical Support" },
    { value: "back_office", label: "Back Office Services" },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Number of Seats"
          name="seats"
          type="number"
          value={formData.seats}
          onChange={handleChange}
          placeholder="Total number of seats"
          required
          error={errors.seats}
        />
        <Select
          label="Operating Shifts"
          name="shifts"
          value={formData.shifts}
          onChange={handleChange}
          options={shiftOptions}
          required
          error={errors.shifts}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          Languages Supported <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {languageOptions.map((lang) => (
            <label
              key={lang.value}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="languages"
                value={lang.value}
                checked={formData.languages.includes(lang.value)}
                onChange={(e) => {
                  const newLanguages = e.target.checked
                    ? [...formData.languages, lang.value]
                    : formData.languages.filter((l) => l !== lang.value);
                  handleChange({
                    target: { name: "languages", value: newLanguages },
                  });
                }}
                className="w-4 h-4 rounded bg-slate-800 border border-slate-600 text-emerald-500 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-300">{lang.label}</span>
            </label>
          ))}
        </div>
        {errors.languages && (
          <p className="mt-1.5 text-sm text-red-400">{errors.languages}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          Services Offered <span className="text-red-400">*</span>
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {serviceOptions.map((service) => (
            <label
              key={service.value}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                name="services"
                value={service.value}
                checked={formData.services.includes(service.value)}
                onChange={(e) => {
                  const newServices = e.target.checked
                    ? [...formData.services, service.value]
                    : formData.services.filter((s) => s !== service.value);
                  handleChange({
                    target: { name: "services", value: newServices },
                  });
                }}
                className="w-4 h-4 rounded bg-slate-800 border border-slate-600 text-emerald-500 focus:ring-emerald-500"
              />
              <span className="text-sm text-slate-300">{service.label}</span>
            </label>
          ))}
        </div>
        {errors.services && (
          <p className="mt-1.5 text-sm text-red-400">{errors.services}</p>
        )}
      </div>
    </div>
  );
};

export default Capacity;
