import { supabase } from '../../lib/supabase';
import { handleSupabaseError } from '../error';
import type { AttorneyLead, NewAttorneyLead } from './types';

export const attorneyLeadsApi = {
  getAll: async (): Promise<AttorneyLead[]> => {
    try {
      const { data, error } = await supabase
        .from('attorney_leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      throw handleSupabaseError(error);
    }
  },

  create: async (lead: NewAttorneyLead): Promise<AttorneyLead> => {
    try {
      const { data, error } = await supabase
        .from('attorney_leads')
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