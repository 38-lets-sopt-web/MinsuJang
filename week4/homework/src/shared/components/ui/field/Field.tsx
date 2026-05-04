/* eslint-disable react-refresh/only-export-components */
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@shared/utils/cn';
import * as styles from './Field.css';

type FieldProps = ComponentPropsWithoutRef<'div'>;
type FieldLabelProps = ComponentPropsWithoutRef<'label'>;
type FieldControlProps = ComponentPropsWithoutRef<'div'>;
type FieldMessageProps = ComponentPropsWithoutRef<'p'> & {
  helperText?: string;
  errorMessage?: string;
};

function FieldRoot({ children, className, ...props }: FieldProps) {
  return (
    <div className={cn(styles.root, className)} {...props}>
      {children}
    </div>
  );
}

function FieldLabel({ className, ...props }: FieldLabelProps) {
  return <label className={cn(styles.label, className)} {...props} />;
}

function FieldControl({ className, children, ...props }: FieldControlProps) {
  return (
    <div className={cn(styles.control, className)} {...props}>
      {children}
    </div>
  );
}

function FieldMessage({ className, helperText, errorMessage, ...props }: FieldMessageProps) {
  const message: ReactNode = errorMessage ?? helperText;

  if (!message) {
    return null;
  }

  return (
    <p
      className={cn(styles.message, errorMessage && styles.errorMessage, className)}
      role={errorMessage ? 'alert' : undefined}
      {...props}
    >
      {message}
    </p>
  );
}

export const Field = Object.assign(FieldRoot, {
  Label: FieldLabel,
  Control: FieldControl,
  Message: FieldMessage,
});
