import { HTTPError } from 'ky';
import type { Options } from 'ky';
import { api } from './api';
import { ApiError } from './types.ts';
import type { BaseResponse } from './types.ts';

async function request<T>(method: string, url: string, options?: Options) {
  try {
    const response = await api(url, {
      ...options,
      method,
    }).json<BaseResponse<T>>();

    return response.data as T;
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorResponse = await error.response.json<BaseResponse<unknown>>().catch(() => null);

      if (errorResponse) {
        throw new ApiError(errorResponse);
      }
    }

    throw error;
  }
}

export const http = {
  get: <T>(url: string, options?: Options) => request<T>('GET', url, options),
  post: <T>(url: string, options?: Options) => request<T>('POST', url, options),
  patch: <T>(url: string, options?: Options) => request<T>('PATCH', url, options),
  delete: <T>(url: string, options?: Options) => request<T>('DELETE', url, options),
};
