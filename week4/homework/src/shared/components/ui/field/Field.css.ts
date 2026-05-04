import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const root = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xs,
});

export const label = style({
  color: vars.color.textPrimary,
  fontSize: vars.font.labelMd,
  fontWeight: vars.font.weightSemibold,
  lineHeight: vars.font.lineHeightNormal,
});

export const control = style({
  position: 'relative',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
});

export const message = style({
  margin: 0,
  color: vars.color.textSecondary,
  fontSize: vars.font.labelMd,
  fontWeight: vars.font.weightMedium,
  lineHeight: vars.font.lineHeightNormal,
});

export const errorMessage = style({
  color: vars.color.textDanger,
});
