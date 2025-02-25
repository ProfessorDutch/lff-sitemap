export const ERROR_MESSAGES = {
  '401': 'Authentication failed. Please check your Contentful access token.',
  '404': 'Content not found. Please check your space ID and content type.',
  'unknownContentType': (contentType: string) => 
    `Content type '${contentType}' not found. Please check your content model in Contentful.`,
  'network': 'Failed to load content. Please check your network connection and try again.',
  'unknown': 'An unexpected error occurred. Please try again.'
} as const;