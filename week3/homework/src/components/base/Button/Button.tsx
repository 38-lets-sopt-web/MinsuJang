import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import { cn } from '@lib/cn';
import * as S from './Button.css';

type ButtonProps = {
  variant?: keyof typeof S.variant;
  size?: keyof typeof S.size;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, type = 'button', variant = 'neutral', size = 'md', ...props },
  ref,
) {
  return (
    <button
      ref={ref}
      className={cn(S.button, S.variant[variant], S.size[size], className)}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
});
