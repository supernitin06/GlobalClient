'use client';

import React from "react";
import Link from "next/link";

const PageHeader = ({
  title,
  subtitle,
  breadcrumbs = [],
  backgroundImage,
  children,
}) => {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-slate-900">
        {backgroundImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 to-slate-950" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <nav className="flex items-center space-x-2 text-sm mb-4">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.href || index}>
                {index > 0 && (
                  <svg
                    className="w-4 h-4 text-slate-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-emerald-400 font-medium">
                    {crumb.label}
                  </span>
                )}
              </React.Fragment>
            ))}
          </nav>
        )}

        {/* Title & Subtitle */}
        {subtitle && (
          <p className="text-emerald-400 font-semibold text-sm uppercase tracking-wider mb-2">
            {subtitle}
          </p>
        )}
        {title && (
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {title}
          </h1>
        )}

        {/* Custom Content */}
        {children}
      </div>
    </div>
  );
};

export default PageHeader;
