import type { AttorneyFormData, AttorneyFormErrors } from './types';

export const validateAttorneyForm = (data: AttorneyFormData): AttorneyFormErrors => {
  const errors: AttorneyFormErrors = {};

  // First Name
  if (!data.firstName.trim()) {
    errors.firstName = 'First name is required';
  } else if (data.firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters';
  }

  // Last Name
  if (!data.lastName.trim()) {
    errors.lastName = 'Last name is required';
  } else if (data.lastName.length < 2) {
    errors.lastName = 'Last name must be at least 2 characters';
  }

  // Email
  if (!data.email.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = 'Please enter a valid email address';
  }

  // Phone - only validate digits
  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required';
  } else {
    const phoneDigits = data.phone.replace(/\D/g, '');
    if (phoneDigits.length !== 10) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
  }

  // Practice Type
  if (!data.practiceType) {
    errors.practiceType = 'Please select your practice area';
  }

  return errors;
};