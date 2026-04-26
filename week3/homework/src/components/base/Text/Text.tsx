import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@lib/cn';
import * as S from './Text.css';

type TextProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  tone?: keyof typeof S.tone;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>;

export function Text<T extends ElementType = 'p'>({
  as,
  children,
  className,
  tone = 'primary',
  ...props
}: TextProps<T>) {
  const Component = as ?? 'p';

  return (
    <Component className={cn(S.textBase, S.tone[tone], className)} {...props}>
      {children}
    </Component>
  );
}
