import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@lib/cn';
import * as S from './Tabs.css';

type TabsRootProps = {
  children: ReactNode;
};

export function TabsRoot({ children }: TabsRootProps) {
  return <div>{children}</div>;
}

type TabsListProps = {
  children: ReactNode;
};

export function TabsList({ children }: TabsListProps) {
  return <div className={S.tabsList}>{children}</div>;
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
      className={cn(S.tabsTrigger, active ? S.tabsState.active : S.tabsState.inactive, className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
