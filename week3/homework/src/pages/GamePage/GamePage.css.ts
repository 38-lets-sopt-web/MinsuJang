import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

export const gameShell = style({
  display: 'grid',
  gap: vars.space.sectionGap,
  gridTemplateColumns: '18.75rem 1fr',
  '@media': {
    'screen and (max-width: 56.25rem)': {
      gridTemplateColumns: '1fr',
    },
  },
});
