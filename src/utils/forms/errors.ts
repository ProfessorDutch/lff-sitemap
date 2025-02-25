export class FormSubmissionError extends Error {
  constructor(
    message: string,
    public code?: string,
    public details?: string
  ) {
    super(message);
    this.name = 'FormSubmissionError';
  }
}

export const handleSubmissionError = (error: unknown): FormSubmissionError => {
  if (error instanceof FormSubmissionError) {
    return error;
  }

  if (error instanceof Error) {
    return new FormSubmissionError(error.message);
  }

  return new FormSubmissionError('An unexpected error occurred');
};