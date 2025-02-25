import React from 'react';
import type { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import type { SEOProps } from './types';

export const SEO: FC<SEOProps> = ({
  pageTitle,
  metaDescription,
  schemaMarkup,
  city,
  state,
  practiceArea,
  imageUrl,
  imageAltText
}) => {
  const title = `${pageTitle} | ${city}, ${state} Legal Payment Plans`;
  
  return React.createElement(Helmet, null, [
    React.createElement('title', { key: 'title' }, title),
    React.createElement('meta', {
      key: 'description',
      name: 'description',
      content: metaDescription
    }),
    // OpenGraph tags
    React.createElement('meta', { key: 'og:title', property: 'og:title', content: title }),
    React.createElement('meta', { key: 'og:description', property: 'og:description', content: metaDescription }),
    React.createElement('meta', { key: 'og:type', property: 'og:type', content: 'website' }),
    React.createElement('meta', { key: 'og:image', property: 'og:image', content: imageUrl }),
    React.createElement('meta', { key: 'og:image:alt', property: 'og:image:alt', content: imageAltText }),
    React.createElement('meta', { key: 'og:locale', property: 'og:locale', content: 'en_US' }),
    // Schema.org JSON-LD
    React.createElement('script', {
      key: 'schema',
      type: 'application/ld+json',
      dangerouslySetInnerHTML: { __html: schemaMarkup }
    })
  ]);
};