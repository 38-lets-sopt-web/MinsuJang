import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef } from 'react';
import { cn } from '@shared/utils/cn';
import { iconButton } from './IconButton.css';

type IconButtonA11yProps =
  | { 'aria-label': string; 'aria-labelledby'?: string }
  | { 'aria-label'?: string; 'aria-labelledby': string };

type IconButtonProps = Omit<ComponentPropsWithoutRef<'button'>, 'aria-label' | 'aria-labelledby'> &
  IconButtonA11yProps & {
    variant?: 'primary' | 'neutral' | 'danger' | 'ghost';
    size?: 'md' | 'sm';
    isLoading?: boolean;
  };

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      type = 'button',
      variant = 'neutral',
      size = 'md',
      isLoading = false,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(iconButton({ variant, size }), className)}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {children}
      </button>
    );
  },
);

IconButton.displayName = 'IconButton';
