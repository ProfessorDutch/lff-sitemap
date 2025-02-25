import type { Document } from '@contentful/rich-text-types';

export const isValidRichText = (content: any): content is Document => {
  return Boolean(
    content && 
    typeof content === 'object' && 
    'nodeType' in content && 
    'content' in content &&
    Array.isArray(content.content)
  );
};

export const formatPageTitle = (title: string, location: string) => {
  return `${title} in ${location} - Payment Options`;
};