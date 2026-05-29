import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const select = style({
  cursor: 'pointer',

  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
    },
  },
});

export const option = style({
  color: vars.color.textPrimary,
});
