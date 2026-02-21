import React from "react";

const TrustBar = () => {
  const trustedBy = [
    { name: "TechCorp", logo: "TC" },
    { name: "InnovateLabs", logo: "IL" },
    { name: "GlobalSys", logo: "GS" },
    { name: "DataFlow", logo: "DF" },
    { name: "CloudNine", logo: "C9" },
    { name: "NextGen", logo: "NG" },
  ];

  return (
    <section className="py-10 bg-slate-900/50 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-slate-500 mb-8">
          Trusted by leading companies worldwide
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {trustedBy.map((company, index) => (
            <div
              key={index}
              className="flex items-center space-x-2 text-slate-400 hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center">
                <span className="text-sm font-bold">{company.logo}</span>
              </div>
              <span className="text-sm font-medium">{company.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
