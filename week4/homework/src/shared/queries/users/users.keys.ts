export const usersKeys = {
  all: ['users'] as const,
  lists: () => [...usersKeys.all, 'list'] as const,
  list: () => [...usersKeys.lists()] as const,
  details: () => [...usersKeys.all, 'detail'] as const,
  detail: (userId: number) => [...usersKeys.details(), userId] as const,
};
