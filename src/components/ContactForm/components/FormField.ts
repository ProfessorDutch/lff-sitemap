import React from 'react';
import type { FC, InputHTMLAttributes } from 'react';
import { contactFormStyles as styles } from '../ContactForm.styles';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  name: string; // Make name required
}

export const FormField: FC<FormFieldProps> = ({ label, error, name, id = name, className = '', ...props }) => 
  React.createElement('div', { className: styles.field }, [
    React.createElement('label', { 
      key: 'label',
      htmlFor: id,
      className: styles.label 
    }, label),
    React.createElement('input', {
      key: 'input',
      id,
      name,
      'aria-label': label,
      'aria-invalid': error ? 'true' : 'false',
      'aria-describedby': error ? `${id}-error` : undefined,
      className: `${styles.input} ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-200' : ''} ${className}`,
      ...props
    }),
    error && React.createElement('p', { 
      key: 'error',
      id: `${id}-error`,
      className: styles.error,
      role: 'alert'
    }, error)
  ]);