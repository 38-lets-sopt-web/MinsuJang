import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateUsers } from '@apis/users/users';
import type { UserUpdateRequest } from '@apis/users/users.types';
import { usersKeys } from './users.keys';

export const useUpdateUserMutation = (userId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (body: UserUpdateRequest) => updateUsers(userId, body),
    onSuccess: (updatedUser) => {
      queryClient.setQueryData(usersKeys.detail(userId), updatedUser);
      queryClient.invalidateQueries({ queryKey: usersKeys.list() });
    },
  });
};
