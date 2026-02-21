import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../ui/SectionTitle";
import Card from "../ui/Card";
import Button from "../ui/Button";

const ServicesPreview = () => {
  const services = [
    {
      icon: "🚀",
      title: "Digital Marketing",
      description:
        "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
    },
    {
      icon: "💻",
      title: "Web Development",
      description:
        "Custom web solutions built with cutting-edge technologies for optimal performance.",
    },
    {
      icon: "📱",
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    },
    {
      icon: "☁️",
      title: "Cloud Solutions",
      description:
        "Scalable cloud infrastructure and migration services for modern businesses.",
    },
  ];

  return (
    <section className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          subtitle="Our Services"
          title="Comprehensive Digital Solutions"
          description="We offer a wide range of services tailored to meet your unique business needs."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} hover>
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-slate-400 mb-4">{service.description}</p>
              <Link to="/services">
                <Button
                  variant="ghost"
                  size="small"
                  className="pl-0 hover:pl-2 transition-all"
                >
                  Learn More
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
          <Link to="/services">
            <Button variant="secondary">View All Services</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
