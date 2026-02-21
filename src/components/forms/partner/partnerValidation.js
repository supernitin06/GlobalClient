export const validatePartnerForm = (formData, schema) => {
    const errors = {};

    Object.keys(schema).forEach((field) => {
        const rules = schema[field];
        const value = formData[field];

        // Required check
        if (rules.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
            errors[field] = rules.required;
            return;
        }

        // Pattern validation
        if (rules.pattern && value) {
            if (!rules.pattern.value.test(value)) {
                errors[field] = rules.pattern.message;
                return;
            }
        }

        // Custom validation function
        if (rules.validate) {
            const result = rules.validate(value);
            if (result !== true) {
                errors[field] = result;
                return;
            }
        }

        // Min/Max length for strings
        if (rules.minLength && value && value.length < rules.minLength) {
            errors[field] = `Minimum ${rules.minLength} characters required`;
        }

        if (rules.maxLength && value && value.length > rules.maxLength) {
            errors[field] = `Maximum ${rules.maxLength} characters allowed`;
        }
    });

    return {
        isValid: Object.keys(errors).length === 0,
        errors,
    };
};

export const validateField = (name, value, schema) => {
    const fieldSchema = schema[name];
    if (!fieldSchema) return null;

    // Required check
    if (fieldSchema.required && (!value || (typeof value === 'string' && value.trim() === ''))) {
        return fieldSchema.required;
    }

    // Pattern validation
    if (fieldSchema.pattern && value) {
        if (!fieldSchema.pattern.value.test(value)) {
            return fieldSchema.pattern.message;
        }
    }

    // Custom validation
    if (fieldSchema.validate) {
        const result = fieldSchema.validate(value);
        if (result !== true) {
            return result;
        }
    }

    return null;
};