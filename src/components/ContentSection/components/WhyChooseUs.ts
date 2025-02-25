import React from 'react';
import type { FC } from 'react';
import { RichText } from '../../RichText';
import type { Document } from '@contentful/rich-text-types';
import { contentSectionStyles as styles } from '../ContentSection.styles';

interface WhyChooseUsProps {
  content: Document;
  imageUrl: string;
  location: string;
}

export const WhyChooseUs: FC<WhyChooseUsProps> = ({ content, imageUrl, location }) => 
  React.createElement('div', { className: styles.whyChooseUs }, [
    React.createElement('div', { 
      key: 'content',
      className: styles.whyChooseUsContent 
    }, [
      React.createElement('h2', { 
        key: 'heading',
        className: styles.heading 
      }, `Why Choose Us in ${location}`),
      React.createElement('div', { 
        key: 'text',
        className: styles.text 
      }, React.createElement(RichText, { content }))
    ]),
    React.createElement('div', { 
      key: 'image',
      className: styles.imageWrapper 
    },
      React.createElement('img', {
        src: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
        alt: `Legal services in ${location}`,
        className: styles.image,
        loading: "lazy"
      })
    )
  ]);