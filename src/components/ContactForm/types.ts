import type { PaymentOption } from '../LoanCalculator/types';

export interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  caseType: string;
  city?: string;
  state?: string;
}

export interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  zipCode?: string;
  caseType?: string;
}

export interface ContactFormProps {
  className?: string;
  selectedPayment?: PaymentOption | null;
  onSubmit?: (data: FormData) => Promise<void>;
}