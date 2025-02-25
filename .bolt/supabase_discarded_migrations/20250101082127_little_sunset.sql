/*
  # Update attorney leads RLS policies

  1. Changes
    - Drop existing RLS policies
    - Create new comprehensive RLS policies for attorney_leads table
    - Add policies for anonymous insertions and authenticated reads
  
  2. Security
    - Enable RLS
    - Allow anonymous users to insert records
    - Allow authenticated users to read records
*/

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON attorney_leads;
DROP POLICY IF EXISTS "Enable select for authenticated users" ON attorney_leads;

-- Ensure RLS is enabled
ALTER TABLE attorney_leads ENABLE ROW LEVEL SECURITY;

-- Create new policies
CREATE POLICY "Allow anonymous inserts to attorney_leads"
ON attorney_leads FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "Allow authenticated reads of attorney_leads"
ON attorney_leads FOR SELECT
TO authenticated
USING (true);

-- Add policy for authenticated inserts as well
CREATE POLICY "Allow authenticated inserts to attorney_leads"
ON attorney_leads FOR INSERT
TO authenticated
WITH CHECK (true);