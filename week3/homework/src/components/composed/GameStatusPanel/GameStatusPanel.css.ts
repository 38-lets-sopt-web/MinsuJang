import { style } from '@vanilla-extract/css';

export const statsGrid = style({
  display: 'grid',
  gap: '1.5rem',
  gridTemplateColumns: '1fr 1fr',
});

export const statFull = style({
  gridColumn: '1 / -1',
  minHeight: '10.25rem',
});

export const statHalf = style({
  minHeight: '10.25rem',
});
