import { validateEnvVar } from './env';

export const SUPABASE_CONFIG = {
  url: validateEnvVar('VITE_SUPABASE_URL', import.meta.env.VITE_SUPABASE_URL),
  anonKey: validateEnvVar('VITE_SUPABASE_ANON_KEY', import.meta.env.VITE_SUPABASE_ANON_KEY),
} as const;

export type SupabaseConfig = typeof SUPABASE_CONFIG;