import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const gameShell = style({
  display: 'grid',
  gap: vars.space.sectionGap,
  gridTemplateColumns: '300px 1fr',
  '@media': {
    'screen and (max-width: 900px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const statsGrid = style({
  display: 'grid',
  gap: vars.space.sectionGap,
  gridTemplateColumns: '1fr 1fr',
});

export const statFull = style({
  gridColumn: '1 / -1',
  minHeight: '164px',
});

export const statHalf = style({
  minHeight: '164px',
});

export const controlsRow = style({
  marginBottom: vars.space.xl,
});

export const selector = style({
  alignItems: 'center',
  background: vars.color.boardBg,
  borderRadius: vars.radius.card,
  color: vars.color.textPrimary,
  display: 'inline-flex',
  fontSize: vars.font.headingMd,
  fontWeight: vars.font.weightBold,
  minHeight: '72px',
  minWidth: '170px',
  padding: `0 ${vars.space.xl}`,
});

export const boardFrame = style({
  background: vars.color.boardBg,
  borderRadius: vars.radius.panel,
  margin: '0 auto',
  maxWidth: vars.size.boardMaxWidth,
  padding: vars.space.md,
  width: '100%',
});

export const boardHole = style({
  aspectRatio: '1 / 1',
  background: vars.color.boardHoleBg,
  borderRadius: vars.radius.round,
  width: '100%',
});
