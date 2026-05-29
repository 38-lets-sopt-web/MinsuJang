import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const form = style({
  width: '100%',
});

export const actions = style({
  alignItems: 'center',
});

export const buttonGroup = style({
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: vars.space.sm,
});

export const loginLink = style({
  color: vars.color.textSecondary,
  fontSize: vars.font.bodyMd,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightNormal,
});

export const errorMessage = style({
  margin: 0,
  minHeight: `calc(${vars.font.labelMd} * ${vars.font.lineHeightNormal})`,
  color: vars.color.textDanger,
  fontSize: vars.font.labelMd,
  fontWeight: vars.font.weightMedium,
  lineHeight: vars.font.lineHeightNormal,
  textAlign: 'center',
});
