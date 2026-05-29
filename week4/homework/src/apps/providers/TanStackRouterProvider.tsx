import { RouterProvider } from '@tanstack/react-router';
import { router } from '@apps/router';

export function TanStackRouterProvider() {
  return <RouterProvider router={router} />;
}
