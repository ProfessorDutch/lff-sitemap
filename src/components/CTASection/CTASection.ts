import React from 'react';
import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { CTA_SECTION } from './CTASection.constants';
import { ctaSectionStyles as styles } from './CTASection.styles';

interface CTASectionProps {
  onGetStarted?: () => void;
}

export const CTASection: FC<CTASectionProps> = ({ onGetStarted }) => 
  React.createElement('section', { className: styles.wrapper }, [
    React.createElement('div', { key: 'pattern', className: styles.pattern }),
    React.createElement('div', { key: 'overlay', className: styles.overlay }),
    React.createElement('div', { key: 'container', className: styles.container }, [
      React.createElement('h2', { 
        key: 'heading',
        className: styles.heading 
      }, CTA_SECTION.HEADING),
      React.createElement('p', { 
        key: 'description',
        className: styles.description 
      }, CTA_SECTION.DESCRIPTION),
      React.createElement('button', {
        key: 'button',
        onClick: onGetStarted,
        className: styles.button
      }, [
        React.createElement('span', { key: 'text' }, CTA_SECTION.BUTTON_TEXT),
        React.createElement(ArrowRight, { 
          key: 'icon',
          className: 'w-5 h-5 ml-2'
        })
      ])
    ])
  ]);