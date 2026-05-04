import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const flex = recipe({
  base: {
    display: 'flex',
  },
  variants: {
    direction: {
      row: {
        flexDirection: 'row',
      },
      column: {
        flexDirection: 'column',
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
    justify: {
      start: {
        justifyContent: 'flex-start',
      },
      center: {
        justifyContent: 'center',
      },
      end: {
        justifyContent: 'flex-end',
      },
      between: {
        justifyContent: 'space-between',
      },
    },
    gap: {
      none: {
        gap: 0,
      },
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
    wrap: {
      true: {
        flexWrap: 'wrap',
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    direction: 'row',
    align: 'stretch',
    justify: 'start',
    gap: 'none',
  },
});
