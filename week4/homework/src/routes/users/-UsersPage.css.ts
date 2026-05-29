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
  maxWidth: vars.size.pageWidth,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: vars.space.pageBottom,
});

export const title = style({
  margin: 0,
  color: vars.color.textPrimary,
  fontSize: vars.font.headingLg,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightTight,
  textAlign: 'center',
});
