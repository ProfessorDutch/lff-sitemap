export interface PaymentOption {
  type: 'financing' | 'payment-plan';
  amount: number;
  monthlyPayment: number;
  term: string;
}

export interface PaymentCalculations {
  caseAmount: number;
  standardMonthlyPayment: number;
  standardTotalPayment: number;
  downPayment: number;
  remainingBalance: number;
  monthlyInstallment: number;
}

export interface LoanCalculatorProps {
  className?: string;
  practiceArea: string;
  location: string;
}