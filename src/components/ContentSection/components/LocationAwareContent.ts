import React from 'react';
import type { FC } from 'react';
import type { Location } from '../types';
import { contentSectionStyles as styles } from '../ContentSection.styles';

interface LocationAwareContentProps {
  content: string;
  location: Location;
}

export const LocationAwareContent: FC<LocationAwareContentProps> = ({ content, location }) => {
  const { city, state, surroundingCities } = location;
  
  // Replace location tokens in content
  const localizedContent = content
    .replace(/\{city\}/g, city)
    .replace(/\{state\}/g, state)
    .replace(/\{surroundingCities\}/g, surroundingCities.join(', '));

  return React.createElement('div', { 
    className: styles.text,
    dangerouslySetInnerHTML: { __html: localizedContent }
  });
};