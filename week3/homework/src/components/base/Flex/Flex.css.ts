import { style, styleVariants } from '@vanilla-extract/css';

export const flex = style({
  display: 'flex',
});

export const direction = styleVariants({
  row: { flexDirection: 'row' },
  column: { flexDirection: 'column' },
});

export const align = styleVariants({
  start: { alignItems: 'flex-start' },
  center: { alignItems: 'center' },
  end: { alignItems: 'flex-end' },
  stretch: { alignItems: 'stretch' },
});

export const justify = styleVariants({
  start: { justifyContent: 'flex-start' },
  center: { justifyContent: 'center' },
  end: { justifyContent: 'flex-end' },
  between: { justifyContent: 'space-between' },
});

export const wrap = styleVariants({
  nowrap: { flexWrap: 'nowrap' },
  wrap: { flexWrap: 'wrap' },
});
