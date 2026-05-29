import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const root = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
});

export const header = style({
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
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

export const body = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});

export const actions = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.sm,
});
