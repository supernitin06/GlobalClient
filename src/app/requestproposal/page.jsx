import React from "react";
import RfpHeroSection from "@/components/rfp/RfpHeroSection";
import RfpSectionsOverview from "@/components/rfp/RfpSectionsOverview";
import RfpFormSection from "@/components/rfp/RfpFormSection";
import { rfpSections, serviceTypes } from "@/components/rfp/rfpData";

const RequestProposal = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <RfpHeroSection />
            <RfpSectionsOverview sections={rfpSections} />
            <RfpFormSection serviceTypes={serviceTypes} />
        </div>
    );
};

export default RequestProposal;
