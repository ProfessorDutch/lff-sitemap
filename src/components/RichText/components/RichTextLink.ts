import React from 'react';
import type { FC, ReactNode } from 'react';

interface RichTextLinkProps {
  href: string;
  children: ReactNode;
}

export const RichTextLink: FC<RichTextLinkProps> = ({ href, children }) => 
  React.createElement('a', {
    href,
    className: 'text-blue-600 hover:text-blue-800 underline',
    target: '_blank',
    rel: 'noopener noreferrer'
  }, children);