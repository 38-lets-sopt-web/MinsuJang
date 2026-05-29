import type { CSSProperties, ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@lib/cn';
import { grid } from './Grid.css';

type GridProps = {
  children: ReactNode;
  columns?: string;
  rows?: string;
  gap?: CSSProperties['gap'];
  placeItems?: CSSProperties['placeItems'];
} & ComponentPropsWithoutRef<'div'>;

export function Grid({
  children,
  className,
  columns,
  rows,
  gap,
  placeItems,
  style,
  ...props
}: GridProps) {
  return (
    <div
      className={cn(grid, className)}
      style={{
        ...style,
        gridTemplateColumns: columns,
        gridTemplateRows: rows,
        gap,
        placeItems,
      }}
      {...props}
    >
      {children}
    </div>
  );
}
