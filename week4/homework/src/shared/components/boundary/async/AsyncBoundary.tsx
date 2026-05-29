import { Suspense } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import { DefaultErrorFallback, DefaultPendingFallback } from '../fallback/BoundaryFallback';
import type { BoundaryFallbackProps } from '../fallback/BoundaryFallback';

type AsyncBoundaryProps = {
  children: ReactNode;
  pendingFallback?: ReactNode;
  errorFallback?: (props: BoundaryFallbackProps) => ReactNode;
  onError?: (error: unknown, info: ErrorInfo) => void;
};

export function AsyncBoundary({
  children,
  pendingFallback = <DefaultPendingFallback />,
  errorFallback,
  onError,
}: AsyncBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          onError={onError}
          fallbackRender={({ error, resetErrorBoundary }) =>
            errorFallback ? (
              errorFallback({ error, reset: resetErrorBoundary })
            ) : (
              <DefaultErrorFallback error={error} reset={resetErrorBoundary} />
            )
          }
        >
          <Suspense fallback={pendingFallback}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}
