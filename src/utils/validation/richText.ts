import type { Document } from '@contentful/rich-text-types';

export const isValidRichText = (content: any): content is Document => {
  if (!content || typeof content !== 'object') {
    return false;
  }

  // Basic structure check
  if (!('nodeType' in content) || !('content' in content)) {
    return false;
  }

  // Allow both 'document' and 'paragraph' nodeTypes for flexibility
  if (!['document', 'paragraph'].includes(content.nodeType)) {
    return false;
  }

  // Content must be an array
  if (!Array.isArray(content.content)) {
    return false;
  }

  // At least one content node required
  if (content.content.length === 0) {
    return false;
  }

  // Check first content node has text
  const firstNode = content.content[0];
  if (content.nodeType === 'document' && firstNode.nodeType === 'paragraph') {
    return Array.isArray(firstNode.content) && firstNode.content.length > 0;
  }

  return true;
};