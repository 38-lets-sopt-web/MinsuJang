import { forwardRef } from 'react';
import type { CSSProperties, ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '@shared/utils/cn';
import { list } from './List.css';

type ListElement = 'div' | 'ul' | 'ol';
type ListProps = {
  as?: ListElement;
  layout?: 'stack' | 'grid';
  gap?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
  minItemWidth?: string;
} & ComponentPropsWithoutRef<ListElement>;

export const List = forwardRef<HTMLElement, ListProps>(
  (
    {
      as = 'div',
      layout = 'stack',
      gap = 'md',
      minItemWidth = '16rem',
      className,
      style,
      ...props
    },
    ref,
  ) => {
    const Component = as as ElementType;
    const gridStyle: CSSProperties =
      layout === 'grid'
        ? { gridTemplateColumns: `repeat(auto-fit, minmax(${minItemWidth}, 1fr))` }
        : {};

    return (
      <Component
        ref={ref}
        className={cn(list({ layout, gap }), className)}
        style={{ ...gridStyle, ...style }}
        {...props}
      />
    );
  },
);

List.displayName = 'List';
