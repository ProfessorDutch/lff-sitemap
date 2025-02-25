import React from 'react';
import type { FC } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES } from '@contentful/rich-text-types';
import type { Document } from '@contentful/rich-text-types';

interface RichTextProps {
  content: Document | null;
  className?: string;
}

const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_node: any, children: any) => 
      React.createElement('div', { 
        className: 'leading-relaxed inherit-color'
      }, children),
    [BLOCKS.HEADING_2]: (_node: any, children: any) => 
      React.createElement('h2', { 
        className: 'text-2xl md:text-3xl font-bold mb-4 inherit-color'
      }, children),
    [INLINES.HYPERLINK]: (node: any, children: any) => 
      React.createElement('a', {
        href: node.data.uri,
        className: 'text-current hover:opacity-90 underline underline-offset-4',
        target: '_blank',
        rel: 'noopener noreferrer'
      }, children),
  },
};

export const RichText: FC<RichTextProps> = ({ content, className }) => {
  if (!content) return null;
  
  return React.createElement('div', { className },
    documentToReactComponents(content, options)
  );
};