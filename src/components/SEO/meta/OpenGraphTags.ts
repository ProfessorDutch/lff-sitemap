import * as React from 'react';
import type { OpenGraphProps } from './types';
import type { MetaTag } from './types';

export const OpenGraphTags: React.FC<OpenGraphProps> = ({
  title,
  description,
  imageUrl,
  city,
  practiceArea
}) => {
  const tags: MetaTag[] = [
    { property: 'og:title', content: `${title} | ${city} Legal Payment Plans` },
    { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: imageUrl || '' },
    { property: 'og:locale', content: 'en_US' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: `${title} | ${city} Legal Payment Plans` },
    { name: 'twitter:description', content: description }
  ];

  return React.createElement(React.Fragment, null,
    tags.map(({ property, content, name }, index) =>
      React.createElement('meta', {
        key: index,
        ...(property ? { property } : { name }),
        content
      })
    )
  );
};