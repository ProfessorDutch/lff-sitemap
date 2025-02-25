import React from 'react';
import type { FC } from 'react';

export const createRichTextRenderer = (Component: FC<any>) => 
  (props: any = {}, children: React.ReactNode) => 
    React.createElement(Component, {
      key: Math.random().toString(36).substr(2, 9),
      ...props
    }, children);