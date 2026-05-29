import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { Link, useNavigate } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';
import { Form } from '@layout';
import { Button, Input, PasswordInput } from '@ui';
import { getErrorMessage } from '@apis/core';
import { useLoginMutation } from '@shared/queries';
import { signInSchema } from '../-schemas/signInSchema';
import type { SignInFormValues } from '../-schemas/signInSchema';
import * as S from './SignInForm.css';

export const SignInForm = () => {
  const navigate = useNavigate();
  const loginMutation = useLoginMutation();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignInFormValues>({
    resolver: standardSchemaResolver(signInSchema),
    mode: 'onChange',
    defaultValues: {
      loginId: '',
      password: '',
    },
  });

  const loginErrorMessage = getErrorMessage(loginMutation.error, '로그인에 실패했습니다.');

  const onSubmit = (values: SignInFormValues) => {
    loginMutation.mutate(values, {
      onSuccess: () => {
        navigate({ to: '/users/my' });
      },
    });
  };

  return (
    <Form className={S.form} onSubmit={handleSubmit(onSubmit)}>
      <Form.Header title='SOPT MEMBERS' />
      <Form.Body>
        <Input
          label='아이디'
          placeholder='아이디를 입력해주세요.'
          errorMessage={errors.loginId?.message}
          disabled={loginMutation.isPending}
          {...register('loginId')}
        />
        <PasswordInput
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요.'
          errorMessage={errors.password?.message}
          disabled={loginMutation.isPending}
          {...register('password')}
        />
      </Form.Body>
      <Form.Actions className={S.actions}>
        <p className={S.errorMessage} aria-hidden={loginErrorMessage ? undefined : true}>
          {loginErrorMessage ?? ' '}
        </p>
        <Button
          type='submit'
          fullWidth
          disabled={!isValid}
          isLoading={loginMutation.isPending}
          loadingText='로그인 중'
        >
          로그인
        </Button>
        <Link className={S.signUpLink} to='/signup'>
          회원가입
        </Link>
      </Form.Actions>
    </Form>
  );
};
