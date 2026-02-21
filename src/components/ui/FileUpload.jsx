import React, { useRef, useState } from "react";

const FileUpload = ({
  label,
  name,
  onChange,
  accept,
  multiple = false,
  maxSize = 5 * 1024 * 1024, // 5MB default
  error,
  required = false,
  disabled = false,
  className = "",
  ...props
}) => {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const validateFiles = (fileList) => {
    const validFiles = [];
    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      if (file.size > maxSize) {
        alert(
          `File ${file.name} is too large. Max size is ${maxSize / 1024 / 1024}MB`,
        );
        continue;
      }
      validFiles.push(file);
    }
    return validFiles;
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (disabled) return;

    const droppedFiles = validateFiles(e.dataTransfer.files);
    if (droppedFiles.length > 0) {
      const newFiles = multiple ? [...files, ...droppedFiles] : droppedFiles;
      setFiles(newFiles);
      onChange?.({ target: { name, value: newFiles } });
    }
  };

  const handleChange = (e) => {
    if (disabled) return;
    const selectedFiles = validateFiles(e.target.files);
    if (selectedFiles.length > 0) {
      const newFiles = multiple ? [...files, ...selectedFiles] : selectedFiles;
      setFiles(newFiles);
      onChange?.({ target: { name, value: newFiles } });
    }
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
    onChange?.({ target: { name, value: newFiles } });
  };

  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-slate-300 mb-1.5">
          {label}
          {required && <span className="text-red-400 ml-1">*</span>}
        </label>
      )}
      <div
        className={`
          relative border-2 border-dashed rounded-lg p-6
          transition-all duration-200
          ${dragActive ? "border-emerald-500 bg-emerald-500/10" : "border-slate-700 hover:border-slate-600"}
          ${error ? "border-red-500" : ""}
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={() => !disabled && inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          name={name}
          accept={accept}
          multiple={multiple}
          onChange={handleChange}
          disabled={disabled}
          required={required}
          className="hidden"
          {...props}
        />
        <div className="text-center">
          <svg
            className="mx-auto h-10 w-10 text-slate-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
          <p className="mt-2 text-sm text-slate-400">
            <span className="font-semibold text-emerald-400">
              Click to upload
            </span>{" "}
            or drag and drop
          </p>
          <p className="mt-1 text-xs text-slate-500">
            {multiple ? "Multiple files allowed" : "Single file"} • Max{" "}
            {maxSize / 1024 / 1024}MB
          </p>
        </div>
      </div>

      {files.length > 0 && (
        <ul className="mt-3 space-y-2">
          {files.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between px-3 py-2 rounded-lg bg-slate-800 border border-slate-700"
            >
              <span className="text-sm text-slate-300 truncate">
                {file.name}
              </span>
              <button
                type="button"
                onClick={() => removeFile(index)}
                className="ml-2 text-slate-400 hover:text-red-400 transition-colors"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </li>
          ))}
        </ul>
      )}

      {error && <p className="mt-1.5 text-sm text-red-400">{error}</p>}
    </div>
  );
};

export default FileUpload;
