import { Options } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import React from 'react';

export const richTextOptions: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => 
      React.createElement('div', { className: 'mb-4 last:mb-0' }, children),
    [BLOCKS.HEADING_2]: (node, children) => 
      React.createElement('h2', { className: 'text-2xl font-bold mb-4' }, children),
    [BLOCKS.UL_LIST]: (node, children) => 
      React.createElement('ul', { className: 'list-disc list-inside mb-4' }, 
        React.Children.map(children, (child, index) => 
          React.createElement('li', { key: index }, child)
        )
      ),
    [INLINES.HYPERLINK]: (node, children) => 
      React.createElement('a', {
        href: node.data.uri,
        className: 'text-blue-600 hover:text-blue-800 underline',
        target: '_blank',
        rel: 'noopener noreferrer'
      }, children),
  },
};