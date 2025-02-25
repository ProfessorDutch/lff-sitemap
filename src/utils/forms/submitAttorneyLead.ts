import { supabase } from '../../lib/supabase';
import type { AttorneyFormData } from '../../components/AttorneyReferralForm/types';

export const submitAttorneyLead = async (formData: AttorneyFormData) => {
  try {
    // Format phone number to just digits
    const phoneDigits = formData.phone.replace(/\D/g, '');
    
    // Validate phone number format
    if (phoneDigits.length !== 10) {
      throw new Error('Phone number must be exactly 10 digits');
    }

    const { error: insertError } = await supabase
      .from('attorney_leads')
      .insert({
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: phoneDigits,
        practice_type: formData.practiceType,
        status: 'new'
      });

    if (insertError) {
      console.error('Attorney lead submission error:', insertError);
      
      if (insertError.code === '23505') {
        throw new Error('An attorney with this email already exists');
      }

      if (insertError.code === '23514') {
        throw new Error('Please enter a valid 10-digit phone number');
      }

      throw new Error('Failed to submit form. Please try again.');
    }

    return { success: true };
  } catch (error) {
    console.error('Error in submitAttorneyLead:', error);
    throw error instanceof Error ? error : new Error('An unexpected error occurred');
  }
};