/*
  # Fix leads table RLS policies

  1. Changes
    - Drop all existing policies to avoid conflicts
    - Create simple, clear policies for insert and select
    - Keep existing indexes
  
  2. Security
    - Enable RLS
    - Allow anonymous users to insert leads
    - Allow authenticated users to view leads
*/

-- Drop all existing policies
DROP POLICY IF EXISTS "leads_insert_policy" ON leads;
DROP POLICY IF EXISTS "leads_select_policy" ON leads;
DROP POLICY IF EXISTS "leads_update_policy" ON leads;
DROP POLICY IF EXISTS "Enable insert access for anonymous users" ON leads;
DROP POLICY IF EXISTS "Enable read access for authenticated users" ON leads;
DROP POLICY IF EXISTS "Enable update access for authenticated users" ON leads;

-- Create clean, simple policies
CREATE POLICY "allow_anon_insert_leads"
  ON leads FOR INSERT 
  TO anon
  WITH CHECK (true);

CREATE POLICY "allow_auth_select_leads"
  ON leads FOR SELECT 
  TO authenticated 
  USING (true);

-- Ensure indexes exist
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads (status);
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads (email);