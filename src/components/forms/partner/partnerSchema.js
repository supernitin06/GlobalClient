export const initialFormData = {
    // Company Info
    companyName: '',
    website: '',
    yearEstablished: '',
    headquarters: '',
    employeeCount: '',
    annualRevenue: '',
    businessType: '',
    companyDescription: '',

    // Contact Person
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    contactPosition: '',

    // Capacity
    seatsAvailable: '',
    agentsCurrentlyDeployed: '',
    languagesSupported: [],
    shiftsCovered: [],
    minProjectSize: '',

    // Experience
    yearsInBPO: '',
    currentClients: '',
    relevantExperience: '',
    certifications: [],
    keyClients: '',

    // Infrastructure
    locationType: '',
    bandwidth: '',
    powerBackup: '',
    security: '',

    // Compliance
    dataSecurity: '',
    complianceFrameworks: [],
    auditReports: '',

    // Additional
    additionalNotes: '',
    termsAccepted: false,
};

export const partnerSchema = {
    companyName: { required: 'Company name is required' },
    contactName: { required: 'Contact name is required' },
    contactEmail: {
        required: 'Email is required',
        pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email format' }
    },
    contactPhone: { required: 'Phone number is required' },
    employeeCount: { required: 'Employee count is required' },
    seatsAvailable: { required: 'Number of seats is required' },
    agentsCurrentlyDeployed: { required: 'Number of agents is required' },
    locationType: { required: 'Location type is required' },
    bandwidth: { required: 'Bandwidth is required' },
    dataSecurity: { required: 'Data security level is required' },
    termsAccepted: {
        validate: (value) => value === true || 'You must accept the terms and conditions'
    },
};