import { forwardRef } from 'react';
import type { ComponentPropsWithoutRef, ReactNode } from 'react';
import { cn } from '@shared/utils/cn';
import { button } from './Button.css';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'neutral' | 'danger';
  size?: 'md' | 'sm';
  fullWidth?: boolean;
  isLoading?: boolean;
  loadingText?: string;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      type = 'button',
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      isLoading = false,
      loadingText,
      disabled,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const content: ReactNode = isLoading && loadingText ? loadingText : children;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(button({ variant, size, fullWidth }), className)}
        disabled={disabled || isLoading}
        aria-busy={isLoading || undefined}
        {...props}
      >
        {content}
      </button>
    );
  },
);

Button.displayName = 'Button';
