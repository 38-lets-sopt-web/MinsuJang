import { queryOptions } from '@tanstack/react-query';
import { getUsers, getUsersList } from '@apis/users/users';
import { usersKeys } from './users.keys';

export const userListQueryOptions = () =>
  queryOptions({
    queryKey: usersKeys.list(),
    queryFn: getUsersList,
  });

export const userDetailQueryOptions = (userId: number) =>
  queryOptions({
    queryKey: usersKeys.detail(userId),
    queryFn: () => getUsers(userId),
  });
