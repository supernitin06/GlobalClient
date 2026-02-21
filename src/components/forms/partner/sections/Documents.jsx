import React from "react";
import FileUpload from "../../../ui/FileUpload";

const Documents = ({ formData, handleChange, errors }) => {
  return (
    <div className="space-y-6">
      <FileUpload
        label="Company Profile / Portfolio"
        name="companyProfile"
        onChange={handleChange}
        accept=".pdf,.doc,.docx"
        multiple
        maxSize={10 * 1024 * 1024}
        error={errors.companyProfile}
      />

      <FileUpload
        label="Certifications"
        name="documentCertifications"
        onChange={handleChange}
        accept=".pdf,.jpg,.jpeg,.png"
        multiple
        maxSize={5 * 1024 * 1024}
      />

      <FileUpload
        label="Financial Statements"
        name="financialStatements"
        onChange={handleChange}
        accept=".pdf,.xls,.xlsx"
        multiple
        maxSize={10 * 1024 * 1024}
      />

      <p className="text-sm text-slate-500">
        Supported formats: PDF, DOC, DOCX, XLS, XLSX, JPG, PNG. Maximum file
        size: 10MB per file.
      </p>
    </div>
  );
};

export default Documents;
