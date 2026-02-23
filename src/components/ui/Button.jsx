'use client';

import React, { useRef, useState } from "react";

const Button = ({
  children,
  as = "button",
  variant = "primary",
  size = "md",
  className = "",
  disabled = false,
  loading = false,
  iconLeft,
  iconRight,
  onClick,
  type = "button",
  ...rest
}) => {
  const btnRef = useRef(null);
  const [ripples, setRipples] = useState([]);

  const handleClick = (e) => {
    if (disabled || loading) return;

    const rect = btnRef.current?.getBoundingClientRect();
    if (rect) {
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const id = Date.now();
      setRipples((prev) => [...prev, { x, y, id }]);
      setTimeout(() => setRipples((prev) => prev.filter((r) => r.id !== id)), 700);
    }

    onClick?.(e);
  };

  // Base classes
  const baseClasses =
    "relative overflow-hidden inline-flex items-center justify-center font-semibold rounded-xl select-none outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  // Variant styles — rich & unique
  const variantClasses = {
    primary:
      "pg-btn-effect pg-btn-primary-theme bg-[linear-gradient(135deg,var(--color-primary)_0%,#0f172a_100%)] !text-white shadow-[0_6px_22px_rgba(15,23,42,0.32)] hover:shadow-[0_10px_28px_rgba(15,23,42,0.44)] focus-visible:ring-[var(--color-primary)] hover:brightness-110 active:scale-[0.97]",
    secondary:
      "pg-btn-effect bg-[linear-gradient(135deg,#FFC107_0%,#f59e0b_100%)] text-slate-900 shadow-[0_6px_20px_rgba(255,193,7,0.38)] hover:shadow-[0_10px_26px_rgba(255,193,7,0.52)] focus-visible:ring-amber-400 hover:brightness-105 active:scale-[0.97]",
    success:
      "pg-btn-effect bg-[linear-gradient(135deg,#10b981_0%,#065f46_100%)] text-white shadow-[0_6px_20px_rgba(16,185,129,0.35)] hover:shadow-[0_10px_26px_rgba(16,185,129,0.48)] focus-visible:ring-emerald-500 hover:brightness-110 active:scale-[0.97]",
    outline:
      "pg-btn-effect-outline border-2 border-[var(--color-primary)] text-[var(--color-primary)] bg-transparent hover:bg-[var(--color-primary)] hover:text-white shadow-[0_4px_14px_rgba(15,23,42,0.12)] hover:shadow-[0_8px_22px_rgba(15,23,42,0.26)] focus-visible:ring-[var(--color-primary)] active:scale-[0.97]",
    ghost:
      "pg-btn-effect-ghost border border-slate-200 text-[var(--color-primary)] bg-white/80 hover:bg-[var(--color-primary-light)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary-dark)] shadow-sm focus-visible:ring-[var(--color-primary)] active:scale-[0.97]",
    dark: "pg-btn-effect bg-[linear-gradient(135deg,#0f172a_0%,#1e293b_100%)] text-white shadow-[0_6px_20px_rgba(0,0,0,0.32)] hover:shadow-[0_10px_26px_rgba(0,0,0,0.44)] focus-visible:ring-slate-700 hover:brightness-110 active:scale-[0.97]",
    light:
      "pg-btn-effect-ghost border border-slate-200 bg-slate-50 text-slate-700 hover:bg-white hover:border-slate-300 shadow-sm focus-visible:ring-slate-300 active:scale-[0.97]",
  };

  // Size styles
  const sizeClasses = {
    sm: "px-3.5 py-1.5 text-sm gap-1.5",
    md: "px-5 py-2.5 text-[0.95rem] gap-2",
    lg: "px-7 py-3.5 text-base gap-2.5",
  };

  // Ripple color per variant
  const rippleColor = {
    primary: "rgba(255,255,255,0.28)",
    secondary: "rgba(255,255,255,0.32)",
    success: "rgba(255,255,255,0.28)",
    outline: "rgba(15,23,42,0.12)",
    ghost: "rgba(15,23,42,0.08)",
    dark: "rgba(255,255,255,0.18)",
    light: "rgba(15,23,42,0.08)",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant] ?? variantClasses.primary} ${sizeClasses[size]} transition-all duration-200 ${className}`;

  const Component = as;
  const componentProps = {
    className: combinedClasses,
    onClick: handleClick,
    ref: btnRef,
    ...(Component === "button"
      ? {
          type,
          disabled: disabled || loading,
        }
      : {}),
    ...rest,
  };

  return (
    <Component {...componentProps}>
      {/* Ripple layers */}
      {ripples.map(({ x, y, id }) => (
        <span
          key={id}
          aria-hidden="true"
          className="pg-ripple pointer-events-none absolute rounded-full"
          style={{
            left: x,
            top: y,
            background: rippleColor[variant] ?? "rgba(255,255,255,0.25)",
          }}
        />
      ))}

      {/* Shine sweep on hover */}
      <span aria-hidden="true" className="pg-btn-shine pointer-events-none absolute inset-0 rounded-xl" />

      {/* Loading spinner */}
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}

      {iconLeft && !loading && <span className="inline-flex shrink-0">{iconLeft}</span>}
      <span className="relative z-10">{children}</span>
      {iconRight && <span className="inline-flex shrink-0">{iconRight}</span>}
    </Component>
  );
};

export default Button;
