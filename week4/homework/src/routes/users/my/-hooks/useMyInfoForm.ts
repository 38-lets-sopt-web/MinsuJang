import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { useForm, useWatch } from 'react-hook-form';
import { getErrorMessage } from '@apis/core';
import type { User } from '@apis/users/users.types';
import { useUpdateUserMutation } from '@shared/queries';
import { myInfoSchema, toMyInfoUpdateRequest } from '../-schemas/myInfoSchema';
import type { MyInfoFormValues } from '../-schemas/myInfoSchema';

type UseMyInfoFormParams = {
  user: User;
};

export const useMyInfoForm = ({ user }: UseMyInfoFormParams) => {
  const updateUserMutation = useUpdateUserMutation(user.id);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<MyInfoFormValues>({
    resolver: standardSchemaResolver(myInfoSchema),
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      email: user.email,
      age: String(user.age),
    },
  });
  const [name, email, age] = useWatch({ control, name: ['name', 'email', 'age'] });
  const canSubmit = myInfoSchema.safeParse({ name, email, age }).success;

  const submit = handleSubmit((values) => {
    updateUserMutation.mutate(toMyInfoUpdateRequest(values), {
      onSuccess: () => {
        window.alert('정보 수정에 성공했습니다.');
      },
      onError: (error) => {
        window.alert(getErrorMessage(error, '정보 수정에 실패했습니다.'));
      },
    });
  });

  return {
    field: {
      register,
      errors,
    },
    submission: {
      isPending: updateUserMutation.isPending,
      canSubmit,
      submit,
    },
  };
};
