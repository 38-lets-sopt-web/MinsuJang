import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const table = style({
  width: '100%',
  borderCollapse: 'collapse',
});

export const headCell = style({
  background: vars.color.tableHeadBg,
  color: vars.color.textSecondary,
  fontSize: vars.font.bodyMd,
  fontWeight: vars.font.weightBold,
  padding: `${vars.space.md} ${vars.space.lg}`,
  textAlign: 'center',
});

export const bodyCell = style({
  borderBottom: `1px solid ${vars.color.borderSoft}`,
  color: vars.color.textPrimary,
  padding: `${vars.space.lg} ${vars.space.lg}`,
  textAlign: 'center',
});
