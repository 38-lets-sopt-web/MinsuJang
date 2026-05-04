import { isApiError } from './types.ts';

export function getErrorMessage(error: unknown, fallbackMessage: string) {
  if (!error) {
    return null;
  }

  if (isApiError(error)) {
    return error.message;
  }

  if (error instanceof Error && error.message) {
    return error.message;
  }

  if (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof error.message === 'string'
  ) {
    return error.message;
  }

  return fallbackMessage;
}
