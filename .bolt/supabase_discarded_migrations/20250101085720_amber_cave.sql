/*
  # Create leads table with proper RLS policies

  1. New Tables
    - `leads`
      - Basic lead information
      - Payment details
      - Status tracking
      - Proper constraints and validation

  2. Security
    - Enable RLS
    - Allow anonymous submissions
    - Allow authenticated viewing
    - Add proper indexes
*/

-- Create leads table
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  case_type TEXT NOT NULL,
  city TEXT,
  state TEXT,
  status TEXT NOT NULL DEFAULT 'new',
  payment_option TEXT,
  monthly_payment DECIMAL,
  total_amount DECIMAL,
  CONSTRAINT phone_format CHECK (phone ~ '^\d{10}$'),
  CONSTRAINT zip_format CHECK (zip_code ~ '^\d{5}(-\d{4})?$')
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Create RLS policies
CREATE POLICY "Enable anonymous lead submissions"
ON leads FOR INSERT 
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Enable lead viewing for authenticated users"
ON leads FOR SELECT
TO authenticated
USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status);
CREATE INDEX IF NOT EXISTS leads_case_type_idx ON leads(case_type);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);