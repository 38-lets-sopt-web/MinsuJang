import { Link } from '@tanstack/react-router';
import { Form } from '@layout';
import { Button, PasswordInput } from '@ui';
import * as styles from '../funnel/SignUpFunnel.css';
import type { SignUpStepProps } from './SignUpStep.types';

type SignUpPasswordStepProps = SignUpStepProps & {
  canGoNext: boolean;
  onPrev: () => void;
  onNext: () => void;
};

export const SignUpPasswordStep = ({
  register,
  errors,
  errorMessages,
  disabled = false,
  canGoNext,
  onPrev,
  onNext,
}: SignUpPasswordStepProps) => {
  return (
    <>
      <Form.Body>
        <PasswordInput
          label='비밀번호'
          placeholder='비밀번호를 입력해주세요.'
          errorMessage={errorMessages.password ?? errors.password?.message}
          disabled={disabled}
          {...register('password')}
        />
        <PasswordInput
          label='비밀번호 확인'
          placeholder='비밀번호를 한 번 더 입력해주세요.'
          errorMessage={errorMessages.passwordConfirm ?? errors.passwordConfirm?.message}
          disabled={disabled}
          {...register('passwordConfirm')}
        />
      </Form.Body>
      <Form.Actions className={styles.actions}>
        <div className={styles.buttonGroup}>
          <Button type='button' variant='neutral' fullWidth disabled={disabled} onClick={onPrev}>
            이전
          </Button>
          <Button type='button' fullWidth disabled={!canGoNext || disabled} onClick={onNext}>
            다음
          </Button>
        </div>
        <Link className={styles.loginLink} to='/signin'>
          로그인
        </Link>
      </Form.Actions>
    </>
  );
};
