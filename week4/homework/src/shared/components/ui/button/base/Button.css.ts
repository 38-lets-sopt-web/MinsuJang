import { recipe } from '@vanilla-extract/recipes';
import { primitiveTokens } from '@styles/tokens.css';
import { vars } from '@styles/theme.css';

export const button = recipe({
  base: {
    width: 'fit-content',
    borderRadius: vars.radius.button,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.space.xs,
    color: vars.color.buttonText,
    fontSize: vars.font.bodyMd,
    fontWeight: vars.font.weightBold,
    lineHeight: vars.font.lineHeightNormal,
    whiteSpace: 'nowrap',
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
    },
    size: {
      md: {
        minHeight: vars.size.buttonHeight,
        padding: `${vars.space.sm} ${vars.space.buttonPaddingX}`,
      },
      sm: {
        minHeight: primitiveTokens.space[40],
        padding: `${vars.space.xs} ${vars.space.md}`,
        fontSize: vars.font.labelMd,
      },
    },
    fullWidth: {
      true: {
        width: '100%',
      },
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
});
