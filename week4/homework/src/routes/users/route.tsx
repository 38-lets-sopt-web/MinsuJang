import { createFileRoute, redirect } from '@tanstack/react-router';
import { getStoredUserId } from '@apis/core';
import { UsersLayout } from './-UsersLayout';

export const Route = createFileRoute('/users')({
  beforeLoad: () => {
    const userId = getStoredUserId();

    if (!userId) {
      throw redirect({ to: '/signin' });
    }

    return { userId };
  },
  component: UsersLayout,
});
