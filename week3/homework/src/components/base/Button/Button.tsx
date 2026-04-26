import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@lib/cn';
import * as styles from './Button.css';

type ButtonProps = {
  variant?: keyof typeof styles.variant;
  size?: keyof typeof styles.size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  type = 'button',
  variant = 'neutral',
  size = 'md',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(styles.button, styles.variant[variant], styles.size[size], className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
