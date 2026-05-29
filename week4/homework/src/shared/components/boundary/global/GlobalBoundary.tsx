import { Suspense } from 'react';
import type { ErrorInfo, ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { DefaultErrorFallback, DefaultPendingFallback } from '../fallback/BoundaryFallback';
import type { BoundaryFallbackProps } from '../fallback/BoundaryFallback';

type GlobalBoundaryProps = {
  children: ReactNode;
  pendingFallback?: ReactNode;
  errorFallback?: (props: BoundaryFallbackProps) => ReactNode;
  onError?: (error: unknown, info: ErrorInfo) => void;
};

export function GlobalBoundary({
  children,
  pendingFallback = <DefaultPendingFallback />,
  errorFallback,
  onError,
}: GlobalBoundaryProps) {
  return (
    <ErrorBoundary
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
  );
}
