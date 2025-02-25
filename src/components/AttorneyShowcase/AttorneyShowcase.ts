import React, { useState, useEffect } from 'react';
import type { FC } from 'react';
import { Scale, DollarSign, Users } from 'lucide-react';

interface ShowcaseContent {
  caseType: string;
  location: string;
  amount: number;
  description: string;
}

const SHOWCASE_CONTENT: ShowcaseContent[] = [
  {
    caseType: 'Criminal Defense',
    location: 'Los Angeles, CA',
    amount: 15000,
    description: 'Help clients afford quality defense representation with flexible payment plans.'
  },
  {
    caseType: 'Family Law',
    location: 'Miami, FL',
    amount: 8500,
    description: 'Make divorce and custody proceedings accessible with monthly financing.'
  },
  {
    caseType: 'Immigration',
    location: 'Houston, TX',
    amount: 6000,
    description: 'Support immigration cases with affordable payment solutions.'
  },
  {
    caseType: 'Tax Law',
    location: 'New York, NY',
    amount: 12000,
    description: 'Help resolve tax disputes with manageable payment options.'
  }
];

export const AttorneyShowcase: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const content = SHOWCASE_CONTENT[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SHOWCASE_CONTENT.length);
        setIsTransitioning(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return React.createElement('section', {
    className: 'bg-gradient-to-br from-[--secondary] to-[--primary-dark] text-white py-20 relative overflow-hidden'
  }, [
    // Background Pattern
    React.createElement('div', {
      key: 'pattern',
      className: 'absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[size:20px_20px] opacity-30'
    }),
    
    // Content Container
    React.createElement('div', {
      key: 'container',
      className: 'container mx-auto px-6 max-w-6xl relative z-10'
    }, [
      // Header
      React.createElement('div', {
        key: 'header',
        className: 'text-center mb-16'
      }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-4xl md:text-5xl font-bold mb-6'
        }, 'See How It Works'),
        React.createElement('p', {
          key: 'subtitle',
          className: 'text-xl text-white/90 max-w-2xl mx-auto'
        }, 'Watch as we demonstrate how your clients can get approved for legal payment plans in real-time.')
      ]),

      // Dynamic Content
      React.createElement('div', {
        key: 'showcase',
        className: ['transform transition-all duration-500', isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'].join(' ')
      }, [
        // Location and Case Type
        React.createElement('div', {
          key: 'header',
          className: 'text-center mb-8'
        }, [
          React.createElement('h3', {
            key: 'location',
            className: 'text-3xl font-bold mb-2'
          }, content.location),
          React.createElement('div', {
            key: 'case-type',
            className: 'text-xl text-white/90'
          }, content.caseType)
        ]),

        // Stats Grid
        React.createElement('div', {
          key: 'stats',
          className: 'grid md:grid-cols-3 gap-8 mb-12'
        }, [
          // Amount Card
          React.createElement('div', {
            key: 'amount',
            className: 'bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'
          }, [
            React.createElement(DollarSign, {
              key: 'icon',
              className: 'w-8 h-8 text-[--accent] mb-4'
            }),
            React.createElement('div', {
              key: 'label',
              className: 'text-lg font-medium mb-2'
            }, 'Case Amount'),
            React.createElement('div', {
              key: 'value',
              className: 'text-2xl font-bold'
            }, `$${content.amount.toLocaleString()}`)
          ]),

          // Monthly Payment Card
          React.createElement('div', {
            key: 'monthly',
            className: 'bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'
          }, [
            React.createElement(Scale, {
              key: 'icon',
              className: 'w-8 h-8 text-[--accent] mb-4'
            }),
            React.createElement('div', {
              key: 'label',
              className: 'text-lg font-medium mb-2'
            }, 'Monthly Payment'),
            React.createElement('div', {
              key: 'value',
              className: 'text-2xl font-bold'
            }, `$${Math.round(content.amount / 48).toLocaleString()}`)
          ]),

          // Approval Time Card
          React.createElement('div', {
            key: 'approval',
            className: 'bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20'
          }, [
            React.createElement(Users, {
              key: 'icon',
              className: 'w-8 h-8 text-[--accent] mb-4'
            }),
            React.createElement('div', {
              key: 'label',
              className: 'text-lg font-medium mb-2'
            }, 'Approval Time'),
            React.createElement('div', {
              key: 'value',
              className: 'text-2xl font-bold'
            }, '24 Hours')
          ])
        ]),

        // Description
        React.createElement('p', {
          key: 'description',
          className: 'text-center text-xl text-white/90 max-w-2xl mx-auto'
        }, content.description)
      ])
    ])
  ]);
};