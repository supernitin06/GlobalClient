import React from "react";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";

const ProcessSection = () => {
  const steps = [
    {
      step: "01",
      title: "Discovery",
      description:
        "We begin by understanding your business goals, challenges, and requirements through detailed consultations.",
    },
    {
      step: "02",
      title: "Strategy",
      description:
        "Our team develops a comprehensive strategy tailored to your specific needs and objectives.",
    },
    {
      step: "03",
      title: "Development",
      description:
        "We implement solutions using cutting-edge technologies and best practices.",
    },
    {
      step: "04",
      title: "Delivery",
      description:
        "We ensure smooth deployment and provide ongoing support to maintain optimal performance.",
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Process"
          title="How We Work"
          description="A systematic approach to deliver exceptional results for every project."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((process, index) => (
            <Card key={index}>
              <div className="text-5xl font-bold text-emerald-500/20 mb-4">
                {process.step}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                {process.title}
              </h3>
              <p className="text-slate-400">{process.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                  <svg
                    className="w-8 h-8erald-500/30"
                    fill=" text-emnone"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
