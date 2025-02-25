import type { Document } from '@contentful/rich-text-types';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

export const updateMetaTitle = (
  title: string, 
  state: string, 
  keywordVariation: string
): void => {
  if (!title || !state || !keywordVariation) {
    return;
  }
  document.title = `${title} in ${state} - ${keywordVariation}`;
};

export const updateMetaDescription = (description: Document | null): string | null => {
  if (!description) {
    return null;
  }

  try {
    const plainTextDescription = documentToPlainTextString(description);
    const metaDescription = document.querySelector('meta[name="description"]');
    
    if (metaDescription) {
      metaDescription.setAttribute('content', plainTextDescription);
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = plainTextDescription;
      document.head.appendChild(meta);
    }
    
    return plainTextDescription;
  } catch (error) {
    console.error('Error updating meta description:', error);
    return null;
  }
};