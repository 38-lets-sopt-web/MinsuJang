import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const controlsRow = style({
  marginBottom: vars.space.xl,
});

export const selector = style({
  alignItems: 'center',
  background: vars.color.boardBg,
  border: 0,
  borderRadius: vars.radius.card,
  color: vars.color.textPrimary,
  cursor: 'pointer',
  display: 'inline-flex',
  fontSize: vars.font.headingMd,
  fontWeight: vars.font.weightBold,
  minHeight: '4.5rem',
  minWidth: '10.625rem',
  padding: `0 ${vars.space.xl}`,
});
