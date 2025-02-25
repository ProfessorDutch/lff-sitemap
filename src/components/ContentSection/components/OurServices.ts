import React from 'react';
import type { FC } from 'react';
import { RichText } from '../../RichText';
import { ServiceCard } from './ServiceCard';
import { services } from '../constants';
import type { Document } from '@contentful/rich-text-types';
import { contentSectionStyles as styles } from '../ContentSection.styles';

interface OurServicesProps {
  content: Document;
  location: string;
}

export const OurServices: FC<OurServicesProps> = ({ content, location }) =>
  React.createElement('div', { className: styles.servicesSection }, [
    React.createElement('div', { 
      key: 'header',
      className: styles.servicesHeader 
    }, [
      React.createElement('h2', { 
        key: 'heading',
        className: styles.servicesHeading 
      }, `Legal Services in ${location}`),
      React.createElement('div', { 
        key: 'description',
        className: styles.servicesDescription 
      }, React.createElement(RichText, { content }))
    ]),
    React.createElement('div', { 
      key: 'grid',
      className: styles.servicesGrid 
    }, services.map((service, index) => 
      React.createElement(ServiceCard, {
        key: `service-${index}`,
        ...service,
        location
      })
    ))
  ]);