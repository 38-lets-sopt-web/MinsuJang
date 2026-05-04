import { createFileRoute } from '@tanstack/react-router';
import { UsersLayout } from './-UsersLayout';

export const Route = createFileRoute('/users')({
  component: UsersLayout,
});
