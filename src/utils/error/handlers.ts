import { parseContentfulError } from './contentful';
import type { ErrorResponse } from './types';

export const handleContentfulError = (error: unknown): string => {
  const { message, details } = parseContentfulError(error);
  return details ? `${message} (${details})` : message;
};