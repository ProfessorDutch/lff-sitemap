import React from 'react';
import type { FC } from 'react';
import { AttorneyShowcase } from './AttorneyShowcase';

export const TestPage: FC = () => 
  React.createElement('div', { className: 'min-h-screen bg-gray-50' }, [
    React.createElement('header', {
      key: 'header',
      className: 'bg-white border-b border-gray-200 py-4'
    },
      React.createElement('div', {
        className: 'container mx-auto px-6'
      },
        React.createElement('h1', {
          className: 'text-2xl font-bold text-[--secondary]'
        }, 'Attorney Showcase Demo')
      )
    ),
    React.createElement(AttorneyShowcase, { key: 'showcase' }),
    React.createElement('footer', {
      key: 'footer',
      className: 'bg-white border-t border-gray-200 py-4 mt-8'
    },
      React.createElement('div', {
        className: 'container mx-auto px-6 text-center text-gray-600'
      }, 'Demo Version')
    )
  ]);