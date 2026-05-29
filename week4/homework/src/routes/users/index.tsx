import { createFileRoute } from '@tanstack/react-router';
import { UsersPage } from './-UsersPage';

export const Route = createFileRoute('/users/')({
  component: UsersPage,
});
