import { recipe } from '@vanilla-extract/recipes';
import { vars } from '@styles/theme.css';

export const button = recipe({
  base: {
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
  },
  variants: {
    variant: {
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
    },
    size: {
      sm: {
        fontSize: vars.font.labelMd,
        height: '2.5rem',
        padding: `0 ${vars.space.buttonPaddingX}`,
      },
      md: {},
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'md',
  },
});
