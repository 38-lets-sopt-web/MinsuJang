export type User = {
  id: number;
  loginId: string;
  name: string;
  email: string;
  age: number;
  part: string;
};

export type UserUpdateRequest = {
  name: string;
  email: string;
  age: number;
};

export type UserListItem = Pick<User, 'id' | 'name' | 'part'>;

export type UserListResponse = {
  users: UserListItem[];
};
