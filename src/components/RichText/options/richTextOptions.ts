import React from 'react';
import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';

export const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node, children) => 
      React.createElement('div', { 
        className: 'leading-relaxed inherit-color'
      }, children),
    [BLOCKS.HEADING_2]: (_node, children) => 
      React.createElement('h2', { 
        className: 'text-2xl md:text-3xl font-bold mb-4 inherit-color'
      }, children),
    [BLOCKS.UL_LIST]: (_node, children) => 
      React.createElement('ul', { 
        className: 'space-y-2 list-disc list-inside inherit-color'
      }, children),
    [INLINES.HYPERLINK]: (node, children) => 
      React.createElement('a', {
        href: node.data.uri,
        className: 'text-current hover:opacity-90 underline underline-offset-4',
        target: '_blank',
        rel: 'noopener noreferrer'
      }, children),
  },
};