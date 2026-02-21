import React from "react";

const Card = ({
  children,
  title,
  description,
  image,
  footer,
  hover = true,
  padding = true,
  className = "",
  ...props
}) => {
  return (
    <div
      className={`
        rounded-2xl border border-slate-800 
        bg-slate-900/60 backdrop-blur-sm
        shadow-xl overflow-hidden
        ${hover ? "transition-all duration-300 hover:border-emerald-500/50 hover:shadow-emerald-500/10 hover:-translate-y-1" : ""}
        ${padding ? "p-6" : ""}
        ${className}
      `}
      {...props}
    >
      {image && (
        <div className="mb-4 -mx-6 -mt-6">
          <img
            src={image.src}
            alt={image.alt || title}
            className="w-full h-48 object-cover"
          />
        </div>
      )}

      {(title || description) && (
        <div className="mb-4">
          {title && (
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          )}
          {description && <p className="text-slate-400">{description}</p>}
        </div>
      )}

      <div>{children}</div>

      {footer && (
        <div className="mt-4 pt-4 border-t border-slate-800">{footer}</div>
      )}
    </div>
  );
};

export default Card;
