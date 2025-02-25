import React from 'react';
import type { FC } from 'react';
import { AlertCircle, CheckCircle } from 'lucide-react';
import { contactFormStyles as styles } from '../ContactForm.styles';

interface FormStatusProps {
  status: 'idle' | 'submitting' | 'success' | 'error';
  errorMessage?: string;
}

export const FormStatus: FC<FormStatusProps> = ({ status, errorMessage }) => {
  if (status === 'success') {
    return React.createElement('div', {
      className: styles.successMessage,
      role: 'alert',
      'aria-live': 'polite'
    }, [
      React.createElement(CheckCircle, {
        key: 'icon',
        className: 'w-5 h-5 inline-block mr-2'
      }),
      'Great! We\'ve received your information and will be in touch shortly to discuss your payment options.'
    ]);
  }

  if (status === 'error') {
    return React.createElement('div', {
      className: styles.errorMessage,
      role: 'alert',
      'aria-live': 'assertive'
    }, [
      React.createElement(AlertCircle, {
        key: 'icon',
        className: 'w-5 h-5 inline-block mr-2'
      }),
      errorMessage || 'Oops! Something went wrong. Please double-check your information and try again.'
    ]);
  }

  return null;
};