export interface FormSubmissionError extends Error {
  code?: string;
  details?: string;
}

export interface SubmissionResponse<T> {
  success: boolean;
  data?: T;
  error?: FormSubmissionError;
}