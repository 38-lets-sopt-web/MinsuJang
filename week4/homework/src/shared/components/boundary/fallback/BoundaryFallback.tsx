import type { ReactNode } from 'react';
import { Button } from '@ui';
import { isApiError } from '@apis/core';
import * as S from './BoundaryFallback.css';

export type BoundaryFallbackProps = {
  error: unknown;
  reset: () => void;
};

type DefaultPendingFallbackProps = {
  message?: string;
};

type DefaultErrorFallbackProps = BoundaryFallbackProps & {
  title?: string;
  retryLabel?: ReactNode;
};

export function DefaultPendingFallback({
  message = '불러오는 중입니다.',
}: DefaultPendingFallbackProps) {
  return (
    <div className={S.fallback} role='status' aria-live='polite'>
      <p className={S.description}>{message}</p>
    </div>
  );
}

export function DefaultErrorFallback({
  error,
  reset,
  title = '문제가 발생했습니다.',
  retryLabel = '다시 시도',
}: DefaultErrorFallbackProps) {
  const message = isApiError(error) ? error.message : '잠시 후 다시 시도해주세요.';

  return (
    <div className={S.fallback} role='alert'>
      <strong className={S.title}>{title}</strong>
      <p className={S.description}>{message}</p>
      <Button type='button' variant='neutral' onClick={reset}>
        {retryLabel}
      </Button>
    </div>
  );
}
