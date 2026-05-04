export type BaseResponse<T> = {
  success: boolean;
  status: number;
  message: string;
  code: string;
  data?: T;
  meta?: {
    path: string;
    timestamp: string;
  };
};

export class ApiError extends Error {
  status: number;
  code: string;
  meta?: BaseResponse<unknown>['meta'];

  constructor(response: BaseResponse<unknown>) {
    super(response.message);
    this.name = 'ApiError';
    this.status = response.status;
    this.code = response.code;
    this.meta = response.meta;
  }
}

export function isApiError(error: unknown): error is ApiError {
  return error instanceof ApiError;
}
