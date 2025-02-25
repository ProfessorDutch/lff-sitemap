-- Drop existing policies
DROP POLICY IF EXISTS "Allow public insertions" ON leads;
DROP POLICY IF EXISTS "Allow authenticated select" ON leads;
DROP POLICY IF EXISTS "enable_public_insert" ON leads;
DROP POLICY IF EXISTS "enable_auth_read" ON leads;

-- Create new policies with proper permissions
CREATE POLICY "allow_anon_insert" ON leads
FOR INSERT TO anon
WITH CHECK (true);

CREATE POLICY "allow_auth_select" ON leads
FOR SELECT TO authenticated
USING (true);