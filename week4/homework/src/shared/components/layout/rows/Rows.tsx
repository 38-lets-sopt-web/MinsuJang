import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@shared/utils/cn';
import { rows } from './Rows.css';

type RowsProps = ComponentPropsWithoutRef<'div'> & {
  gap?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  fullWidth?: boolean;
};

export const Rows = forwardRef<HTMLDivElement, RowsProps>(
  ({ gap = 'xl', fullWidth = true, className, ...props }, ref) => {
    return <div ref={ref} className={cn(rows({ gap, fullWidth }), className)} {...props} />;
  },
);

Rows.displayName = 'Rows';
