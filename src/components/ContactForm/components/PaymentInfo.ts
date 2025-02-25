import React from 'react';
import type { FC } from 'react';
import { DollarSign, Calendar, Clock } from 'lucide-react';
import type { PaymentOption } from '../types';
import { formatCurrency } from '../../../utils/formatting/currency';
import { contactFormStyles as styles } from '../ContactForm.styles';

interface PaymentInfoProps {
  payment: PaymentOption;
}

export const PaymentInfo: FC<PaymentInfoProps> = ({ payment }) => 
  React.createElement('div', {
    className: "bg-gray-50 rounded-lg p-5 mb-6 border border-gray-200"
  }, [
    React.createElement('h4', {
      key: 'heading',
      className: "text-base font-semibold text-[--secondary] mb-3"
    }, payment.type === 'financing' ? 'Monthly Financing Selected' : '4-Month Payment Plan Selected'),
    React.createElement('div', {
      key: 'details',
      className: "space-y-2.5"
    }, [
      React.createElement('div', {
        key: 'amount',
        className: "flex items-center justify-between"
      }, [
        React.createElement('div', {
          key: 'label',
          className: "flex items-center gap-2"
        }, [
          React.createElement(DollarSign, {
            key: 'icon',
            className: "w-4 h-4 text-[--primary]"
          }),
          React.createElement('span', {
            key: 'text',
            className: "text-sm"
          }, "Total Amount")
        ]),
        React.createElement('span', {
          key: 'value',
          className: "font-semibold text-sm"
        }, formatCurrency(payment.amount))
      ]),
      payment.type === 'payment-plan' && React.createElement('div', {
        key: 'downpayment',
        className: "flex items-center justify-between"
      }, [
        React.createElement('div', {
          key: 'label',
          className: "flex items-center gap-2"
        }, [
          React.createElement(DollarSign, {
            key: 'icon',
            className: "w-4 h-4 text-[--primary]"
          }),
          React.createElement('span', {
            key: 'text',
            className: "text-sm"
          }, "Down Payment (60%)")
        ]),
        React.createElement('span', {
          key: 'value',
          className: "font-semibold text-sm"
        }, formatCurrency(payment.amount * 0.6))
      ]),
      React.createElement('div', {
        key: 'monthly',
        className: "flex items-center justify-between"
      }, [
        React.createElement('div', {
          key: 'label',
          className: "flex items-center gap-2"
        }, [
          React.createElement(Calendar, {
            key: 'icon',
            className: "w-4 h-4 text-[--primary]"
          }),
          React.createElement('span', {
            key: 'text',
            className: "text-sm"
          }, "Monthly Payment")
        ]),
        React.createElement('span', {
          key: 'value',
          className: "font-semibold text-sm"
        }, formatCurrency(payment.monthlyPayment))
      ]),
      React.createElement('div', {
        key: 'term',
        className: "flex items-center justify-between"
      }, [
        React.createElement('div', {
          key: 'label',
          className: "flex items-center gap-2"
        }, [
          React.createElement(Clock, {
            key: 'icon',
            className: "w-4 h-4 text-[--primary]"
          }),
          React.createElement('span', {
            key: 'text',
            className: "text-sm"
          }, "Term")
        ]),
        React.createElement('span', {
          key: 'value',
          className: "font-semibold text-sm text-[--primary]"
        }, payment.term)
      ])
    ])
  ]);