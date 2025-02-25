import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from '../config/supabase';
import type { Database } from '../types/database';

export const supabase = createClient<Database>(
  SUPABASE_CONFIG.url,
  SUPABASE_CONFIG.anonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  }
);