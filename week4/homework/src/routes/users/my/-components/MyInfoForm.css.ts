import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const root = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});
