import { API_ERROR_MESSAGES } from './constants';

export const validateEmail = (email: string): boolean => {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const digits = phone.replace(/\D/g, '');
  return digits.length === 10;
};

export const validateZipCode = (zipCode: string): boolean => {
  return /^\d{5}(-\d{4})?$/.test(zipCode);
};

export const formatPhone = (phone: string): string => {
  return phone.replace(/\D/g, '');
};

export const validateLead = (data: Record<string, unknown>) => {
  const errors: Record<string, string> = {};

  if (!data.email || !validateEmail(data.email as string)) {
    errors.email = API_ERROR_MESSAGES.VALIDATION.INVALID_EMAIL;
  }

  if (!data.phone || !validatePhone(data.phone as string)) {
    errors.phone = API_ERROR_MESSAGES.VALIDATION.INVALID_PHONE;
  }

  if (!data.zipCode || !validateZipCode(data.zipCode as string)) {
    errors.zipCode = API_ERROR_MESSAGES.VALIDATION.INVALID_ZIP;
  }

  return Object.keys(errors).length > 0 ? errors : null;
};