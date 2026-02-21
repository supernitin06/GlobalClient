export const rfpValidation = (formData) => {
    const errors = {};

    // Company Name validation
    if (!formData.companyName ? .trim()) {
        errors.companyName = 'Company name is required';
    } else if (formData.companyName.trim().length < 2) {
        errors.companyName = 'Company name must be at least 2 characters';
    }

    // Contact Name validation
    if (!formData.contactName ? .trim()) {
        errors.contactName = 'Contact name is required';
    } else if (formData.contactName.trim().length < 2) {
        errors.contactName = 'Contact name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email ? .trim()) {
        errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        errors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone ? .trim()) {
        errors.phone = 'Phone number is required';
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
        errors.phone = 'Please enter a valid phone number';
    }

    // Service Type validation
    if (!formData.serviceType) {
        errors.serviceType = 'Please select a service type';
    }

    // Project Budget validation
    if (!formData.projectBudget) {
        errors.projectBudget = 'Please select a budget range';
    }

    // Project Timeline validation
    if (!formData.projectTimeline) {
        errors.projectTimeline = 'Please select a timeline';
    }

    // Project Description validation
    if (!formData.projectDescription ? .trim()) {
        errors.projectDescription = 'Project description is required';
    } else if (formData.projectDescription.trim().length < 20) {
        errors.projectDescription = 'Please provide more details (at least 20 characters)';
    }

    // Terms agreement validation
    if (!formData.agreedToTerms) {
        errors.agreedToTerms = 'You must agree to the terms and conditions';
    }

    return errors;
};

export default rfpValidation;