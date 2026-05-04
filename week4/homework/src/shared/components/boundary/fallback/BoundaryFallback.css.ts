import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const fallback = style({
  width: '100%',
  minHeight: '12rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: vars.space.md,
  color: vars.color.textPrimary,
  textAlign: 'center',
});

export const title = style({
  color: vars.color.textPrimary,
  fontSize: vars.font.headingMd,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightTight,
});

export const description = style({
  color: vars.color.textSecondary,
  fontSize: vars.font.bodyMd,
  fontWeight: vars.font.weightMedium,
  lineHeight: vars.font.lineHeightNormal,
});
