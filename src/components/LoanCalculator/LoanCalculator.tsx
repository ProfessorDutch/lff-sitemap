import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import { CalculatorHeader } from './components/CalculatorHeader';
import { AmountSlider } from './components/AmountSlider';
import { PaymentOptions } from './components/PaymentOptions';
import { ContactForm } from '../ContactForm';
import { submitLead } from '../../utils/forms/submitLead';
import { calculatePayments } from './utils/calculations';
import type { PaymentOption } from './types';
import { loanCalculatorStyles as styles } from './LoanCalculator.styles';
import { AlertCircle } from 'lucide-react';

interface LoanCalculatorProps {
  className?: string;
  practiceArea: string;
  location: string;
}

export const LoanCalculator: FC<LoanCalculatorProps> = ({ 
  className = '',
  practiceArea,
  location
}) => {
  const [caseAmount, setCaseAmount] = useState(10000);
  const [selectedPayment, setSelectedPayment] = useState<PaymentOption | null>(null);
  const payments = calculatePayments(caseAmount);
  
  const handlePaymentSelect = (option: PaymentOption) => {
    setSelectedPayment(option);
    setTimeout(() => {
      const contactForm = document.getElementById('contact-form');
      if (contactForm) {
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleFormSubmit = async (formData: any) => {
    return submitLead(formData, selectedPayment);
  };

  return (
    <div className={`${styles.wrapper} ${className}`}>
      <CalculatorHeader />
      <div className={styles.sliderContainer}>
        <AmountSlider 
          value={caseAmount}
          onChange={setCaseAmount}
        />
        <PaymentOptions 
          payments={payments}
          onSelect={handlePaymentSelect}
        />
      </div>
      <div className="mt-8 bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-700">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-semibold">Important:</span> Payment calculations are estimates. 
            <span className="font-medium"> Financing requires credit approval, and APR varies.</span>
            <br />
            <span className="text-blue-600">We are not the lender or your attorney.</span> Local law firms in our network provide these plans, but availability varies by area.
          </div>
        </div>
      </div>
      {selectedPayment && (
        <div id="contact-form" className="mt-12">
          <ContactForm
            selectedPayment={selectedPayment}
            onSubmit={handleFormSubmit}
          />
        </div>
      )}
    </div>
  );
};