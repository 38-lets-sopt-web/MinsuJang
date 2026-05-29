import { recipe } from '@vanilla-extract/recipes';
import { primitiveTokens } from '@styles/tokens.css';
import { vars } from '@styles/theme.css';

export const iconButton = recipe({
  base: {
    borderRadius: vars.radius.round,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    color: vars.color.buttonText,
    cursor: 'pointer',
    userSelect: 'none',
    transition: `filter ${vars.motion.fast}, opacity ${vars.motion.fast}, box-shadow ${vars.motion.fast}`,

    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        opacity: 0.55,
      },
      '&:not(:disabled):hover': {
        filter: 'brightness(0.96)',
      },
      '&:not(:disabled):focus-visible': {
        outline: 'none',
        boxShadow: `0 0 0 3px ${primitiveTokens.color.sky100}`,
      },
    },
  },
  variants: {
    variant: {
      primary: {
        background: vars.color.buttonPrimaryBg,
      },
      neutral: {
        background: vars.color.buttonNeutralBg,
      },
      danger: {
        background: vars.color.buttonDangerBg,
      },
      ghost: {
        background: 'transparent',
        color: vars.color.textSecondary,
      },
    },
    size: {
      md: {
        width: vars.size.buttonHeight,
        height: vars.size.buttonHeight,
      },
      sm: {
        width: primitiveTokens.space[40],
        height: primitiveTokens.space[40],
      },
    },
  },
  defaultVariants: {
    variant: 'neutral',
    size: 'md',
  },
});
