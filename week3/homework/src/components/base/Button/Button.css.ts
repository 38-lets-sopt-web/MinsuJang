import { style, styleVariants } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const button = style({
  alignItems: 'center',
  borderRadius: vars.radius.button,
  color: vars.color.buttonText,
  cursor: 'pointer',
  display: 'inline-flex',
  fontSize: vars.font.labelMd,
  fontWeight: vars.font.weightBold,
  height: vars.size.buttonHeight,
  justifyContent: 'center',
  padding: `${vars.space.buttonPaddingY} ${vars.space.buttonPaddingX}`,
  transition: `transform ${vars.motion.fast}, opacity ${vars.motion.fast}`,
  selectors: {
    '&:disabled': {
      cursor: 'not-allowed',
      opacity: 0.48,
    },
  },
});

export const variant = styleVariants({
  primary: {
    background: vars.color.buttonPrimaryBg,
    color: vars.color.tabActiveText,
  },
  danger: {
    background: vars.color.buttonDangerBg,
  },
  neutral: {
    background: vars.color.buttonNeutralBg,
  },
  ghost: {
    background: 'transparent',
    border: `1px solid ${vars.color.tabActiveBg}`,
  },
});

export const size = styleVariants({
  sm: {
    fontSize: vars.font.labelMd,
    height: '2.5rem',
    padding: `0 ${vars.space.buttonPaddingX}`,
  },
  md: {},
});
