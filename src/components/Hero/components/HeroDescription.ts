import React from 'react';
import type { FC } from 'react';
import { RichText } from '../../RichText';
import type { Document } from '@contentful/rich-text-types';
import { heroStyles as styles } from '../Hero.styles';

interface HeroDescriptionProps {
  content: Document;
}

export const HeroDescription: FC<HeroDescriptionProps> = ({ content }) => 
  React.createElement('div', { className: styles.description },
    React.createElement(RichText, { content })
  );