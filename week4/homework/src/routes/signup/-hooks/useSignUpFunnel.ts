import { standardSchemaResolver } from '@hookform/resolvers/standard-schema';
import { useNavigate } from '@tanstack/react-router';
import { useCallback, useEffect } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { getErrorMessage } from '@apis/core';
import { useFunnel } from '@shared/hooks';
import { useSignupMutation } from '@shared/queries';
import { SIGN_UP_STEPS } from '../-constants/signUpSteps';
import {
  signUpLoginIdSchema,
  signUpPasswordSchema,
  signUpProfileSchema,
  signUpSchema,
  toSignUpSubmitValues,
} from '../-schemas/signUpSchema';
import type { SignUpFormValues } from '../-schemas/signUpSchema';

type SignUpFieldErrorMessages = Partial<Record<keyof SignUpFormValues, string>>;
type SignUpSchemaIssues = NonNullable<ReturnType<typeof signUpSchema.safeParse>['error']>['issues'];

const getFirstIssueMessages = (
  issues: SignUpSchemaIssues,
  shouldShowMessage: (fieldName: keyof SignUpFormValues) => boolean,
) => {
  return issues.reduce<SignUpFieldErrorMessages>((messages, issue) => {
    const fieldName = issue.path[0] as keyof SignUpFormValues | undefined;

    if (!fieldName || messages[fieldName] || !shouldShowMessage(fieldName)) {
      return messages;
    }

    return {
      ...messages,
      [fieldName]: issue.message,
    };
  }, {});
};

export const useSignUpFunnel = () => {
  const navigate = useNavigate();
  const signupMutation = useSignupMutation();
  const { currentStep, goNext, goPrev } = useFunnel(SIGN_UP_STEPS);
  const {
    register,
    handleSubmit,
    control,
    clearErrors,
    getValues,
    setError,
    formState: { errors, isSubmitted, touchedFields },
  } = useForm<SignUpFormValues>({
    resolver: standardSchemaResolver(signUpSchema),
    mode: 'onChange',
    defaultValues: {
      loginId: '',
      password: '',
      passwordConfirm: '',
      name: '',
      email: '',
      age: '',
    },
  });

  const [loginId, password, passwordConfirm, name, email, age, part] = useWatch({
    control,
    name: ['loginId', 'password', 'passwordConfirm', 'name', 'email', 'age', 'part'],
  });
  const canGoPasswordStep = signUpLoginIdSchema.safeParse({ loginId }).success;
  const canGoProfileStep = signUpPasswordSchema.safeParse({ password, passwordConfirm }).success;
  const canSubmit = signUpProfileSchema.safeParse({ name, email, age, part }).success;
  const submitErrorMessage = getErrorMessage(signupMutation.error, '회원가입에 실패했습니다.');
  const loginIdErrorMessages = getFirstIssueMessages(
    signUpLoginIdSchema.safeParse({ loginId }).error?.issues ?? [],
    (fieldName) => Boolean(touchedFields[fieldName]) || isSubmitted,
  );
  const passwordErrorMessages = getFirstIssueMessages(
    signUpPasswordSchema.safeParse({ password, passwordConfirm }).error?.issues ?? [],
    (fieldName) => Boolean(touchedFields[fieldName]) || isSubmitted,
  );
  const profileErrorMessages = getFirstIssueMessages(
    signUpProfileSchema.safeParse({ name, email, age, part }).error?.issues ?? [],
    (fieldName) => Boolean(touchedFields[fieldName]) || isSubmitted,
  );
  const errorMessages = {
    ...loginIdErrorMessages,
    ...passwordErrorMessages,
    ...profileErrorMessages,
  };

  const setStepErrors = useCallback(
    (
      fieldNames: Array<keyof SignUpFormValues>,
      issues: Array<{ path: PropertyKey[]; message: string }>,
    ) => {
      clearErrors(fieldNames);

      issues.forEach(({ path, message }) => {
        const fieldName = path[0];

        if (fieldNames.includes(fieldName as keyof SignUpFormValues)) {
          setError(fieldName as keyof SignUpFormValues, { message });
        }
      });
    },
    [clearErrors, setError],
  );

  const goPasswordStep = () => {
    const fieldNames = ['loginId'] as const;
    const result = signUpLoginIdSchema.safeParse({ loginId: getValues('loginId') });

    if (!result.success) {
      setStepErrors([...fieldNames], result.error.issues);
      return;
    }

    clearErrors([...fieldNames]);
    goNext();
  };

  const goProfileStep = () => {
    const fieldNames = ['password', 'passwordConfirm'] as const;
    const result = signUpPasswordSchema.safeParse({
      password: getValues('password'),
      passwordConfirm: getValues('passwordConfirm'),
    });

    if (!result.success) {
      setStepErrors([...fieldNames], result.error.issues);
      return;
    }

    clearErrors([...fieldNames]);
    goNext();
  };

  useEffect(() => {
    if (currentStep !== 'loginId' || !loginId) {
      return;
    }

    const fieldNames = ['loginId'] as const;
    const result = signUpLoginIdSchema.safeParse({ loginId });

    if (!result.success) {
      setStepErrors([...fieldNames], result.error.issues);
      return;
    }

    clearErrors([...fieldNames]);
  }, [clearErrors, currentStep, loginId, setStepErrors]);

  useEffect(() => {
    if (currentStep !== 'password' || (!password && !passwordConfirm)) {
      return;
    }

    const fieldNames = ['password', 'passwordConfirm'] as const;
    const result = signUpPasswordSchema.safeParse({ password, passwordConfirm });

    if (!result.success) {
      setStepErrors([...fieldNames], result.error.issues);
      return;
    }

    clearErrors([...fieldNames]);
  }, [clearErrors, currentStep, password, passwordConfirm, setStepErrors]);

  useEffect(() => {
    if (currentStep !== 'profile' || (!name && !email && !age && !part)) {
      return;
    }

    const fieldNames = ['name', 'email', 'age', 'part'] as const;
    const result = signUpProfileSchema.safeParse({ name, email, age, part });

    if (!result.success) {
      setStepErrors([...fieldNames], result.error.issues);
      return;
    }

    clearErrors([...fieldNames]);
  }, [age, clearErrors, currentStep, email, name, part, setStepErrors]);

  const submit = handleSubmit((values) => {
    signupMutation.mutate(toSignUpSubmitValues(values), {
      onSuccess: () => {
        window.alert(values.name);
        navigate({ to: '/signin' });
      },
    });
  });

  return {
    field: {
      register,
      errors,
      errorMessages,
    },
    funnel: {
      currentStep,
      canGoPasswordStep,
      canGoProfileStep,
      canSubmit,
      goPrev,
      goPasswordStep,
      goProfileStep,
    },
    submission: {
      isPending: signupMutation.isPending,
      submitErrorMessage,
      submit,
    },
  };
};
