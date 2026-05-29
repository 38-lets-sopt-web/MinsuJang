import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const card = style({
  background: vars.color.cardBg,
  borderRadius: vars.radius.card,
  boxShadow: vars.shadow.card,
  padding: vars.space.cardPadding,
});

export const title = style({
  color: vars.color.textPrimary,
  fontSize: vars.font.headingMd,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightTight,
  margin: 0,
});

export const value = style({
  color: vars.color.textPrimary,
  fontSize: vars.font.scoreXl,
  fontWeight: vars.font.weightBold,
  lineHeight: '1',
  margin: 0,
});

export const description = style({
  color: vars.color.textSecondary,
  fontSize: vars.font.bodyMd,
  margin: 0,
});
