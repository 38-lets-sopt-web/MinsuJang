import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@shared/utils/cn';
import { flex } from './Flex.css';

type FlexProps = ComponentPropsWithoutRef<'div'> & {
  direction?: 'row' | 'column';
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between';
  gap?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  wrap?: boolean;
  fullWidth?: boolean;
};

export const Flex = forwardRef<HTMLDivElement, FlexProps>(
  (
    {
      direction = 'row',
      align = 'stretch',
      justify = 'start',
      gap = 'none',
      wrap = false,
      fullWidth = false,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(flex({ direction, align, justify, gap, wrap, fullWidth }), className)}
        {...props}
      />
    );
  },
);

Flex.displayName = 'Flex';
