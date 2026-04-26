import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@lib/cn';
import { section, sectionPanel } from './Section.css';

type SectionProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  panel?: boolean;
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children'>;

export function Section<T extends ElementType = 'section'>({
  as,
  children,
  className,
  panel = false,
  ...props
}: SectionProps<T>) {
  const Component = as ?? 'section';

  return (
    <Component className={cn(section, panel && sectionPanel, className)} {...props}>
      {children}
    </Component>
  );
}
