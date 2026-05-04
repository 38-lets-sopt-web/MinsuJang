import { z } from 'zod/v4';

export const signInSchema = z.object({
  loginId: z.string().min(1, '아이디를 입력해주세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
});

export type SignInFormValues = z.infer<typeof signInSchema>;
