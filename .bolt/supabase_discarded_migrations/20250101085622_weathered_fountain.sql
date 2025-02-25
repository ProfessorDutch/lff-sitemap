/*
  # Create leads and attorney leads tables with RLS policies

  1. New Tables
    - `leads`
      - Basic lead information (name, contact, case details)
      - Payment information
      - Status tracking
    - `attorney_leads` 
      - Attorney contact information
      - Practice area details
      - Status tracking

  2. Security
    - Enable RLS on both tables
    - Add policies for anonymous form submissions
    - Add policies for authenticated admin access
    - Add proper constraints and validations

  3. Indexes
    - Optimize common queries with appropriate indexes
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

-- Create attorney_leads table
CREATE TABLE IF NOT EXISTS attorney_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at TIMESTAMPTZ DEFAULT now(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL UNIQUE,
  phone TEXT NOT NULL,
  practice_type TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'new',
  notes TEXT,
  CONSTRAINT phone_format CHECK (phone ~ '^\d{10}$')
);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE attorney_leads ENABLE ROW LEVEL SECURITY;

-- Leads policies
CREATE POLICY "Enable anonymous lead submissions"
ON leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Enable lead viewing for authenticated users"
ON leads FOR SELECT
TO authenticated
USING (true);

-- Attorney leads policies
CREATE POLICY "Enable anonymous attorney lead submissions"
ON attorney_leads FOR INSERT
TO anon, authenticated
WITH CHECK (true);

CREATE POLICY "Enable attorney lead viewing for authenticated users"
ON attorney_leads FOR SELECT
TO authenticated
USING (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS leads_email_idx ON leads(email);
CREATE INDEX IF NOT EXISTS leads_status_idx ON leads(status);
CREATE INDEX IF NOT EXISTS leads_case_type_idx ON leads(case_type);
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads(created_at DESC);

CREATE INDEX IF NOT EXISTS attorney_leads_email_idx ON attorney_leads(email);
CREATE INDEX IF NOT EXISTS attorney_leads_status_idx ON attorney_leads(status);
CREATE INDEX IF NOT EXISTS attorney_leads_practice_type_idx ON attorney_leads(practice_type);
CREATE INDEX IF NOT EXISTS attorney_leads_created_at_idx ON attorney_leads(created_at DESC);