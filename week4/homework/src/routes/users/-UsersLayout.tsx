import { Outlet } from '@tanstack/react-router';
import { AppHeader } from './-components/app-header/AppHeader';

export function UsersLayout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  );
}
