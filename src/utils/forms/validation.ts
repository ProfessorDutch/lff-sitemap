import type { FormData } from '../../components/ContactForm/types';
import type { AttorneyFormData } from '../../components/AttorneyReferralForm/types';

export const validateFormData = (data: FormData) => {
  const errors: Record<string, string> = {};

  // Required field validation
  if (!data.firstName.trim()) errors.firstName = 'First name is required';
  if (!data.lastName.trim()) errors.lastName = 'Last name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  if (!data.phone.trim()) errors.phone = 'Phone number is required';
  if (!data.zipCode.trim()) errors.zipCode = 'ZIP code is required';
  if (!data.caseType) errors.caseType = 'Case type is required';

  // Email validation
  if (data.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  // Phone validation (10 digits)
  if (data.phone && !/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) {
    errors.phone = 'Invalid phone number (must be 10 digits)';
  }

  // ZIP code validation (5 digits or 5+4)
  if (data.zipCode && !/^\d{5}(-\d{4})?$/.test(data.zipCode)) {
    errors.zipCode = 'Invalid ZIP code';
  }

  return errors;
};

export const validateAttorneyFormData = (data: AttorneyFormData) => {
  const errors: Record<string, string> = {};

  // Required field validation
  if (!data.firstName.trim()) errors.firstName = 'First name is required';
  if (!data.lastName.trim()) errors.lastName = 'Last name is required';
  if (!data.email.trim()) errors.email = 'Email is required';
  if (!data.phone.trim()) errors.phone = 'Phone number is required';
  if (!data.practiceType) errors.practiceType = 'Practice type is required';

  // Email validation
  if (data.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(data.email)) {
    errors.email = 'Invalid email address';
  }

  // Phone validation (10 digits)
  if (data.phone && !/^\d{10}$/.test(data.phone.replace(/\D/g, ''))) {
    errors.phone = 'Invalid phone number (must be 10 digits)';
  }

  return errors;
};