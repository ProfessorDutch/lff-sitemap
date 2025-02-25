import type { Database } from '../../types/database';

export type Lead = Database['public']['Tables']['leads']['Row'];
export type NewLead = Database['public']['Tables']['leads']['Insert'];