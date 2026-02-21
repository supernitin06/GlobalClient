import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";

const CampaignPreview = () => {
  const campaigns = [
    {
      title: "Digital Transformation",
      description:
        "Modernize your business with our comprehensive digital transformation solutions.",
      image: "DT",
      category: "Strategy",
    },
    {
      title: "Cloud Migration",
      description:
        "Seamlessly migrate your infrastructure to the cloud for better scalability.",
      image: "CM",
      category: "Technology",
    },
    {
      title: "Customer Experience",
      description:
        "Create memorable customer experiences that drive loyalty and growth.",
      image: "CE",
      category: "Marketing",
    },
  ];

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Recent Work"
          title="Featured Campaigns"
          description="Explore our latest projects and success stories."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <Card key={index} hover className="group">
              <div className="relative h-48 -mx-6 -mt-6 mb-4 bg-gradient-to-br from-emerald-500/20 to-cyan-500/20 rounded-t-2xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/10">
                    {campaign.image}
                  </span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full">
                    {campaign.category}
                  </span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
                {campaign.title}
              </h3>
              <p className="text-slate-400 mb-4">{campaign.description}</p>
              <Link to="/projects">
                <Button variant="ghost" size="small" className="pl-0">
                  View Project
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
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
                </Button>
              </Link>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/projects">
            <Button variant="secondary">View All Projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CampaignPreview;
