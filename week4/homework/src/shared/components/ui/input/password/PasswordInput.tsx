import { forwardRef, useId, useState } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { Field } from '@ui/field';
import { cn } from '@shared/utils/cn';
import * as inputStyles from '../base/Input.css';
import * as styles from './PasswordInput.css';

type PasswordInputProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> & {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  fullWidth?: boolean;
  showPasswordLabel?: string;
  hidePasswordLabel?: string;
};

function EyeIcon() {
  return (
    <svg className={styles.icon} viewBox='0 0 24 24' fill='none' aria-hidden='true'>
      <path
        d='M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <circle cx='12' cy='12' r='3' stroke='currentColor' strokeWidth='2' />
    </svg>
  );
}

function EyeOffIcon() {
  return (
    <svg className={styles.icon} viewBox='0 0 24 24' fill='none' aria-hidden='true'>
      <path
        d='M3 3l18 18'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <path
        d='M10.6 10.6A3 3 0 0 0 13.4 13.4M6.7 6.9C4 8.6 2.5 12 2.5 12s3.5 6 9.5 6c1.7 0 3.2-.5 4.5-1.2M19.1 15.1c1.5-1.4 2.4-3.1 2.4-3.1S18 6 12 6c-.7 0-1.4.1-2 .2'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    {
      id,
      label,
      helperText,
      errorMessage,
      fullWidth = true,
      showPasswordLabel = '비밀번호 보기',
      hidePasswordLabel = '비밀번호 숨기기',
      className,
      disabled,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const messageId = `${inputId}-message`;
    const hasMessage = Boolean(helperText || errorMessage);
    const hasError = Boolean(errorMessage);
    const describedBy = cn(ariaDescribedBy, hasMessage && messageId) || undefined;
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setIsPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
    };

    return (
      <Field className={cn(inputStyles.root, fullWidth && inputStyles.fullWidth)}>
        {label ? <Field.Label htmlFor={inputId}>{label}</Field.Label> : null}
        <Field.Control>
          <input
            ref={ref}
            id={inputId}
            type={isPasswordVisible ? 'text' : 'password'}
            className={cn(
              inputStyles.input,
              styles.input,
              hasError && inputStyles.error,
              className,
            )}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            disabled={disabled}
            {...props}
          />
          <button
            type='button'
            className={styles.toggle}
            aria-label={isPasswordVisible ? hidePasswordLabel : showPasswordLabel}
            aria-pressed={isPasswordVisible}
            disabled={disabled}
            onClick={togglePasswordVisibility}
          >
            {isPasswordVisible ? <EyeOffIcon /> : <EyeIcon />}
          </button>
        </Field.Control>
        <Field.Message
          id={hasMessage ? messageId : undefined}
          helperText={helperText}
          errorMessage={errorMessage}
        />
      </Field>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
