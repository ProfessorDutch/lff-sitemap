import { supabase } from '../../lib/supabase';
import { handleSupabaseError, ApiError } from '../error';
import { validateLead } from '../validation';
import type { Lead, NewLead } from './types';

export const leadsApi = {
  getAll: async (): Promise<Lead[]> => {
    try {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  create: async (lead: NewLead): Promise<Lead> => {
    // Validate lead data
    const validationErrors = validateLead(lead);
    if (validationErrors) {
      throw new ApiError(
        'Validation failed',
        'VALIDATION_ERROR',
        { details: validationErrors }
      );
    }

    try {
      const { data, error } = await supabase
        .from('leads')
        .insert(lead)
        .select()
        .single();

      if (error) throw error;
      if (!data) throw new Error('No data returned from insert');
      
      return data;
    } catch (error) {
      throw handleSupabaseError(error);
    }
  }
};