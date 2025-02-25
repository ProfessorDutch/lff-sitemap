export const API_ERROR_MESSAGES = {
  VALIDATION: {
    REQUIRED_FIELD: (field: string) => `${field} is required`,
    INVALID_EMAIL: 'Please enter a valid email address',
    INVALID_PHONE: 'Please enter a valid 10-digit phone number',
    INVALID_ZIP: 'Please enter a valid ZIP code'
  },
  NETWORK: {
    CONNECTION: 'Network connection error. Please check your connection and try again.',
    TIMEOUT: 'Request timed out. Please try again.'
  },
  DATABASE: {
    DUPLICATE: 'This record already exists',
    NOT_FOUND: 'Record not found',
    CONSTRAINT: 'Invalid data provided'
  }
} as const;