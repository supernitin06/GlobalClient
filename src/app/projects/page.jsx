import React from "react";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectsFeaturedTopSection from "@/components/projects/ProjectsFeaturedTopSection";
import ProjectsOpportunitiesSection from "@/components/projects/ProjectsOpportunitiesSection";
import ProjectsUpcomingSection from "@/components/projects/ProjectsUpcomingSection";
import ProjectsTwoColumnSection from "@/components/projects/ProjectsTwoColumnSection";
import ProjectsEngagementSection from "@/components/projects/ProjectsEngagementSection";
import ProjectsClosingCtaSection from "@/components/projects/ProjectsClosingCtaSection";
import { campaignTypes, engagementModels, executionFramework, liveProjectOpportunities, upcomingProjects } from "@/components/projects/projectsData";

const Projects = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 pt-2 pb-6 sm:px-6 lg:px-8">
            <ProjectsHeroSection />
            <ProjectsFeaturedTopSection
                opportunities={liveProjectOpportunities}
                featuredLimit={liveProjectOpportunities.length}
            />
            <ProjectsOpportunitiesSection opportunities={liveProjectOpportunities} />
            <ProjectsUpcomingSection projects={upcomingProjects} />
            <ProjectsTwoColumnSection campaignTypes={campaignTypes} executionFramework={executionFramework} />
            <ProjectsEngagementSection engagementModels={engagementModels} />
            <ProjectsClosingCtaSection />
        </div>
    );
};

export default Projects;
