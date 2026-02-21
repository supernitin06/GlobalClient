const validateField = (name, value) => {
    switch (name) {
        case 'name':
            if (!value || value.trim() === '') {
                return 'Name is required';
            }
            if (value.trim().length < 2) {
                return 'Name must be at least 2 characters';
            }
            return null;

        case 'email':
            if (!value || value.trim() === '') {
                return 'Email is required';
            }
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return 'Please enter a valid email address';
            }
            return null;

        case 'phone':
            if (value) {
                const phoneRegex = /^[\d\s\-+\(\)]+$/;
                if (!phoneRegex.test(value)) {
                    return 'Please enter a valid phone number';
                }
            }
            return null;

        case 'subject':
            if (!value || value.trim() === '') {
                return 'Please select a subject';
            }
            return null;

        case 'message':
            if (!value || value.trim() === '') {
                return 'Message is required';
            }
            if (value.trim().length < 10) {
                return 'Message must be at least 10 characters';
            }
            return null;

        default:
            return null;
    }
};

const validateContactForm = (formData) => {
    const errors = {};

    Object.keys(formData).forEach((field) => {
        const error = validateField(field, formData[field]);
        if (error) {
            errors[field] = error;
        }
    });

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export { validateField, validateContactForm };