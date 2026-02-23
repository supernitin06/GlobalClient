'use client';

import React from "react";
import LegalLayout from "../../components/compliance/LegalLayout";
import heroImage from "../../assets/image/data-information-report-statistics-strategy-concept.jpg";

const Disclaimer = () => (
    <LegalLayout
        eyebrow="Legal Page"
        title="Disclaimer"
        subtitle="Information on this website is provided for general business reference and does not constitute a binding offer, guaranteed campaign allocation, or legal commitment of performance."
        image={heroImage}
        highlights={["General Information", "Non-Binding Content", "Contractual Confirmation"]}
        sections={[
            {
                title: "Nature of Website Information",
                description:
                    "All content is intended for informational and introductory business purposes only and may be updated without prior notice.",
            },
            {
                title: "No Guaranteed Allocation",
                description:
                    "Website content does not guarantee campaign allocation, fixed project onboarding, or assured commercial outcomes.",
            },
            {
                title: "Operational Verification",
                description:
                    "Final obligations remain subject to due diligence, operational verification, and signed agreements between involved parties.",
            },
            {
                title: "Legal Scope",
                description:
                    "Any legal and commercial obligations are valid only when formally documented and mutually executed in contractual format.",
            },
        ]}
    />
);

export default Disclaimer;



