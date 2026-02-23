'use client';

import React from "react";
import LegalLayout from "../../components/compliance/LegalLayout";
import heroImage from "../../assets/image/firmbee-com-gcsNOsPEXfs-unsplash.jpg";

const TermsConditions = () => (
    <LegalLayout
        eyebrow="Legal Page"
        title="Terms & Conditions"
        subtitle="Use of this website indicates acceptance of terms related to informational content, communication, and business engagement."
        image={heroImage}
        highlights={["Contract-Driven Scope", "Policy Updates", "Engagement Terms"]}
        sections={[
            {
                title: "Website Usage",
                description:
                    "Content on this website is provided for business reference. Users are responsible for reviewing and accepting terms before engagement.",
            },
            {
                title: "Commercial Scope",
                description:
                    "Final scope, pricing, timelines, and delivery commitments are governed only by executed contractual agreements.",
            },
            {
                title: "Policy and Service Updates",
                description: "Projects Global may update website content, services, and policies at any time without prior notice.",
            },
            {
                title: "Acceptance of Terms",
                description:
                    "Continued use of the website and form submissions indicate acceptance of these terms and related compliance obligations.",
            },
        ]}
    />
);

export default TermsConditions;



