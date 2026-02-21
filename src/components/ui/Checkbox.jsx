import React from "react";

const Checkbox = ({
  label,
  name,
  checked,
  onChange,
  error,
  disabled = false,
  className = "",
  ...props
}) => {
  return (
    <div className={`flex items-start ${className}`}>
      <div className="flex items-center h-5">
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className={`
            w-4 h-4 rounded
            bg-slate-800 border border-slate-600
            text-emerald-500
            focus:ring-2 focus:ring-emerald-500 focus:ring-offset-slate-900
            transition-all duration-200
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error ? "border-red-500" : ""}
          `}
          {...props}
        />
      </div>
      {label && (
        <div className="ml-3">
          <label className="text-sm text-slate-300">{label}</label>
          {error && <p className="text-sm text-red-400">{error}</p>}
        </div>
      )}
    </div>
  );
};

export default Checkbox;
