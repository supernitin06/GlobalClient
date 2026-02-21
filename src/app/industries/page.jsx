import React from "react";
import IndustriesHeroSection from "@/components/industries/IndustriesHeroSection";
import IndustriesIntroSection from "@/components/industries/IndustriesIntroSection";
import IndustriesGridSection from "@/components/industries/IndustriesGridSection";
import IndustriesClosingCtaSection from "@/components/industries/IndustriesClosingCtaSection";
import { industriesData } from "@/components/industries/industriesData";

const Industries = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <IndustriesHeroSection />
            <IndustriesIntroSection />
            <IndustriesGridSection industries={industriesData} />
            <IndustriesClosingCtaSection />
        </div>
    );
};

export default Industries;
