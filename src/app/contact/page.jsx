import React from "react";
import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import ContactFormSection from "@/components/contact/ContactFormSection";
import { contactInfo } from "@/components/contact/contactData";

const Contact = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 pt-2 pb-6 sm:px-6 lg:px-8">
            <ContactHeroSection />
            <section className="mt-6 grid gap-6 lg:grid-cols-2">
                <ContactInfoSection info={contactInfo} />
                <ContactFormSection />
            </section>
        </div>
    );
};

export default Contact;
