import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const root = style({
  width: '100%',
  minHeight: vars.size.headerHeight,
  background: vars.color.headerBg,
  color: vars.color.headerText,
});

export const inner = style({
  width: '100%',
  maxWidth: vars.size.pageWidth,
  minHeight: vars.size.headerHeight,
  margin: '0 auto',
  padding: `0 ${vars.space.pagePadding}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: vars.space.xl,
});

export const brand = style({
  display: 'grid',
  gap: vars.space.xs,
});

export const title = style({
  color: vars.color.headerText,
  fontSize: vars.font.headingMd,
  fontWeight: vars.font.weightBold,
  lineHeight: vars.font.lineHeightTight,
});

export const description = style({
  color: vars.color.headerSubText,
  fontSize: vars.font.labelMd,
  fontWeight: vars.font.weightMedium,
  lineHeight: vars.font.lineHeightNormal,
});

export const nav = style({
  display: 'flex',
  alignItems: 'center',
  gap: vars.space.lg,
});

export const navItem = style({
  color: vars.color.headerText,
  fontSize: vars.font.labelMd,
  fontWeight: vars.font.weightSemibold,
  lineHeight: vars.font.lineHeightNormal,
});

export const navButton = style([
  navItem,
  {
    border: 0,
    background: 'transparent',
    padding: 0,
    font: 'inherit',
    cursor: 'pointer',
  },
]);
