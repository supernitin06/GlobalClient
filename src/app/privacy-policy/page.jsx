import React from "react";
import LegalLayout from "../../components/compliance/LegalLayout";
import heroImage from "../../assets/image/representation-user-experience-interface-design.jpg";

const PrivacyPolicy = () => (
  <LegalLayout
    eyebrow="Legal Page"
    title="Privacy Policy"
    subtitle="Projects Global collects only business-relevant information submitted through enquiry and registration forms for consultation, project evaluation, and service communication."
    image={heroImage}
    highlights={["Confidential Handling", "Restricted Access", "No Data Sale"]}
    sections={[
      {
        title: "Information Use",
        description:
          "We use submitted details strictly for consultation support, outsourcing evaluation, and service communication workflows.",
      },
      {
        title: "Data Protection Commitment",
        description:
          "Data is handled under confidentiality controls, access restrictions, and compliance procedures across all engagement stages.",
      },
      {
        title: "Third-Party Sharing",
        description:
          "Projects Global does not sell personal or business data. Information sharing is limited to contractual and operational necessity.",
      },
      {
        title: "Privacy Contact",
        description: "For privacy-related queries and clarification requests, contact: info@projectsglobal.in.",
      },
    ]}
  />
);

export default PrivacyPolicy;



