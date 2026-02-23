import React from "react";
import HomeHeroSection from "@/components/home/HomeHeroSection";
import HomeAboutServicesSection from "@/components/home/HomeAboutServicesSection";
import HomeWhyChooseSection from "@/components/home/HomeWhyChooseSection";
import HomeIndustriesProcessSection from "@/components/home/HomeIndustriesProcessSection";
import HomeCampaignsSection from "@/components/home/HomeCampaignsSection";
import HomePartnerCtaSection from "@/components/home/HomePartnerCtaSection";
import HomeStatsSection from "@/components/home/HomeStatsSection";
import HomeComplianceSection from "@/components/home/HomeComplianceSection";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import HomeBlogSection from "@/components/home/HomeBlogSection";
import {
  blogs,
  campaigns,
  compliancePoints,
  faqItems,
  impactStats,
  industries,
  processSteps,
  services,
  supportChannels,
  trustHighlights,
  whyChooseUs,
} from "@/components/home/homeData";

const Home = () => {
  return (
    <div className="relative overflow-hidden pb-0">
      <div className="pointer-events-none absolute -left-24 top-32 h-72 w-72 rounded-full bg-[rgba(15,23,42,0.11)] blur-3xl" />
      <div className="pointer-events-none absolute -right-28 top-[42rem] h-80 w-80 rounded-full bg-[rgba(255,193,7,0.12)] blur-3xl" />
      <HomeHeroSection supportChannels={supportChannels} trustHighlights={trustHighlights} />
      <HomeStatsSection stats={impactStats} />
      <HomeAboutServicesSection services={services} />
      <HomeWhyChooseSection whyChooseUs={whyChooseUs} />
      <HomeIndustriesProcessSection industries={industries} processSteps={processSteps} />
      {/* <HomeCampaignsSection campaigns={campaigns} /> */}
      <HomeBlogSection blogs={blogs} />
      {/* <HomeComplianceSection compliancePoints={compliancePoints} /> */}
      <HomeFaqSection faqItems={faqItems} />
      <div className="mb-4">
      <HomePartnerCtaSection />
      </div>
    </div>
  );
};

export default Home;
