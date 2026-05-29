import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@lib/cn';
import * as S from './Title.css';

type TitleProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  level?: keyof typeof S.titleLevel;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>;

export function Title<T extends ElementType = 'h2'>({
  as,
  children,
  className,
  level = 'section',
  ...props
}: TitleProps<T>) {
  const Component = as ?? 'h2';

  return (
    <Component className={cn(S.titleBase, S.titleLevel[level], className)} {...props}>
      {children}
    </Component>
  );
}
