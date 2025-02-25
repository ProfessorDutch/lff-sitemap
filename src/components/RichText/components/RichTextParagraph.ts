import React from 'react';
import type { FC, ReactNode } from 'react';

interface RichTextParagraphProps {
  children: ReactNode;
}

export const RichTextParagraph: FC<RichTextParagraphProps> = ({ children }) => 
  React.createElement('p', { className: 'mb-4 last:mb-0' }, children);