import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@lib/cn';
import * as styles from './Card.css';

type CardRootProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export function CardRoot({ children, className, ...props }: CardRootProps) {
  return (
    <div className={cn(styles.card, className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }: ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3 className={cn(styles.title, className)} {...props}>
      {children}
    </h3>
  );
}

export function CardValue({ children, className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return (
    <p className={cn(styles.value, className)} {...props}>
      {children}
    </p>
  );
}

export function CardDescription({ children, className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return (
    <p className={cn(styles.description, className)} {...props}>
      {children}
    </p>
  );
}
