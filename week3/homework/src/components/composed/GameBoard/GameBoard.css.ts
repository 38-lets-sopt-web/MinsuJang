import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const boardFrame = style({
  background: vars.color.boardBg,
  borderRadius: vars.radius.panel,
  margin: '0 auto',
  maxWidth: vars.size.boardMaxWidth,
  padding: vars.space.md,
  width: '100%',
});

export const boardHole = style({
  alignItems: 'center',
  aspectRatio: '1 / 1',
  background: vars.color.boardHoleBg,
  borderRadius: vars.radius.round,
  color: vars.color.textPrimary,
  cursor: 'pointer',
  display: 'flex',
  fontSize: vars.font.bodyMd,
  fontWeight: vars.font.weightBold,
  justifyContent: 'center',
  width: '100%',
});

export const holeState = styleVariants({
  hidden: {},
  visibleMole: {
    background: vars.color.buttonPrimaryBg,
    color: vars.color.tabActiveText,
  },
  visibleBomb: {
    background: vars.color.buttonDangerBg,
  },
  hit: {
    background: vars.color.tabActiveBg,
    color: vars.color.tabActiveText,
  },
});
