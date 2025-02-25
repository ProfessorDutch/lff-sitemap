import React from 'react';
import type { FC, ReactNode } from 'react';

interface RichTextListProps {
  children: ReactNode;
}

export const RichTextList: FC<RichTextListProps> = ({ children }) => 
  React.createElement('ul', 
    { className: 'list-disc list-inside mb-4' },
    React.Children.map(children, (child, index) =>
      React.createElement('li', { key: `item-${index}` }, child)
    )
  );