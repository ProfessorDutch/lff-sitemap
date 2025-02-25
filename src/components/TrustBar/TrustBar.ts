import React from 'react';
import type { FC } from 'react';
import { Shield, Users, Award } from 'lucide-react';
import { trustBarStyles as styles } from './TrustBar.styles';

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

export const TrustBar: FC = () => 
  React.createElement('div', { className: styles.wrapper },
    React.createElement('div', { className: styles.container },
      React.createElement('div', { className: styles.content },
        trustItems.map((item, index) => 
          React.createElement('div', { 
            key: `trust-${index}`, 
            className: styles.item 
          }, [
            React.createElement(item.icon, { 
              key: 'icon',
              className: styles.icon 
            }),
            React.createElement('span', { 
              key: 'text',
              className: styles.text 
            }, item.text)
          ])
        )
      )
    )
  );