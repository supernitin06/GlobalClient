import React from "react";
import ProjectsHeroSection from "@/components/projects/ProjectsHeroSection";
import ProjectsTwoColumnSection from "@/components/projects/ProjectsTwoColumnSection";
import ProjectsEngagementSection from "@/components/projects/ProjectsEngagementSection";
import ProjectsClosingCtaSection from "@/components/projects/ProjectsClosingCtaSection";
import { campaignTypes, engagementModels, executionFramework } from "@/components/projects/projectsData";

const Projects = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <ProjectsHeroSection />
            <ProjectsTwoColumnSection campaignTypes={campaignTypes} executionFramework={executionFramework} />
            <ProjectsEngagementSection engagementModels={engagementModels} />
            <ProjectsClosingCtaSection />
        </div>
    );
};

export default Projects;
