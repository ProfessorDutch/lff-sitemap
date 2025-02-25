import type { ErrorCode, ApiErrorDetails } from './types';
import { API_ERROR_MESSAGES } from '../constants';

export class ApiError extends Error {
  constructor(
    message: string,
    public code: ErrorCode,
    public details?: ApiErrorDetails
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

export const handleSupabaseError = (error: unknown): never => {
  if (error instanceof Error) {
    // Handle specific Supabase error codes
    if ('code' in error) {
      switch ((error as { code: string }).code) {
        case '23505':
          throw new ApiError(
            API_ERROR_MESSAGES.DATABASE.DUPLICATE,
            'DATABASE_ERROR',
            { code: 'DUPLICATE_RECORD' }
          );
        case '23514':
          throw new ApiError(
            API_ERROR_MESSAGES.DATABASE.CONSTRAINT,
            'DATABASE_ERROR',
            { code: 'CONSTRAINT_VIOLATION' }
          );
        default:
          throw new ApiError(error.message, 'DATABASE_ERROR');
      }
    }
    throw new ApiError(error.message, 'UNKNOWN_ERROR');
  }
  throw new ApiError('An unexpected error occurred', 'UNKNOWN_ERROR');
};