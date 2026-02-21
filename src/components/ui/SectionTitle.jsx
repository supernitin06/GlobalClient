import React from "react";

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
  className = "",
}) => {
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <div className={`max-w-3xl mx-auto ${alignClasses[align]} ${className}`}>
      {subtitle && (
        <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {title}
        </h2>
      )}
      {description && <p className="text-slate-400 text-lg">{description}</p>}
    </div>
  );
};

export default SectionTitle;
