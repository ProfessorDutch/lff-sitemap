import type { Document } from '@contentful/rich-text-types';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { updateMetaTag } from './utils';

export const updateMetaDescription = (description: Document | null): string | null => {
  if (!description) {
    return null;
  }

  try {
    const plainTextDescription = documentToPlainTextString(description);
    return updateMetaTag('description', plainTextDescription);
  } catch (error) {
    console.error('Error updating meta description:', error);
    return null;
  }
};