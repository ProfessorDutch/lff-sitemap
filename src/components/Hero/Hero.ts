import React from 'react';
import type { FC } from 'react';
import { RichText } from '../RichText/RichText';
import { heroStyles as styles } from './Hero.styles';
import type { HeroProps } from './types';

export const Hero: FC<HeroProps> = ({ heading, description, metaDescription }) => {
  return React.createElement('header', { 
    className: styles.wrapper
  }, [
    React.createElement('img', {
      key: 'skyline',
      src: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?auto=format&fit=crop&w=1920&q=80',
      alt: '',
      className: styles.skyline,
      role: 'presentation'
    }),
    React.createElement('div', {
      key: 'container',
      className: styles.content
    }, [
      React.createElement('h1', {
        key: 'heading',
        className: styles.heading
      }, React.createElement(RichText, { 
        content: heading,
        className: 'inherit-color'
      }))
    ])
  ]);
};