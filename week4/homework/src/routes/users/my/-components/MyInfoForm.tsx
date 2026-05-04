import { Button, Input } from '@ui';
import type { User } from '@apis/users/users.types';
import { useMyInfoForm } from '../-hooks/useMyInfoForm';
import * as S from './MyInfoForm.css';

type MyInfoFormProps = {
  user: User;
};

export const MyInfoForm = ({ user }: MyInfoFormProps) => {
  const { field, submission } = useMyInfoForm({ user });

  return (
    <form className={S.root} onSubmit={submission.submit}>
      <Input
        label='이름'
        placeholder='이름을 입력해주세요.'
        errorMessage={field.errors.name?.message}
        disabled={submission.isPending}
        {...field.register('name')}
      />
      <Input
        label='이메일'
        placeholder='이메일을 입력해주세요.'
        errorMessage={field.errors.email?.message}
        disabled={submission.isPending}
        {...field.register('email')}
      />
      <Input
        label='나이'
        placeholder='나이를 입력해주세요.'
        inputMode='numeric'
        errorMessage={field.errors.age?.message}
        disabled={submission.isPending}
        {...field.register('age')}
      />
      <Button
        type='submit'
        fullWidth
        disabled={!submission.canSubmit}
        isLoading={submission.isPending}
        loadingText='수정 중'
      >
        정보 수정
      </Button>
    </form>
  );
};
