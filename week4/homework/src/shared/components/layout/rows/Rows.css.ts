import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const rows = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
    gap: {
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
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    gap: 'xl',
    fullWidth: true,
  },
});
