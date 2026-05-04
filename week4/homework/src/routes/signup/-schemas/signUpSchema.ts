import { z } from 'zod/v4';

export const signUpLoginIdSchema = z.object({
  loginId: z
    .string()
    .min(1, '아이디를 입력해주세요.')
    .max(50, '아이디는 50글자 이하로 입력해주세요.'),
});

const signUpPasswordBaseSchema = z.object({
  password: z
    .string()
    .min(1, '비밀번호를 입력해주세요.')
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .max(64, '비밀번호는 64자 이하이어야 합니다.')
    .regex(/[A-Za-z]/, '비밀번호에는 영어가 1자 이상 포함되어야 합니다.')
    .regex(/[0-9]/, '비밀번호에는 숫자가 1자 이상 포함되어야 합니다.')
    .regex(/[^A-Za-z0-9\s]/, '비밀번호에는 특수문자가 1자 이상 포함되어야 합니다.')
    .regex(/^\S+$/, '비밀번호에는 공백을 포함할 수 없습니다.'),
  passwordConfirm: z.string().min(1, '비밀번호 확인을 입력해주세요.'),
});

const validatePasswordConfirm = ({
  password,
  passwordConfirm,
}: z.infer<typeof signUpPasswordBaseSchema>) => password === passwordConfirm;

export const signUpPasswordSchema = signUpPasswordBaseSchema.refine(validatePasswordConfirm, {
  path: ['passwordConfirm'],
  message: '비밀번호가 일치하지 않습니다.',
});

export const signUpProfileSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  email: z.string().min(1, '이메일을 입력해주세요.').email('올바른 이메일 형식으로 입력해주세요.'),
  age: z.string().min(1, '나이를 입력해주세요.').regex(/^\d+$/, '나이는 숫자로 입력해주세요.'),
  part: z.enum(['웹', 'iOS', '안드로이드'], '파트를 선택해주세요.'),
});

export const signUpSchema = signUpLoginIdSchema
  .merge(signUpPasswordBaseSchema)
  .merge(signUpProfileSchema)
  .refine(validatePasswordConfirm, {
    path: ['passwordConfirm'],
    message: '비밀번호가 일치하지 않습니다.',
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
export type SignUpSubmitValues = Omit<SignUpFormValues, 'age' | 'passwordConfirm'> & {
  age: number;
};

export const toSignUpSubmitValues = (values: SignUpFormValues): SignUpSubmitValues => ({
  loginId: values.loginId,
  password: values.password,
  name: values.name,
  email: values.email,
  age: Number(values.age),
  part: values.part,
});
