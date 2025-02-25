import React from 'react';
import type { FC } from 'react';
import { RichText } from '../RichText/RichText';
import { getImageUrl } from '../../utils/images/urls';
import { contentSectionStyles as styles } from './ContentSection.styles';
import type { ContentSectionProps } from './types';

export const ContentSection: FC<ContentSectionProps> = ({
  content1,
  content2,
  imageUrl,
  location
}) => {
  const processedImageUrl = getImageUrl(imageUrl);

  return React.createElement('section', { className: styles.wrapper },
    React.createElement('div', { className: styles.container },
      React.createElement('div', { className: styles.content }, [
        // Why Choose Us Section
        React.createElement('div', {
          key: 'why-choose-us',
          className: styles.whyChooseUs
        }, [
          React.createElement('div', { 
            key: 'content',
            className: styles.whyChooseUsContent 
          }, [
            React.createElement('h2', { 
              key: 'heading',
              className: styles.heading 
            }, `Why Choose Us in ${location.city}`),
            React.createElement(RichText, { 
              key: 'text',
              content: content1,
              className: styles.text 
            })
          ]),
          React.createElement('div', { 
            key: 'image',
            className: styles.imageWrapper 
          },
            React.createElement('img', {
              src: processedImageUrl,
              alt: `Legal services in ${location.city}`,
              className: styles.image,
              loading: "lazy",
              onError: (e) => {
                const img = e.target as HTMLImageElement;
                img.src = 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80';
              }
            })
          )
        ]),
        
        // Our Services Section
        React.createElement('div', {
          key: 'services',
          className: styles.servicesSection
        }, [
          React.createElement('h2', { 
            key: 'heading',
            className: styles.servicesHeading 
          }, `Legal Services in ${location.city}`),
          React.createElement('div', {
            key: 'description',
            className: styles.servicesDescription
          }, React.createElement(RichText, {
            content: content2,
            className: 'text-center'
          }))
        ])
      ])
    )
  );
};