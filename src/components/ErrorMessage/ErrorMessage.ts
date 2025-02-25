import React from 'react';
import type { FC } from 'react';
import { AlertCircle } from 'lucide-react';
import type { ErrorMessageProps } from './types';
import { errorMessageStyles as styles } from './ErrorMessage.styles';

export const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => 
  React.createElement('div', { 
    className: styles.wrapper,
    role: 'alert',
    'aria-live': 'assertive'
  },
    React.createElement('div', { className: styles.message }, [
      React.createElement(AlertCircle, {
        key: 'icon',
        className: 'w-16 h-16 text-red-500 mb-4'
      }),
      React.createElement('h2', {
        key: 'heading',
        className: 'text-xl font-bold mb-2'
      }, 'Error Loading Content'),
      React.createElement('p', {
        key: 'message',
        className: 'text-gray-600'
      }, message)
    ])
  );