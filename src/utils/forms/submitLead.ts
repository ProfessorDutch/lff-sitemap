import { supabase } from '../../lib/supabase';
import type { FormData } from '../../components/ContactForm/types';
import type { PaymentOption } from '../../components/LoanCalculator/types';

export const submitLead = async (formData: FormData, paymentOption?: PaymentOption | null) => {
  try {
    // Format phone number to just digits
    const phoneDigits = formData.phone.replace(/\D/g, '');
    
    const { error } = await supabase
      .from('leads')
      .insert({
        first_name: formData.firstName.trim(),
        last_name: formData.lastName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: phoneDigits,
        zip_code: formData.zipCode.trim(),
        case_type: formData.caseType,
        city: formData.city?.trim(),
        state: formData.state?.trim(),
        status: 'new',
        payment_option: paymentOption?.type,
        monthly_payment: paymentOption?.monthlyPayment,
        total_amount: paymentOption?.amount
      });

    if (error) {
      console.error('Lead submission error:', error);
      throw new Error('Failed to submit form. Please try again.');
    }

    return { success: true };
  } catch (error) {
    console.error('Error in submitLead:', error);
    throw error instanceof Error ? error : new Error('An unexpected error occurred');
  }
};