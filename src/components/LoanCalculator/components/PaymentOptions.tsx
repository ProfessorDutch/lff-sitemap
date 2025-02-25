import React from 'react';
import type { FC } from 'react';
import { DollarSign, Calendar, PiggyBank, CreditCard, TrendingUp } from 'lucide-react';
import { formatCurrency } from '../../../utils/formatting/currency';
import type { PaymentCalculations, PaymentOption } from '../types';
import { loanCalculatorStyles as styles } from '../LoanCalculator.styles';

interface PaymentOptionsProps {
  payments: PaymentCalculations;
  onSelect?: (option: PaymentOption) => void;
}

export const PaymentOptions: FC<PaymentOptionsProps> = ({ payments, onSelect }) => {
  const handleSelect = (type: 'financing' | 'payment-plan') => () => {
    if (onSelect) {
      onSelect({
        type,
        amount: payments.caseAmount,
        monthlyPayment: type === 'financing' ? payments.standardMonthlyPayment : payments.monthlyInstallment,
        term: type === 'financing' ? '48 months' : '4 months'
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-[--primary] mb-2">
          Choose from These Payment Plans
        </h3>
        <p className="text-lg text-gray-700">
          Local law firms in our network currently offer these payment plans
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {/* Financing Option */}
        <button
          onClick={handleSelect('financing')}
          className={`${styles.optionCard} border-[--primary] hover:shadow-lg hover:scale-[1.02] text-left`}
        >
          <div className={styles.optionHeader}>
            <h4 className={styles.optionTitle}>Monthly Financing</h4>
            <span className="px-3 py-1 text-sm font-medium text-white bg-[--primary] rounded-full">Recommended</span>
          </div>
          
          <div className={styles.results}>
            <div className={styles.resultRow}>
              <div className="flex items-center gap-2">
                <PiggyBank className="w-4 h-4 text-[--primary]" />
                <span className={styles.resultLabel}>Monthly Payment</span>
              </div>
              <span className={styles.resultValue}>{formatCurrency(payments.standardMonthlyPayment)}</span>
            </div>
            
            <div className={styles.resultRow}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[--primary]" />
                <span className={styles.resultLabel}>Loan Term</span>
              </div>
              <span className={styles.resultValue}>48 months</span>
            </div>
            
            <div className={styles.resultRow}>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[--primary]" />
                <span className={styles.resultLabel}>APR Range</span>
              </div>
              <span className={styles.resultValue}>5.99% - 35.99%</span>
            </div>
            
            <div className={styles.divider} />
            
            <div className={styles.resultRow}>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[--primary]" />
                <span className={styles.resultLabel}>Total Cost</span>
              </div>
              <span className={styles.resultValue}>{formatCurrency(payments.standardTotalPayment)}</span>
            </div>
          </div>

          <div className="mt-8 text-[--primary] font-medium">
            Connect to a law firm offering this option →
          </div>
        </button>

        {/* Payment Plan Option */}
        <button
          onClick={handleSelect('payment-plan')}
          className={`${styles.optionCard} border-gray-200 hover:border-[--primary] hover:shadow-lg hover:scale-[1.02] text-left`}
        >
          <div className={styles.optionHeader}>
            <h4 className={styles.optionTitle}>4-Month Payment Plan</h4>
          </div>
          
          <div className={styles.results}>
            <div className={styles.resultRow}>
              <div className="flex items-center gap-2">
                <DollarSign className="w-4 h-4 text-[--primary]" />
                <span className={styles.resultLabel}>Down Payment (60%)</span>
              </div>
              <span className={styles.resultValue}>{formatCurrency(payments.downPayment)}</span>
            </div>
            
            <div className={styles.resultRow}>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[--primary]" />
                <span className={styles.resultLabel}>Monthly Payment</span>
              </div>
              <span className={styles.resultValue}>{formatCurrency(payments.monthlyInstallment)}</span>
            </div>
            
            <div className={styles.resultRow}>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[--primary]" />
                <span className={styles.resultLabel}>APR Range</span>
              </div>
              <span className={styles.resultValue}>0% - 19.99%</span>
            </div>
            
            <div className={styles.divider} />
            
            <div className={styles.resultRow}>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-[--primary]" />
                <span className={styles.resultLabel}>Total Cost</span>
              </div>
              <span className={styles.resultValue}>{formatCurrency(payments.paymentPlanTotalCost)}</span>
            </div>
          </div>

          <div className="mt-8 text-[--primary] font-medium">
            Connect to a law firm offering this option →
          </div>
        </button>
      </div>
    </div>
  );
};