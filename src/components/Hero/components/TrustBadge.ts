import React from 'react';
import type { FC } from 'react';
import { Shield, Users, Award } from 'lucide-react';
import { heroStyles as styles } from '../Hero.styles';

const trustItems = [
  {
    icon: Users,
    text: 'Trusted by over 1 million clients'
  },
  {
    icon: Shield,
    text: '100% Secure & Confidential'
  },
  {
    icon: Award,
    text: 'Award-winning service'
  }
] as const;

export const TrustBadge: FC = () => 
  React.createElement('div', { className: styles.trustBadge },
    trustItems.map((item, index) => 
      React.createElement('div', { 
        key: `trust-${index}`, 
        className: styles.trustItem 
      }, [
        React.createElement(item.icon, { 
          key: 'icon',
          className: styles.trustIcon 
        }),
        React.createElement('span', { 
          key: 'text',
          className: styles.trustText 
        }, item.text)
      ])
    )
  );