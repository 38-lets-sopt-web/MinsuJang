import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';
import { primitiveTokens } from '@styles/tokens.css';

export const root = style({
  width: 'fit-content',
});

export const fullWidth = style({
  width: '100%',
});

export const input = style({
  width: '100%',
  height: vars.size.buttonHeight,
  border: `1px solid ${vars.color.borderSoft}`,
  borderRadius: vars.radius.card,
  background: vars.color.boardBg,
  color: vars.color.textPrimary,
  padding: `0 ${vars.space.md}`,
  outline: 'none',
  fontSize: vars.font.bodyMd,
  fontWeight: vars.font.weightMedium,
  lineHeight: vars.font.lineHeightNormal,
  transition: `border-color ${vars.motion.fast}, box-shadow ${vars.motion.fast}, background ${vars.motion.fast}`,

  selectors: {
    '&:focus': {
      borderColor: vars.color.tabActiveBg,
      boxShadow: `0 0 0 3px ${primitiveTokens.color.sky100}`,
    },
    '&:disabled': {
      cursor: 'not-allowed',
      background: vars.color.panelBg,
      color: vars.color.textSecondary,
    },
  },
});

export const error = style({
  borderColor: vars.color.textDanger,

  selectors: {
    '&:focus': {
      borderColor: vars.color.textDanger,
      boxShadow: `0 0 0 3px ${primitiveTokens.color.red300}`,
    },
  },
});
