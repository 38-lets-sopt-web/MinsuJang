import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const section = style({
  width: '100%',
});

export const sectionPanel = style({
  background: vars.color.panelBg,
  borderRadius: vars.radius.panel,
  padding: vars.space.panelPadding,
});
