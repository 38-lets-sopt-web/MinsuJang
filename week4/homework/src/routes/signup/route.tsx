import { createFileRoute } from '@tanstack/react-router';
import { SignUpPage } from './-SignUpPage';

export const Route = createFileRoute('/signup')({
  component: SignUpPage,
});
