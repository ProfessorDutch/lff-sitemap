import React from 'react';
import type { FC } from 'react';
import { ArrowRight } from 'lucide-react';
import { RichText } from '../../RichText';
import type { Document } from '@contentful/rich-text-types';
import { heroStyles as styles } from '../Hero.styles';

interface HeroButtonProps {
  content: Document;
}

export const HeroButton: FC<HeroButtonProps> = ({ content }) => 
  React.createElement('div', { className: styles.buttonWrapper },
    React.createElement('button', { className: styles.button }, [
      React.createElement(RichText, { 
        key: 'text',
        content,
        className: 'text-current' 
      }),
      React.createElement(ArrowRight, { 
        key: 'icon',
        className: 'w-6 h-6' 
      })
    ])
  );