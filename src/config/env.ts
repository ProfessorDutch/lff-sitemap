// Environment variable validation
export const validateEnvVar = (name: string, value: string | undefined): string => {
  if (!value) {
    throw new Error(
      `Missing environment variable: ${name}. ` +
      'Please check your .env file and ensure all required variables are set.'
    );
  }
  return value;
};