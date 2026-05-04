import { Link } from '@tanstack/react-router';
import { Form } from '@layout';
import { Button, Input } from '@ui';
import * as styles from '../funnel/SignUpFunnel.css';
import type { SignUpStepProps } from './SignUpStep.types';

type SignUpLoginIdStepProps = SignUpStepProps & {
  canGoNext: boolean;
  onNext: () => void;
};

export const SignUpLoginIdStep = ({
  register,
  errors,
  errorMessages,
  disabled = false,
  canGoNext,
  onNext,
}: SignUpLoginIdStepProps) => {
  return (
    <>
      <Form.Body>
        <Input
          label='아이디'
          placeholder='아이디를 입력해주세요.'
          errorMessage={errorMessages.loginId ?? errors.loginId?.message}
          disabled={disabled}
          {...register('loginId')}
        />
      </Form.Body>
      <Form.Actions className={styles.actions}>
        <Button type='button' fullWidth disabled={!canGoNext || disabled} onClick={onNext}>
          다음
        </Button>
        <Link className={styles.loginLink} to='/signin'>
          로그인
        </Link>
      </Form.Actions>
    </>
  );
};
