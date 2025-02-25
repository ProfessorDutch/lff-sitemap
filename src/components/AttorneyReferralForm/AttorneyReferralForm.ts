import React, { useState } from 'react';
import type { FC } from 'react';
import { Benefits } from './components/Benefits';
import { AttorneyForm } from './components/AttorneyForm';
import { attorneyReferralStyles as styles } from './AttorneyReferralForm.styles';

export const AttorneyReferralForm: FC = () => {
  const [showForm, setShowForm] = useState(false);

  const renderContent = () => [
    React.createElement('h2', { 
      key: 'heading',
      className: styles.heading 
    }, [
      React.createElement('span', { 
        key: 'highlight',
        className: styles.headingHighlight 
      }, 'For Attorneys:'),
      ' Add 6-Figures From Your Existing Clients'
    ]),
    React.createElement('p', {
      key: 'subheading',
      className: styles.subheading
    }, [
      'Join law firms earning additional revenue through payment plans. ',
      React.createElement('span', { 
        key: 'highlight',
        className: 'font-semibold text-white' 
      }, 'Over $65M in legal financing provided.')
    ])
  ];

  const renderCTA = () => 
    React.createElement('div', {
      key: 'cta',
      className: styles.ctaWrapper
    }, [
      React.createElement('button', {
        key: 'button',
        onClick: () => setShowForm(true),
        className: styles.ctaButton
      }, 'Learn More About Our Program'),
      React.createElement('p', {
        key: 'subtext',
        className: styles.ctaSubtext
      }, 'Quick application • Start offering payment plans in 24 hours')
    ]);

  return React.createElement('section', { className: styles.wrapper }, [
    React.createElement('div', { 
      key: 'pattern',
      className: styles.pattern 
    }),
    React.createElement('div', { 
      key: 'container',
      className: styles.container 
    }, [
      React.createElement('div', { 
        key: 'content',
        className: styles.content 
      }, renderContent()),
      React.createElement(Benefits, { key: 'benefits' }),
      showForm 
        ? React.createElement(AttorneyForm, { key: 'form' })
        : renderCTA()
    ])
  ]);
};