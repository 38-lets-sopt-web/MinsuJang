import { createFileRoute } from '@tanstack/react-router';
import { UsersDetailPage } from './-UsersDetailPage';

export const Route = createFileRoute('/users/$userId')({
  component: UsersDetailPage,
});
