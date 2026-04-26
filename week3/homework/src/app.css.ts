import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const app = style({
  margin: '0 auto',
  maxWidth: vars.size.pageWidth,
  padding: `${vars.space.pageTop} ${vars.space.pagePadding} ${vars.space.pageBottom}`,
});
