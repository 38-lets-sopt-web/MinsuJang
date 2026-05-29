import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const root = style({
  width: '100%',
  borderRadius: vars.radius.card,
  background: vars.color.boardBg,
  boxShadow: vars.shadow.card,
  padding: vars.space.xl,
  display: 'grid',
  gridTemplateColumns: 'auto minmax(0, 1fr)',
  gap: `${vars.space.md} ${vars.space.xl}`,
});

export const label = style({
  color: vars.color.textPrimary,
  fontSize: vars.font.bodyMd,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightNormal,
});

export const value = style({
  margin: 0,
  color: vars.color.textSecondary,
  fontSize: vars.font.bodyMd,
  fontWeight: vars.font.weightMedium,
  lineHeight: vars.font.lineHeightNormal,
  textAlign: 'right',
  overflowWrap: 'anywhere',
});
