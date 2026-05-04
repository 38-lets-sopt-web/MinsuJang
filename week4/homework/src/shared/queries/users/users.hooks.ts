import { useSuspenseQuery } from '@tanstack/react-query';
import { userDetailQueryOptions, userListQueryOptions } from './users.queries';

export const useUserListQuery = () => {
  return useSuspenseQuery(userListQueryOptions());
};

export const useUserDetailQuery = (userId: number) => {
  return useSuspenseQuery(userDetailQueryOptions(userId));
};
