import { recipe } from '@vanilla-extract/recipes';
import { primitiveTokens } from '@styles/tokens.css';
import { vars } from '@styles/theme.css';

export const root = recipe({
  base: {
    width: '100%',
    minHeight: primitiveTokens.space[64],
    borderRadius: vars.radius.card,
    background: vars.color.boardBg,
    boxShadow: vars.shadow.card,
    padding: `${vars.space.xl} ${vars.space.lg}`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: vars.space.lg,
    color: vars.color.textPrimary,
    textAlign: 'center',
    transition: `transform ${vars.motion.fast}, box-shadow ${vars.motion.fast}, filter ${vars.motion.fast}`,
  },
  variants: {
    variant: {
      default: {},
      interactive: {
        cursor: 'pointer',

        selectors: {
          '&:not(:disabled):hover': {
            filter: 'brightness(0.99)',
            transform: 'translateY(-2px)',
          },
          '&:not(:disabled):focus-visible': {
            outline: 'none',
            boxShadow: `${vars.shadow.card}, 0 0 0 3px ${primitiveTokens.color.sky100}`,
          },
          '&:disabled': {
            cursor: 'not-allowed',
            opacity: 0.55,
          },
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export const title = recipe({
  base: {
    maxWidth: '100%',
    color: vars.color.textPrimary,
    fontSize: vars.font.headingMd,
    fontWeight: vars.font.weightBold,
    lineHeight: vars.font.lineHeightTight,
    overflowWrap: 'anywhere',
  },
});

export const badge = recipe({
  base: {
    maxWidth: '100%',
    borderRadius: vars.radius.pill,
    background: vars.color.panelBg,
    color: vars.color.textPrimary,
    padding: `${vars.space.xs} ${vars.space.md}`,
    fontSize: vars.font.bodyMd,
    fontWeight: vars.font.weightSemibold,
    lineHeight: vars.font.lineHeightNormal,
    overflowWrap: 'anywhere',
  },
});
