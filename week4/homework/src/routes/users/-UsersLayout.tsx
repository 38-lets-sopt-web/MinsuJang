import { Outlet } from '@tanstack/react-router';
import { AppHeader } from './-components/AppHeader';

export function UsersLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
