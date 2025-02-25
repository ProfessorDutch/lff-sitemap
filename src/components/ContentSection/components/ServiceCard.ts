import React from 'react';
import type { FC } from 'react';
import type { LucideIcon } from 'lucide-react';
import { contentSectionStyles as styles } from '../ContentSection.styles';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  location: string;
}

export const ServiceCard: FC<ServiceCardProps> = ({ icon: Icon, title, description }) =>
  React.createElement('div', { 
    className: styles.serviceCard 
  }, [
    React.createElement(Icon, {
      key: 'icon',
      className: styles.serviceIcon,
      'aria-hidden': 'true'
    }),
    React.createElement('h3', {
      key: 'title',
      className: styles.serviceTitle
    }, title),
    React.createElement('p', {
      key: 'description',
      className: styles.serviceDescription
    }, description)
  ]);