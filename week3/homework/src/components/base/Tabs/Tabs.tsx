import type { ButtonHTMLAttributes, ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@lib/cn';
import * as S from './Tabs.css';

type TabsRootProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export function TabsRoot({ children, ...props }: TabsRootProps) {
  return <div {...props}>{children}</div>;
}

type TabsListProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;

export function TabsList({ children, className, ...props }: TabsListProps) {
  return (
    <div className={cn(S.tabsList, className)} role='tablist' {...props}>
      {children}
    </div>
  );
}

type TabsTriggerProps = {
  active?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function TabsTrigger({
  active = false,
  children,
  className,
  type = 'button',
  ...props
}: TabsTriggerProps) {
  return (
    <button
      aria-selected={active}
      className={cn(S.tabsTrigger, active ? S.tabsState.active : S.tabsState.inactive, className)}
      role='tab'
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
