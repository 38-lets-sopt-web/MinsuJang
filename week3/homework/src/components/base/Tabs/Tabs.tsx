import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@lib/cn';
import * as styles from './Tabs.css';

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
  return <div className={styles.tabsList}>{children}</div>;
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
      className={cn(
        styles.tabsTrigger,
        active ? styles.tabsState.active : styles.tabsState.inactive,
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
