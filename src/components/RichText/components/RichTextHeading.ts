import React from 'react';
import type { FC, ReactNode } from 'react';

interface RichTextHeadingProps {
  children: ReactNode;
}

export const RichTextHeading: FC<RichTextHeadingProps> = ({ children }) => 
  React.createElement('h2', { className: 'text-2xl font-bold mb-4' }, children);