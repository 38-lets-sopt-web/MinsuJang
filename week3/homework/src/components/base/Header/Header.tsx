import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@lib/cn';
import { header, headerPanel } from './Header.css';

type HeaderProps = {
  children: ReactNode;
  panel?: boolean;
} & ComponentPropsWithoutRef<'header'>;

export function Header({ children, className, panel = false, ...props }: HeaderProps) {
  return (
    <header className={cn(header, panel && headerPanel, className)} {...props}>
      {children}
    </header>
  );
}
