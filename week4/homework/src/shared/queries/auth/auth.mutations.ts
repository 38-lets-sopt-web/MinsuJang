import { useMutation } from '@tanstack/react-query';
import { login, signup } from '@apis/auth/auth';
import { setStoredUserId } from '@apis/core';
import type { SigninRequest, SignupRequest } from '@apis/auth/auth.types';

export const useSignupMutation = () => {
  return useMutation({
    mutationFn: (body: SignupRequest) => signup(body),
  });
};

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (body: SigninRequest) => login(body),
    onSuccess: ({ userId }) => {
      setStoredUserId(userId);
    },
  });
};
