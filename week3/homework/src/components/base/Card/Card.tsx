import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@lib/cn';
import * as S from './Card.css';

type CardRootProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export function CardRoot({ children, className, ...props }: CardRootProps) {
  return (
    <div className={cn(S.card, className)} {...props}>
      {children}
    </div>
  );
}

export function CardTitle({ children, className, ...props }: ComponentPropsWithoutRef<'h3'>) {
  return (
    <h3 className={cn(S.title, className)} {...props}>
      {children}
    </h3>
  );
}

export function CardValue({ children, className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return (
    <p className={cn(S.value, className)} {...props}>
      {children}
    </p>
  );
}

export function CardDescription({ children, className, ...props }: ComponentPropsWithoutRef<'p'>) {
  return (
    <p className={cn(S.description, className)} {...props}>
      {children}
    </p>
  );
}
