import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const headerPanel = style({
  marginBottom: vars.space.xl,
  minHeight: vars.size.headerHeight,
});

export const titleRow = style({
  height: '100%',
});
