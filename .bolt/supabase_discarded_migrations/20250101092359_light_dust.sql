/*
  # Client Leads Table Schema

  1. New Tables
    - `leads` table for storing client inquiries
      - Contact info (name, email, phone)
      - Case details (type, location)
      - Payment information
      - Status tracking

  2. Security
    - Enable RLS
    - Add policies for anonymous inserts and authenticated reads
*/

-- Create leads table for client inquiries
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

-- Create policies
CREATE POLICY "leads_anon_insert"
ON leads FOR INSERT
TO anon
WITH CHECK (true);

CREATE POLICY "leads_auth_select"
ON leads FOR SELECT
TO authenticated
USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status);
CREATE INDEX IF NOT EXISTS leads_case_type_idx ON leads(case_type);
CREATE INDEX IF NOT EXISTS leads_zip_code_idx ON leads(zip_code);