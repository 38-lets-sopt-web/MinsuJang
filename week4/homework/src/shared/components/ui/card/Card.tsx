/* eslint-disable react-refresh/only-export-components */
import type { ComponentPropsWithoutRef, ElementType } from 'react';
import { cn } from '@shared/utils/cn';
import * as styles from './Card.css';

type CardElement = 'div' | 'button' | 'a';
type CardProps = {
  as?: CardElement;
  variant?: 'default' | 'interactive';
} & ComponentPropsWithoutRef<CardElement>;

type CardTitleProps = ComponentPropsWithoutRef<'strong'>;
type CardBadgeProps = ComponentPropsWithoutRef<'span'>;

function CardRoot({ as = 'div', variant = 'default', className, ...props }: CardProps) {
  const Component = as as ElementType;
  const buttonProps = as === 'button' ? { type: 'button' as const } : {};

  return (
    <Component className={cn(styles.root({ variant }), className)} {...buttonProps} {...props} />
  );
}

function CardTitle({ className, ...props }: CardTitleProps) {
  return <strong className={cn(styles.title(), className)} {...props} />;
}

function CardBadge({ className, ...props }: CardBadgeProps) {
  return <span className={cn(styles.badge(), className)} {...props} />;
}

export const Card = Object.assign(CardRoot, {
  Title: CardTitle,
  Badge: CardBadge,
});
