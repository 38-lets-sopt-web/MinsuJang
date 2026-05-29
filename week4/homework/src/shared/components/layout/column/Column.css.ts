import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const column = recipe({
  base: {
    display: 'flex',
    flexDirection: 'column',
  },
  variants: {
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
    align: {
      start: {
        alignItems: 'flex-start',
      },
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'flex-end',
      },
      stretch: {
        alignItems: 'stretch',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    gap: 'md',
    align: 'stretch',
    fullWidth: true,
  },
});
