import React from 'react';
import type { FC, SelectHTMLAttributes } from 'react';
import { contactFormStyles as styles } from '../ContactForm.styles';

interface FormSelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Array<{ value: string; label: string; }>;
  error?: string;
  name: string; // Make name required
}

export const FormSelect: FC<FormSelectProps> = ({ label, options, error, name, id = name, ...props }) => 
  React.createElement('div', { className: styles.field }, [
    React.createElement('label', { 
      key: 'label',
      htmlFor: id,
      className: styles.label 
    }, label),
    React.createElement('select', {
      key: 'select',
      id,
      name,
      'aria-label': label,
      'aria-invalid': error ? 'true' : 'false',
      'aria-describedby': error ? `${id}-error` : undefined,
      className: `${styles.select} ${error ? 'border-[--danger]' : ''}`,
      ...props
    }, [
      React.createElement('option', { 
        key: 'default',
        value: '' 
      }, 'Select a case type'),
      ...options.map(option => 
        React.createElement('option', {
          key: option.value,
          value: option.value
        }, option.label)
      )
    ]),
    error && React.createElement('p', { 
      key: 'error',
      id: `${id}-error`,
      className: styles.error,
      role: 'alert'
    }, error)
  ]);