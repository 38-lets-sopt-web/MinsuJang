import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const tabsList = style({
  display: 'inline-flex',
  gap: vars.space.xs,
});

export const tabsTrigger = style({
  alignItems: 'center',
  border: `1px solid ${vars.color.tabActiveBg}`,
  borderRadius: vars.radius.pill,
  color: vars.color.tabActiveBg,
  cursor: 'pointer',
  display: 'inline-flex',
  fontSize: vars.font.labelMd,
  fontWeight: vars.font.weightBold,
  justifyContent: 'center',
  minWidth: '4rem',
  padding: `0 ${vars.space.lg}`,
  transition: `background ${vars.motion.fast}, color ${vars.motion.fast}, border-color ${vars.motion.fast}`,
});

export const tabsState = styleVariants({
  active: {
    background: vars.color.tabActiveBg,
    borderColor: vars.color.tabActiveBg,
    color: vars.color.tabActiveText,
  },
  inactive: {
    background: 'transparent',
  },
});
