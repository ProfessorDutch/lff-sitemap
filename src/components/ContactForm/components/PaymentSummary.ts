import React from 'react';
import type { FC } from 'react';
import { DollarSign, Calendar, Clock } from 'lucide-react';
import type { PaymentOption } from '../../LoanCalculator/types';
import { formatCurrency } from '../../../utils/formatting/currency';

interface PaymentSummaryProps {
  payment: PaymentOption;
}

export const PaymentSummary: FC<PaymentSummaryProps> = ({ payment }) => 
  React.createElement('div', {
    className: "bg-gray-50 rounded-lg p-6 mb-8"
  }, [
    React.createElement('h4', {
      key: 'title',
      className: "text-lg font-semibold text-[--secondary] mb-4"
    }, payment.type === 'financing' ? 'Monthly Financing Selected' : '4-Month Payment Plan Selected'),
    React.createElement('div', {
      key: 'details',
      className: "space-y-3"
    }, [
      React.createElement('div', {
        key: 'amount',
        className: "flex items-center justify-between"
      }, [
        React.createElement('div', {
          className: "flex items-center gap-2"
        }, [
          React.createElement(DollarSign, {
            className: "w-4 h-4 text-[--primary]"
          }),
          React.createElement('span', {}, "Total Amount")
        ]),
        React.createElement('span', {
          className: "font-semibold"
        }, formatCurrency(payment.amount))
      ]),
      React.createElement('div', {
        key: 'monthly',
        className: "flex items-center justify-between"
      }, [
        React.createElement('div', {
          className: "flex items-center gap-2"
        }, [
          React.createElement(Calendar, {
            className: "w-4 h-4 text-[--primary]"
          }),
          React.createElement('span', {}, "Monthly Payment")
        ]),
        React.createElement('span', {
          className: "font-semibold"
        }, formatCurrency(payment.monthlyPayment))
      ]),
      React.createElement('div', {
        key: 'term',
        className: "flex items-center justify-between"
      }, [
        React.createElement('div', {
          className: "flex items-center gap-2"
        }, [
          React.createElement(Clock, {
            className: "w-4 h-4 text-[--primary]"
          }),
          React.createElement('span', {}, "Term")
        ]),
        React.createElement('span', {
          className: "font-semibold"
        }, payment.term)
      ])
    ])
  ]);