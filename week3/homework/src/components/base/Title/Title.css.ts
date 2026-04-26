import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const titleBase = style({
  color: vars.color.textPrimary,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightTight,
  margin: 0,
});

export const titleLevel = styleVariants({
  page: { fontSize: vars.font.headingLg },
  section: { fontSize: vars.font.headingMd },
  block: { fontSize: vars.font.bodyMd },
});
