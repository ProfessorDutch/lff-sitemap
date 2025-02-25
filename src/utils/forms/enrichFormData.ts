import type { FormData } from '../../components/ContactForm/types';

export const enrichFormDataWithLocation = (
  formData: FormData,
  city?: string,
  state?: string
): FormData => {
  return {
    ...formData,
    city: city || formData.city,
    state: state || formData.state
  };
};