import React from 'react';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import { footerStyles as styles } from './Footer.styles';

export const Footer: FC = () => 
  React.createElement('footer', { className: styles.wrapper }, 
    React.createElement('div', { className: styles.container }, [
      React.createElement('div', { 
        key: 'content',
        className: styles.content 
      }, [
        'Legal payment plans provided through ',
        React.createElement('a', {
          key: 'link',
          href: 'https://www.iqualifylending.com',
          className: styles.link,
          target: '_blank',
          rel: 'noopener noreferrer'
        }, 'iQualifyLending'),
        "'s attorney network"
      ]),
      React.createElement('div', {
        key: 'legal',
        className: styles.legal
      }, [
        React.createElement(Link, {
          key: 'privacy',
          to: "/privacy",
          className: styles.link
        }, "Privacy Policy"),
        React.createElement('span', {
          key: 'separator',
          className: "mx-2"
        }, "•"),
        React.createElement(Link, {
          key: 'terms',
          to: "/terms",
          className: styles.link
        }, "Terms & Conditions")
      ])
    ])
  );