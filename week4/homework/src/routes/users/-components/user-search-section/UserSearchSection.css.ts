import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const root = style({
  width: '100%',
  maxWidth: '45rem',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
});

export const form = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});

export const result = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.md,
});

export const resultTitle = style({
  margin: 0,
  color: vars.color.textPrimary,
  fontSize: vars.font.headingMd,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightTight,
});

export const emptyResult = style({
  width: '100%',
  minHeight: '8rem',
  borderRadius: vars.radius.card,
  background: vars.color.boardBg,
  boxShadow: vars.shadow.card,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.textSecondary,
  fontSize: vars.font.bodyMd,
  fontWeight: vars.font.weightMedium,
  lineHeight: vars.font.lineHeightNormal,
});
