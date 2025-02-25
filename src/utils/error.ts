interface ContentfulError {
  message: string;
  details?: {
    errors?: Array<{
      name: string;
      details?: string;
    }>;
  };
}

export const handleContentfulError = (error: unknown): string => {
  if (typeof error === 'string') {
    return error;
  }

  const contentfulError = error as ContentfulError;
  
  if (contentfulError.details?.errors?.length) {
    const firstError = contentfulError.details.errors[0];
    return `Content loading error: ${firstError.details || firstError.name}`;
  }

  return 'Failed to load content. Please try again later.';
};