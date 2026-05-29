import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const textBase = style({
  fontSize: vars.font.bodyMd,
  lineHeight: vars.font.lineHeightNormal,
  margin: 0,
});

export const tone = styleVariants({
  primary: { color: vars.color.textPrimary },
  secondary: { color: vars.color.textSecondary },
  success: { color: vars.color.textSuccess },
  danger: { color: vars.color.textDanger },
});
