import React from "react";
import Input from "../../../ui/Input";

const ContactPerson = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Full Name"
          name="contactName"
          value={formData.contactName}
          onChange={handleChange}
          placeholder="Your full name"
          required
          error={errors.contactName}
        />
        <Input
          label="Designation"
          name="contactDesignation"
          value={formData.contactDesignation}
          onChange={handleChange}
          placeholder="Your job title"
          required
          error={errors.contactDesignation}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Email Address"
          name="contactEmail"
          type="email"
          value={formData.contactEmail}
          onChange={handleChange}
          placeholder="you@company.com"
          required
          error={errors.contactEmail}
        />
        <Input
          label="Phone Number"
          name="contactPhone"
          type="tel"
          value={formData.contactPhone}
          onChange={handleChange}
          placeholder="+1 (555) 000-0000"
          required
          error={errors.contactPhone}
        />
      </div>
    </div>
  );
};

export default ContactPerson;
