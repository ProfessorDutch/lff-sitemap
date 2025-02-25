export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      leads: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          email: string
          phone: string
          zip_code: string
          case_type: string
          city: string | null
          state: string | null
          status: string
          payment_option: string | null
          monthly_payment: number | null
          total_amount: number | null
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          zip_code: string
          case_type: string
          city?: string | null
          state?: string | null
          status?: string
          payment_option?: string | null
          monthly_payment?: number | null
          total_amount?: number | null
        }
      }
      attorney_leads: {
        Row: {
          id: string
          created_at: string
          first_name: string
          last_name: string
          email: string
          phone: string
          practice_type: string
          status: string
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          first_name: string
          last_name: string
          email: string
          phone: string
          practice_type: string
          status?: string
          notes?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}