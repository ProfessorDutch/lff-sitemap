import React from 'react';
import type { FC } from 'react';
import { DollarSign, Users, ShieldCheck } from 'lucide-react';
import { attorneyReferralStyles as styles } from '../AttorneyReferralForm.styles';

const benefits = [
  {
    icon: DollarSign,
    title: 'Additional Revenue',
    description: 'Add 6-figures annually to your bottom line by offering payment plans to your existing client base'
  },
  {
    icon: Users,
    title: 'Close More Cases',
    description: 'Change the conversation from "**if**" they can hire you to "**how**" they will pay - without changing your processes'
  },
  {
    icon: ShieldCheck,
    title: 'ABA Compliant',
    description: 'Fully compliant program with standard setup and monthly fees - backed by our network of financial partners'
  }
] as const;

export const Benefits: FC = () => 
  React.createElement('div', {
    className: styles.benefitsGrid
  }, benefits.map((benefit, index) => 
    React.createElement('div', { 
      key: `benefit-${index}`,
      className: styles.benefitCard
    }, [
      React.createElement(benefit.icon, {
        key: 'icon',
        className: styles.benefitIcon
      }),
      React.createElement('h3', {
        key: 'title',
        className: styles.benefitTitle
      }, benefit.title),
      React.createElement('p', {
        key: 'description',
        className: styles.benefitDescription,
        dangerouslySetInnerHTML: {
          __html: benefit.description.replace(
            /\*\*(.*?)\*\*/g, 
            '<strong>$1</strong>'
          )
        }
      })
    ])
  ));