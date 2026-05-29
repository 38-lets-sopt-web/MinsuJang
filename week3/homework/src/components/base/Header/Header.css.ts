import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const header = style({
  width: '100%',
});

export const headerPanel = style({
  background: vars.color.panelBg,
  borderRadius: vars.radius.panel,
  padding: vars.space.panelPadding,
});
