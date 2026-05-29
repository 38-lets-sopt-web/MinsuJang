import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@shared/utils/cn';
import { column } from './Column.css';

type ColumnProps = ComponentPropsWithoutRef<'div'> & {
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  align?: 'start' | 'center' | 'end' | 'stretch';
  fullWidth?: boolean;
};

export const Column = forwardRef<HTMLDivElement, ColumnProps>(
  ({ gap = 'md', align = 'stretch', fullWidth = true, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn(column({ gap, align, fullWidth }), className)} {...props} />
    );
  },
);

Column.displayName = 'Column';
