import React from 'react';
import type { FC } from 'react';
import { loadingSpinnerStyles as styles } from './LoadingSpinner.styles';

export const LoadingSpinner: FC = () => 
  React.createElement('div', { className: styles.wrapper },
    React.createElement('div', { 
      className: styles.spinner,
      'aria-label': 'Loading content...',
      role: 'status'
    })
  );