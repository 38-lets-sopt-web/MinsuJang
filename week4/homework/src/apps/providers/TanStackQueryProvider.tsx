import { QueryClientProvider } from '@tanstack/react-query';
import type { ReactNode } from 'react';
import { queryClient } from '@apps/query';

type TanStackQueryProviderProps = {
  children: ReactNode;
};

export function TanStackQueryProvider({ children }: TanStackQueryProviderProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
