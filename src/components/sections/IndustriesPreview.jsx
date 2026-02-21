import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";

const IndustriesPreview = () => {
  const industries = [
    {
      icon: "🏥",
      title: "Healthcare",
      description: "Innovative solutions for modern healthcare challenges.",
      features: ["Telemedicine", "Health Records", "Patient Management"],
    },
    {
      icon: "🏦",
      title: "Finance",
      description: "Secure and efficient financial technology solutions.",
      features: ["Banking", "Payments", "Compliance"],
    },
    {
      icon: "🛒",
      title: "Retail",
      description: "Transforming retail experiences with digital innovation.",
      features: ["E-commerce", "Inventory", "CRM"],
    },
    {
      icon: "🏭",
      title: "Manufacturing",
      description: "Smart manufacturing solutions for Industry 4.0.",
      features: ["Automation", "IoT", "Analytics"],
    },
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Industries We Serve"
          title="Expertise Across Multiple Industries"
          description="We deliver tailored solutions across a diverse range of sectors."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <Card key={index} hover>
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {industry.title}
              </h3>
              <p className="text-slate-400 mb-4">{industry.description}</p>
              <ul className="space-y-2">
                {industry.features.map((feature, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-sm text-slate-500"
                  >
                    <svg
                      className="w-4 h-4 mr-2 text-emerald-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/industries">
            <Button variant="secondary">View All Industries</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesPreview;
