import { CONTENTFUL_CONFIG } from '../../config/contentful';
import type { ContentfulError, ErrorResponse } from './types';
import { ERROR_MESSAGES } from './constants';

const getErrorCode = (error: ContentfulError): ErrorResponse['code'] => {
  if (error.message?.includes('401')) return '401';
  if (error.message?.includes('404')) return '404';
  if (error.details?.errors?.[0]?.name === 'unknownContentType') return 'unknownContentType';
  return 'unknown';
};

export const parseContentfulError = (error: unknown): ErrorResponse => {
  // Log original error for debugging
  console.error('Original error:', error);

  // Handle string errors
  if (typeof error === 'string') {
    return {
      code: 'unknown',
      message: error
    };
  }

  const contentfulError = error as ContentfulError;
  const code = getErrorCode(contentfulError);
  
  // Build error response
  const response: ErrorResponse = {
    code,
    message: code === 'unknownContentType'
      ? ERROR_MESSAGES.unknownContentType(CONTENTFUL_CONFIG.contentTypes.landingPage)
      : ERROR_MESSAGES[code]
  };

  // Add details if available
  if (contentfulError.details?.errors?.[0]?.details) {
    response.details = contentfulError.details.errors[0].details;
  }

  return response;
};