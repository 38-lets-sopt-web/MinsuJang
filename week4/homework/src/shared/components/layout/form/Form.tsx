/* eslint-disable react-refresh/only-export-components */
import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@shared/utils/cn';
import * as styles from './Form.css';

type FormProps = ComponentPropsWithoutRef<'form'>;
type FormHeaderProps = ComponentPropsWithoutRef<'header'> & {
  title: string;
  description?: string;
};
type FormBodyProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
};
type FormActionsProps = ComponentPropsWithoutRef<'div'> & {
  children: ReactNode;
};

const FormRoot = forwardRef<HTMLFormElement, FormProps>(({ className, ...props }, ref) => {
  return <form ref={ref} className={cn(styles.root, className)} {...props} />;
});

FormRoot.displayName = 'Form';

function FormHeader({ title, description, className, ...props }: FormHeaderProps) {
  return (
    <header className={cn(styles.header, className)} {...props}>
      <h1 className={styles.title}>{title}</h1>
      {description ? <p className={styles.description}>{description}</p> : null}
    </header>
  );
}

function FormBody({ className, ...props }: FormBodyProps) {
  return <div className={cn(styles.body, className)} {...props} />;
}

function FormActions({ className, ...props }: FormActionsProps) {
  return <div className={cn(styles.actions, className)} {...props} />;
}

export const Form = Object.assign(FormRoot, {
  Header: FormHeader,
  Body: FormBody,
  Actions: FormActions,
});
