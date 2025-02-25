import type { Database } from '../../types/database';

export type AttorneyLead = Database['public']['Tables']['attorney_leads']['Row'];
export type NewAttorneyLead = Database['public']['Tables']['attorney_leads']['Insert'];