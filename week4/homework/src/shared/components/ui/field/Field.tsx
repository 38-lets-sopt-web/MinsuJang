/* eslint-disable react-refresh/only-export-components */
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@shared/utils/cn';
import * as S from './Field.css';

type FieldProps = ComponentPropsWithoutRef<'div'>;
type FieldLabelProps = ComponentPropsWithoutRef<'label'>;
type FieldControlProps = ComponentPropsWithoutRef<'div'>;
type FieldMessageProps = ComponentPropsWithoutRef<'p'> & {
  helperText?: string;
  errorMessage?: string;
};

function FieldRoot({ children, className, ...props }: FieldProps) {
  return (
    <div className={cn(S.root, className)} {...props}>
      {children}
    </div>
  );
}

function FieldLabel({ className, ...props }: FieldLabelProps) {
  return <label className={cn(S.label, className)} {...props} />;
}

function FieldControl({ className, children, ...props }: FieldControlProps) {
  return (
    <div className={cn(S.control, className)} {...props}>
      {children}
    </div>
  );
}

function FieldMessage({ className, helperText, errorMessage, ...props }: FieldMessageProps) {
  const message: ReactNode = errorMessage ?? helperText;

  return (
    <p
      className={cn(S.message, errorMessage && S.errorMessage, className)}
      role={errorMessage ? 'alert' : undefined}
      aria-hidden={message ? undefined : true}
      {...props}
    >
      {message ?? ' '}
    </p>
  );
}

export const Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
  Control: FieldControl,
  Message: FieldMessage,
});
