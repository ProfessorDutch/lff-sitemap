export interface PaymentCalculations {
  caseAmount: number;
  standardMonthlyPayment: number;
  standardTotalPayment: number;
  downPayment: number;
  remainingBalance: number;
  monthlyInstallment: number;
  paymentPlanTotalCost: number;
}

export const calculatePayments = (caseAmount: number): PaymentCalculations => {
  // Standard Monthly Payments (Financing)
  const standardMonthlyPayment = (caseAmount / 1000) * 30;
  const standardTotalPayment = standardMonthlyPayment * 48;

  // Payment Plan Calculations
  const downPayment = caseAmount * 0.6;
  const remainingBalance = caseAmount - downPayment;
  const monthlyInstallment = remainingBalance / 4;
  
  // Calculate total cost with maximum APR (19.99%)
  const monthlyInterestRate = 0.1999 / 12; // 19.99% APR
  const financingFee = remainingBalance * monthlyInterestRate * 4;
  const paymentPlanTotalCost = caseAmount + financingFee;

  return {
    caseAmount,
    standardMonthlyPayment,
    standardTotalPayment,
    downPayment,
    remainingBalance,
    monthlyInstallment,
    paymentPlanTotalCost
  };
};