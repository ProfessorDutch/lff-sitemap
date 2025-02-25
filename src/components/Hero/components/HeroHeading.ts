import React from 'react';
import type { FC } from 'react';
import { RichText } from '../../RichText';
import type { Document } from '@contentful/rich-text-types';
import { heroStyles as styles } from '../Hero.styles';

interface HeroHeadingProps {
  content: Document;
}

export const HeroHeading: FC<HeroHeadingProps> = ({ content }) => 
  React.createElement('div', { className: styles.headingWrapper }, [
    React.createElement('h1', { 
      key: 'heading',
      className: styles.heading 
    },
      React.createElement(RichText, { 
        content,
        className: 'gradient-text'
      })
    )
  ]);