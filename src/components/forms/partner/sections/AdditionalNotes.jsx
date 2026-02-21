import React from "react";
import TextArea from "../../../ui/TextArea";

const AdditionalNotes = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-6">
      <TextArea
        label="Additional Information"
        name="additionalNotes"
        value={formData.additionalNotes}
        onChange={handleChange}
        placeholder="Tell us anything else you'd like us to know about your company..."
        rows={4}
      />

      <div className="flex items-start">
        <input
          type="checkbox"
          name="termsAccepted"
          checked={formData.termsAccepted}
          onChange={handleChange}
          className="w-4 h-4 mt-1 rounded bg-slate-800 border border-slate-600 text-emerald-500 focus:ring-emerald-500"
        />
        <label className="ml-3 text-sm text-slate-300">
          I agree to the{" "}
          <a href="/terms" className="text-emerald-400 hover:underline">
            Terms and Conditions
          </a>{" "}
          and{" "}
          <a href="/privacy" className="text-emerald-400 hover:underline">
            Privacy Policy
          </a>
        </label>
      </div>
      {errors.termsAccepted && (
        <p className="text-sm text-red-400">{errors.termsAccepted}</p>
      )}
    </div>
  );
};

export default AdditionalNotes;
