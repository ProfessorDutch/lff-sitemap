import React, { useState } from 'react';
import type { FC, FormEvent } from 'react';
import { submitAttorneyLead } from '../../../utils/forms/submitAttorneyLead';
import { validateAttorneyForm } from '../validation';
import type { AttorneyFormData, AttorneyFormErrors } from '../types';
import { attorneyReferralStyles as styles } from '../AttorneyReferralForm.styles';
import { CASE_TYPES } from '../../ContactForm/constants';

const INITIAL_FORM_DATA: AttorneyFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  practiceType: ''
};

export const AttorneyForm: FC = () => {
  const [formData, setFormData] = useState<AttorneyFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<AttorneyFormErrors>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleChange = (field: keyof AttorneyFormData) => (
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
    
    const validationErrors = validateAttorneyForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setStatus('submitting');
      try {
        await submitAttorneyLead(formData);
        setStatus('success');
        setFormData(INITIAL_FORM_DATA);
      } catch (error) {
        setStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form');
      }
    }
  };

  return React.createElement('div', {
    className: styles.formWrapper
  }, [
    React.createElement('div', {
      key: 'header',
      className: styles.formHeader
    }, [
      React.createElement('h3', {
        key: 'title',
        className: styles.formTitle
      }, 'Join Our Attorney Network'),
      React.createElement('p', {
        key: 'subtitle',
        className: styles.formSubtitle
      }, 'Complete the form below to start receiving client leads and offering payment plans')
    ]),
    React.createElement('form', {
      key: 'form',
      onSubmit: handleSubmit,
      className: styles.form,
      noValidate: true
    }, [
      React.createElement('div', {
        key: 'grid',
        className: styles.formGrid
      }, [
        // First Name Field
        React.createElement('div', {
          key: 'firstName',
          className: styles.field
        }, [
          React.createElement('label', {
            key: 'label',
            htmlFor: 'attorney-firstName',
            className: styles.label
          }, 'First Name'),
          React.createElement('input', {
            key: 'input',
            id: 'attorney-firstName',
            name: 'firstName',
            type: 'text',
            value: formData.firstName,
            onChange: handleChange('firstName'),
            className: `${styles.input} ${errors.firstName ? 'border-red-500' : ''}`,
            required: true,
            autoComplete: 'given-name'
          }),
          errors.firstName && React.createElement('p', {
            key: 'error',
            className: 'text-red-500 text-sm mt-1'
          }, errors.firstName)
        ]),
        // Last Name Field
        React.createElement('div', {
          key: 'lastName',
          className: styles.field
        }, [
          React.createElement('label', {
            key: 'label',
            htmlFor: 'attorney-lastName',
            className: styles.label
          }, 'Last Name'),
          React.createElement('input', {
            key: 'input',
            id: 'attorney-lastName',
            name: 'lastName',
            type: 'text',
            value: formData.lastName,
            onChange: handleChange('lastName'),
            className: `${styles.input} ${errors.lastName ? 'border-red-500' : ''}`,
            required: true,
            autoComplete: 'family-name'
          }),
          errors.lastName && React.createElement('p', {
            key: 'error',
            className: 'text-red-500 text-sm mt-1'
          }, errors.lastName)
        ])
      ]),
      React.createElement('div', {
        key: 'contact',
        className: styles.formGrid
      }, [
        // Email Field
        React.createElement('div', {
          key: 'email',
          className: styles.field
        }, [
          React.createElement('label', {
            key: 'label',
            htmlFor: 'attorney-email',
            className: styles.label
          }, 'Email'),
          React.createElement('input', {
            key: 'input',
            id: 'attorney-email',
            name: 'email',
            type: 'email',
            value: formData.email,
            onChange: handleChange('email'),
            className: `${styles.input} ${errors.email ? 'border-red-500' : ''}`,
            required: true,
            autoComplete: 'email'
          }),
          errors.email && React.createElement('p', {
            key: 'error',
            className: 'text-red-500 text-sm mt-1'
          }, errors.email)
        ]),
        // Phone Field
        React.createElement('div', {
          key: 'phone',
          className: styles.field
        }, [
          React.createElement('label', {
            key: 'label',
            htmlFor: 'attorney-phone',
            className: styles.label
          }, 'Phone'),
          React.createElement('input', {
            key: 'input',
            id: 'attorney-phone',
            name: 'phone',
            type: 'tel',
            value: formData.phone,
            onChange: handleChange('phone'),
            className: `${styles.input} ${errors.phone ? 'border-red-500' : ''}`,
            required: true,
            autoComplete: 'tel'
          }),
          errors.phone && React.createElement('p', {
            key: 'error',
            className: 'text-red-500 text-sm mt-1'
          }, errors.phone)
        ])
      ]),
      // Practice Type Field
      React.createElement('div', {
        key: 'practice',
        className: styles.field
      }, [
        React.createElement('label', {
          key: 'label',
          htmlFor: 'attorney-practiceType',
          className: styles.label
        }, 'Practice Area'),
        React.createElement('select', {
          key: 'select',
          id: 'attorney-practiceType',
          name: 'practiceType',
          value: formData.practiceType,
          onChange: handleChange('practiceType'),
          className: `${styles.select} ${errors.practiceType ? 'border-red-500' : ''}`,
          required: true
        }, [
          React.createElement('option', {
            key: 'default',
            value: ''
          }, 'Select your practice area'),
          ...CASE_TYPES.map(type =>
            React.createElement('option', {
              key: type.value,
              value: type.value
            }, type.label)
          )
        ]),
        errors.practiceType && React.createElement('p', {
          key: 'error',
          className: 'text-red-500 text-sm mt-1'
        }, errors.practiceType)
      ]),
      // Submit Button
      React.createElement('button', {
        key: 'submit',
        type: 'submit',
        disabled: status === 'submitting',
        className: styles.submitButton
      }, status === 'submitting' ? 'Submitting...' : 'Submit Application')
    ]),
    // Success Message
    status === 'success' && React.createElement('div', {
      key: 'success',
      className: 'mt-4 p-4 bg-green-50 text-green-700 rounded-lg'
    }, 'Thank you for your application! We will contact you shortly.'),
    // Error Message
    status === 'error' && React.createElement('div', {
      key: 'error',
      className: 'mt-4 p-4 bg-red-50 text-red-700 rounded-lg'
    }, errorMessage || 'An error occurred. Please try again.')
  ]);
};