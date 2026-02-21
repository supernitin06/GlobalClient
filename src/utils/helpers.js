/**
 * Formats a number as currency.
 * @param {number} amount - The numeric value to format.
 * @returns {string} - Formatted currency string.
 */
export const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

/**
 * Capitalizes the first letter of a string.
 */
export const capitalize = (str) => {
    if (!str) return '';
    return str.charAt(0).toUpperCase() + str.slice(1);
};
