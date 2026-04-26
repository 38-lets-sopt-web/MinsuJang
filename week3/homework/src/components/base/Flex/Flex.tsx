import type { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@lib/cn';
import * as styles from './Flex.css';

type FlexProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  direction?: keyof typeof styles.direction;
  align?: keyof typeof styles.align;
  justify?: keyof typeof styles.justify;
  wrap?: keyof typeof styles.wrap;
  gap?: CSSProperties['gap'];
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>;

export function Flex<T extends ElementType = 'div'>({
  as,
  children,
  className,
  direction = 'row',
  align = 'stretch',
  justify = 'start',
  wrap = 'nowrap',
  gap,
  style,
  ...props
}: FlexProps<T>) {
  const Component = as ?? 'div';

  return (
    <Component
      className={cn(
        styles.flex,
        styles.direction[direction],
        styles.align[align],
        styles.justify[justify],
        styles.wrap[wrap],
        className,
      )}
      style={{ ...style, gap }}
      {...props}
    >
      {children}
    </Component>
  );
}
