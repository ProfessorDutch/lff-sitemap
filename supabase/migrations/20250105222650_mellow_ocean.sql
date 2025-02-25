-- Drop existing policies
DROP POLICY IF EXISTS "enable_public_insert_attorney_leads" ON attorney_leads;
DROP POLICY IF EXISTS "enable_auth_read_attorney_leads" ON attorney_leads;

-- Create new policies matching the working leads table policies
CREATE POLICY "allow_anon_insert" ON attorney_leads
FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "allow_auth_select" ON attorney_leads
FOR SELECT TO authenticated
USING (true);