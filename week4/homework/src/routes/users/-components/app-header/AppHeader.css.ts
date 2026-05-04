import { style } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

const mobileQuery = 'screen and (max-width: 640px)';

export const root = style({
  position: 'relative',
  zIndex: 10,
});

export const menuButton = style({
  display: 'none',
  width: '2.75rem',
  height: '2.75rem',
  borderRadius: vars.radius.round,
  alignItems: 'center',
  justifyContent: 'center',
  color: vars.color.headerText,

  '@media': {
    [mobileQuery]: {
      display: 'inline-flex',
    },
  },
});

export const menuIcon = style({
  position: 'relative',
  width: '1.25rem',
  height: '0.875rem',
  display: 'inline-block',

  selectors: {
    '&::before, &::after': {
      content: '',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '2px',
      borderRadius: vars.radius.pill,
      background: 'currentColor',
      transition: `transform ${vars.motion.normal}, top ${vars.motion.normal}`,
    },
    '&::before': {
      top: 0,
    },
    '&::after': {
      top: '0.75rem',
    },
  },
});

export const menuIconOpen = style({
  selectors: {
    '&::before': {
      top: '0.375rem',
      transform: 'rotate(45deg)',
    },
    '&::after': {
      top: '0.375rem',
      transform: 'rotate(-45deg)',
    },
  },
});

export const nav = style({
  '@media': {
    [mobileQuery]: {
      position: 'absolute',
      top: '100%',
      right: 0,
      left: 0,
      padding: `${vars.space.md} ${vars.space.pagePadding}`,
      flexDirection: 'column',
      alignItems: 'stretch',
      gap: vars.space.md,
      background: vars.color.headerBg,
      boxShadow: vars.shadow.card,
      overflow: 'hidden',
      transformOrigin: 'top',
      transition: `opacity ${vars.motion.normal}, transform ${vars.motion.normal}, max-height ${vars.motion.normal}`,
    },
  },
});

export const navOpen = style({
  '@media': {
    [mobileQuery]: {
      maxHeight: '14rem',
      opacity: 1,
      transform: 'translateY(0)',
      pointerEvents: 'auto',
    },
  },
});

export const navClosed = style({
  '@media': {
    [mobileQuery]: {
      maxHeight: 0,
      opacity: 0,
      transform: 'translateY(-0.75rem)',
      pointerEvents: 'none',
    },
  },
});

export const navItem = style({
  '@media': {
    [mobileQuery]: {
      width: '100%',
      minHeight: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
    },
  },
});
