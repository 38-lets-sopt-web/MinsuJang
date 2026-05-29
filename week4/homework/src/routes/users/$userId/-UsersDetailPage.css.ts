import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const page = style({
  minHeight: `calc(100vh - ${vars.size.headerHeight})`,
  padding: `${vars.space.pageBottom} ${vars.space.pagePadding}`,
  display: 'flex',
  justifyContent: 'center',
});

export const content = style({
  width: '100%',
  maxWidth: '45rem',
  display: 'flex',
  flexDirection: 'column',
  gap: vars.space.xl,
});

export const title = style({
  margin: 0,
  color: vars.color.textPrimary,
  fontSize: vars.font.headingLg,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightTight,
  textAlign: 'center',
});

export const backLink = style({
  width: 'fit-content',
  color: vars.color.textSecondary,
  fontSize: vars.font.bodyMd,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightNormal,
  textDecoration: 'none',
});
