import { Link } from '@tanstack/react-router';
import { Form } from '@layout';
import { Button, Input, Select } from '@ui';
import { PART_OPTIONS } from '../../-constants/signUpSteps';
import * as S from '../funnel/SignUpFunnel.css';
import type { SignUpStepProps } from './SignUpStep.types';

type SignUpProfileStepProps = SignUpStepProps & {
  canSubmit: boolean;
  isSubmitting: boolean;
  submitErrorMessage: string | null;
  onPrev: () => void;
};

export const SignUpProfileStep = ({
  register,
  errors,
  errorMessages,
  disabled = false,
  canSubmit,
  isSubmitting,
  submitErrorMessage,
  onPrev,
}: SignUpProfileStepProps) => {
  return (
    <>
      <Form.Body>
        <Input
          label='이름'
          placeholder='이름을 입력해주세요.'
          errorMessage={errorMessages.name ?? errors.name?.message}
          disabled={disabled}
          {...register('name')}
        />
        <Input
          label='이메일'
          placeholder='이메일을 입력해주세요.'
          errorMessage={errorMessages.email ?? errors.email?.message}
          disabled={disabled}
          {...register('email')}
        />
        <Input
          label='나이'
          placeholder='나이를 입력해주세요.'
          inputMode='numeric'
          errorMessage={errorMessages.age ?? errors.age?.message}
          disabled={disabled}
          {...register('age')}
        />
        <Select
          label='파트'
          errorMessage={errorMessages.part ?? errors.part?.message}
          disabled={disabled}
          {...register('part')}
        >
          <option value=''>파트를 선택해주세요.</option>
          {PART_OPTIONS.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </Select>
      </Form.Body>
      <Form.Actions className={S.actions}>
        <p className={S.errorMessage} aria-hidden={submitErrorMessage ? undefined : true}>
          {submitErrorMessage ?? ' '}
        </p>
        <div className={S.buttonGroup}>
          <Button
            type='button'
            variant='neutral'
            fullWidth
            disabled={disabled || isSubmitting}
            onClick={onPrev}
          >
            이전
          </Button>
          <Button
            type='submit'
            fullWidth
            disabled={!canSubmit || disabled}
            isLoading={isSubmitting}
            loadingText='회원가입 중'
          >
            회원가입
          </Button>
        </div>
        <Link className={S.loginLink} to='/signin'>
          로그인
        </Link>
      </Form.Actions>
    </>
  );
};
