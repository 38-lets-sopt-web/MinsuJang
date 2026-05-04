import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const input = style({
  paddingRight: `calc(${vars.space.xl} + ${vars.space.xxl})`,
});

export const toggle = style({
  position: 'absolute',
  right: vars.space.md,
  top: '50%',
  width: vars.space.xl,
  height: vars.space.xl,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.textSecondary,
  cursor: 'pointer',
  transform: 'translateY(-50%)',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.5,
    },
  },
});

export const icon = style({
  width: vars.space.lg,
  height: vars.space.lg,
});
