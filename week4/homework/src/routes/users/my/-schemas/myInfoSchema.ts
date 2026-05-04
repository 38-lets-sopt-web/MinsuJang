import { z } from 'zod/v4';

export const myInfoSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  email: z.string().min(1, '이메일을 입력해주세요.').email('올바른 이메일 형식으로 입력해주세요.'),
  age: z.string().min(1, '나이를 입력해주세요.').regex(/^\d+$/, '나이는 숫자로 입력해주세요.'),
});

export type MyInfoFormValues = z.infer<typeof myInfoSchema>;

export const toMyInfoUpdateRequest = (values: MyInfoFormValues) => ({
  name: values.name,
  email: values.email,
  age: Number(values.age),
});
