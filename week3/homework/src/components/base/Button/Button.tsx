import { forwardRef } from 'react';
import type { ButtonHTMLAttributes } from 'react';
import type { RecipeVariants } from '@vanilla-extract/recipes';
import { cn } from '@lib/cn';
import { button } from './Button.css';

type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;

type ButtonProps = {
  variant?: ButtonVariants['variant'];
  size?: ButtonVariants['size'];
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, className, type = 'button', variant = 'neutral', size = 'md', ...props },
  ref,
) {
  return (
    <button ref={ref} className={cn(button({ variant, size }), className)} type={type} {...props}>
      {children}
    </button>
  );
});
