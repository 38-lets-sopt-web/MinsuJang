import { forwardRef, useId } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { Field } from '@ui/field';
import { cn } from '@shared/utils/cn';
import * as inputStyles from '../base/Input.css';
import * as S from './Select.css';

type SelectProps = ComponentPropsWithoutRef<'select'> & {
  label?: string;
  helperText?: string;
  errorMessage?: string;
  fullWidth?: boolean;
};

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
      id,
      label,
      helperText,
      errorMessage,
      fullWidth = true,
      className,
      children,
      'aria-describedby': ariaDescribedBy,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const messageId = `${selectId}-message`;
    const hasMessage = Boolean(helperText || errorMessage);
    const hasError = Boolean(errorMessage);
    const describedBy = cn(ariaDescribedBy, hasMessage && messageId) || undefined;

    return (
      <Field className={cn(inputStyles.root, fullWidth && inputStyles.fullWidth)}>
        {label ? <Field.Label htmlFor={selectId}>{label}</Field.Label> : null}
        <Field.Control>
          <select
            ref={ref}
            id={selectId}
            className={cn(inputStyles.input, S.select, hasError && inputStyles.error, className)}
            aria-invalid={hasError || undefined}
            aria-describedby={describedBy}
            {...props}
          >
            {children}
          </select>
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

Select.displayName = 'Select';
