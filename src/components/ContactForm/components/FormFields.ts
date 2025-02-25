import React from 'react';
import type { FC } from 'react';
import { FormField } from './FormField';
import { FormSelect } from './FormSelect';
import { CASE_TYPES } from '../constants';
import type { FormData, FormErrors } from '../types';
import { contactFormStyles as styles } from '../ContactForm.styles';

interface FormFieldsProps {
  formData: FormData;
  errors: FormErrors;
  onChange: (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export const FormFields: FC<FormFieldsProps> = ({ formData, errors, onChange }) => {
  return React.createElement('div', { className: 'space-y-6' }, [
    React.createElement('div', { 
      key: 'name-fields',
      className: styles.fieldGroup 
    }, [
      React.createElement(FormField, {
        key: 'firstName',
        id: 'contact-firstName',
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        value: formData.firstName,
        onChange: onChange('firstName'),
        error: errors.firstName,
        required: true,
        autoComplete: 'given-name'
      }),
      React.createElement(FormField, {
        key: 'lastName',
        id: 'contact-lastName',
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        value: formData.lastName,
        onChange: onChange('lastName'),
        error: errors.lastName,
        required: true,
        autoComplete: 'family-name'
      })
    ]),
    React.createElement('div', { 
      key: 'contact-fields',
      className: styles.fieldGroup 
    }, [
      React.createElement(FormField, {
        key: 'email',
        id: 'contact-email',
        name: 'email',
        label: 'Email',
        type: 'email',
        value: formData.email,
        onChange: onChange('email'),
        error: errors.email,
        required: true,
        autoComplete: 'email'
      }),
      React.createElement(FormField, {
        key: 'phone',
        id: 'contact-phone',
        name: 'phone',
        label: 'Phone',
        type: 'tel',
        value: formData.phone,
        onChange: onChange('phone'),
        error: errors.phone,
        required: true,
        autoComplete: 'tel'
      })
    ]),
    React.createElement('div', { 
      key: 'location-fields',
      className: styles.fieldGroup 
    }, [
      React.createElement(FormField, {
        key: 'zipCode',
        id: 'contact-zipCode',
        name: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        value: formData.zipCode,
        onChange: onChange('zipCode'),
        error: errors.zipCode,
        required: true,
        autoComplete: 'postal-code',
        inputMode: 'numeric',
        pattern: '[0-9]*'
      }),
      React.createElement(FormSelect, {
        key: 'caseType',
        id: 'contact-caseType',
        name: 'caseType',
        label: 'Case Type',
        value: formData.caseType,
        onChange: onChange('caseType'),
        options: CASE_TYPES,
        error: errors.caseType,
        required: true
      })
    ])
  ]);
};