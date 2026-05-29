import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const list = recipe({
  base: {
    width: '100%',
  },
  variants: {
    layout: {
      stack: {
        display: 'flex',
        flexDirection: 'column',
      },
      grid: {
        display: 'grid',
      },
    },
    gap: {
      xs: {
        gap: vars.space.xs,
      },
      sm: {
        gap: vars.space.sm,
      },
      md: {
        gap: vars.space.md,
      },
      lg: {
        gap: vars.space.lg,
      },
      xl: {
        gap: vars.space.xl,
      },
      xxl: {
        gap: vars.space.xxl,
      },
    },
  },
  defaultVariants: {
    layout: 'stack',
    gap: 'md',
  },
});
