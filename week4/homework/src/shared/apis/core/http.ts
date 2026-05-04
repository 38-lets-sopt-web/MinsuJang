import type { Options } from 'ky';
import { api } from './api';
import { ApiError } from './types.ts';
import type { BaseResponse } from './types.ts';

function isBaseResponse(errorResponse: unknown): errorResponse is BaseResponse<unknown> {
  return (
    typeof errorResponse === 'object' &&
    errorResponse !== null &&
    'success' in errorResponse &&
    'status' in errorResponse &&
    'message' in errorResponse &&
    'code' in errorResponse &&
    typeof errorResponse.success === 'boolean' &&
    typeof errorResponse.status === 'number' &&
    typeof errorResponse.message === 'string' &&
    typeof errorResponse.code === 'string'
  );
}

async function request<T>(method: string, url: string, options?: Options) {
  const response = await api(url, {
    ...options,
    method,
    throwHttpErrors: false,
  });

  const body = await response.json().catch(() => null);

  if (isBaseResponse(body) && (!response.ok || !body.success)) {
    throw new ApiError(body);
  }

  if (!response.ok) {
    throw new Error('요청에 실패했습니다.');
  }

  if (!isBaseResponse(body)) {
    return undefined as T;
  }

  return body.data as T;
}

export const http = {
  get: <T>(url: string, options?: Options) => request<T>('GET', url, options),
  post: <T>(url: string, options?: Options) => request<T>('POST', url, options),
  patch: <T>(url: string, options?: Options) => request<T>('PATCH', url, options),
  delete: <T>(url: string, options?: Options) => request<T>('DELETE', url, options),
};
