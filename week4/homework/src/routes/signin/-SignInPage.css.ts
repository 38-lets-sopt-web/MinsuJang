import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const page = style({
  minHeight: '100vh',
  padding: vars.space.pagePadding,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

export const content = style({
  width: '100%',
  maxWidth: '45rem',
});
