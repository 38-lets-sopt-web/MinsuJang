import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const root = style({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
});

export const title = style({
  margin: 0,
  color: vars.color.textPrimary,
  fontSize: vars.font.headingMd,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightTight,
});

export const cardLink = style({
  textDecoration: 'none',
});
