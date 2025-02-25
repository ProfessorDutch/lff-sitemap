export type ErrorCode = 
  | 'VALIDATION_ERROR'
  | 'NETWORK_ERROR'
  | 'DATABASE_ERROR'
  | 'AUTH_ERROR'
  | 'UNKNOWN_ERROR';

export interface ApiErrorDetails {
  code: ErrorCode;
  field?: string;
  details?: Record<string, unknown>;
}