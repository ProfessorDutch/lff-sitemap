// Define specific error types
export interface ContentfulErrorDetails {
  name: string;
  details?: string;
}

export interface ContentfulError {
  message: string;
  details?: {
    errors?: ContentfulErrorDetails[];
  };
}

export type ErrorCode = '401' | '404' | 'unknownContentType' | 'network' | 'unknown';

export interface ErrorResponse {
  code: ErrorCode;
  message: string;
  details?: string;
}