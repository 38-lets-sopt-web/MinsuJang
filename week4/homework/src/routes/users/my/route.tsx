import { createFileRoute } from '@tanstack/react-router';
import { MyPage } from './-MyPage';

export const Route = createFileRoute('/users/my')({
  component: MyPage,
});
