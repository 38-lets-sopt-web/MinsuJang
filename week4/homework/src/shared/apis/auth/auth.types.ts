export type SignupRequest = {
  loginId: string;
  password: string;
  name: string;
  email: string;
  age: number;
  part: string;
};

export type SigninRequest = {
  loginId: string;
  password: string;
};

export type SigninResponse = {
  userId: number;
};
