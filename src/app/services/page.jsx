import React from "react";
import ServicesHeroSection from "@/components/services/ServicesHeroSection";
import ServicesCardsSection from "@/components/services/ServicesCardsSection";
import ServicesModelsReportingSection from "@/components/services/ServicesModelsReportingSection";
import ServicesClosingCtaSection from "@/components/services/ServicesClosingCtaSection";
import { engagementModels, reportingMonitoring, servicesData } from "@/components/services/servicesData";

const Services = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <ServicesHeroSection />
            <ServicesCardsSection services={servicesData} />
            <ServicesModelsReportingSection engagementModels={engagementModels} reportingMonitoring={reportingMonitoring} />
            <ServicesClosingCtaSection />
        </div>
    );
};

export default Services;
