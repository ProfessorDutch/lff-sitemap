import type { Document } from '@contentful/rich-text-types';

export interface RichTextProps {
  content: Document | null;
  className?: string;
}