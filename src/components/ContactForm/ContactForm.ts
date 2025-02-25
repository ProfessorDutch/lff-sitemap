import React, { useState, useEffect, useRef } from 'react';
import type { FC, FormEvent } from 'react';
import { FormFields } from './components/FormFields';
import { FormStatus } from './components/FormStatus';
import { PaymentInfo } from './components/PaymentInfo';
import { submitLead } from '../../utils/forms/submitLead';
import { validateForm } from './validation';
import { INITIAL_FORM_DATA } from './constants';
import type { ContactFormProps, FormData, FormErrors } from './types';
import { contactFormStyles as styles } from './ContactForm.styles';
import { CheckCircle, ArrowRight } from 'lucide-react';

export const ContactForm: FC<ContactFormProps> = ({ 
  className = '',
  selectedPayment,
  onSubmit
}) => {
  const successRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (field: keyof FormData) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStatus('submitting');
      try {
        await submitLead(formData, selectedPayment);
        setStatus('success');
        setFormData(INITIAL_FORM_DATA);
        if (onSubmit) {
          await onSubmit(formData);
        }
        successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } catch (error) {
        setStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form');
      }
    }
  };

  if (status === 'success') {
    return React.createElement('div', {
      ref: successRef,
      className: `${styles.wrapper} ${className}`,
      id: 'success-message'
    }, [
      React.createElement('div', {
        key: 'success',
        className: 'bg-green-50 border border-green-100 rounded-lg p-8'
      }, [
        React.createElement('div', {
          key: 'header',
          className: 'flex items-center gap-3 mb-4'
        }, [
          React.createElement(CheckCircle, {
            key: 'icon',
            className: 'w-6 h-6 text-green-500'
          }),
          React.createElement('h3', {
            key: 'title',
            className: 'text-xl font-bold text-green-800'
          }, 'Application Submitted Successfully!')
        ]),
        React.createElement('div', {
          key: 'message',
          className: 'text-lg text-green-700 font-medium mb-6'
        }, [
          'A local law firm will contact you to ',
          React.createElement('span', {
            key: 'highlight',
            className: 'text-green-800 font-semibold'
          }, 'ensure case fit'),
          ' and ',
          React.createElement('span', {
            key: 'highlight2',
            className: 'text-green-800 font-semibold'
          }, 'finalize your payment plan details'),
          '.'
        ]),
        selectedPayment && React.createElement(PaymentInfo, {
          key: 'payment-info',
          payment: selectedPayment
        })
      ])
    ]);
  }

  return React.createElement('div', { 
    className: `${styles.wrapper} ${className}`
  }, [
    React.createElement('h3', {
      key: 'heading',
      className: styles.heading
    }, 'Contact Information'),
    selectedPayment && React.createElement(PaymentInfo, {
      key: 'payment-info',
      payment: selectedPayment
    }),
    React.createElement(FormStatus, {
      key: 'status',
      status,
      errorMessage
    }),
    React.createElement('form', {
      key: 'form',
      onSubmit: handleSubmit,
      className: styles.form,
      noValidate: true
    }, [
      React.createElement(FormFields, {
        key: 'fields',
        formData,
        errors,
        onChange: handleChange
      }),
      React.createElement('button', {
        key: 'submit',
        type: 'submit',
        disabled: status === 'submitting',
        className: styles.submitButton
      }, status === 'submitting' ? 'Submitting...' : 'Submit')
    ])
  ]);
};