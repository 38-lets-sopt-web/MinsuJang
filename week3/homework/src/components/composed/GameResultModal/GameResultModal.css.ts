import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const overlay = style({
  alignItems: 'center',
  background: 'rgba(20, 55, 91, 0.28)',
  display: 'flex',
  inset: 0,
  justifyContent: 'center',
  padding: vars.space.pagePadding,
  position: 'fixed',
  zIndex: 10,
});

export const content = style({
  background: vars.color.boardBg,
  borderRadius: vars.radius.panel,
  boxShadow: vars.shadow.modal,
  maxWidth: '30rem',
  padding: vars.space.panelPadding,
  width: '100%',
});
