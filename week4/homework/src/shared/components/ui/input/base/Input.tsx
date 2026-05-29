import { forwardRef, useId } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { Field } from '@ui/field';
import { cn } from '@shared/utils/cn';
import * as S from './Input.css';

type InputProps = ComponentPropsWithoutRef<'input'> & {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  fullWidth?: boolean;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      id,
      type = 'text',
      label,
      helperText,
      errorMessage,
      fullWidth = true,
      className,
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

    return (
      <Field className={cn(S.root, fullWidth && S.fullWidth)}>
        {label ? <Field.Label htmlFor={inputId}>{label}</Field.Label> : null}
        <Field.Control>
          <input
            ref={ref}
            id={inputId}
            type={type}
            className={cn(S.input, hasError && S.error, className)}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            {...props}
          />
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

Input.displayName = 'Input';
