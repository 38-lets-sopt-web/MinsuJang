import type { CSSProperties, ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@lib/cn';
import * as S from './Flex.css';

type FlexProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  direction?: keyof typeof S.direction;
  align?: keyof typeof S.align;
  justify?: keyof typeof S.justify;
  wrap?: keyof typeof S.wrap;
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
        S.flex,
        S.direction[direction],
        S.align[align],
        S.justify[justify],
        S.wrap[wrap],
        className,
      )}
      style={{ ...style, gap }}
      {...props}
    >
      {children}
    </Component>
  );
}
