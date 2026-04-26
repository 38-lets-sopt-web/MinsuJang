import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@lib/cn';
import * as styles from './Title.css';

type TitleProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  level?: keyof typeof styles.titleLevel;
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
    <Component className={cn(styles.titleBase, styles.titleLevel[level], className)} {...props}>
      {children}
    </Component>
  );
}
