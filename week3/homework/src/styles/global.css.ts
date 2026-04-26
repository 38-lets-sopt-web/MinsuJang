import { globalStyle } from '@vanilla-extract/css';
import { vars } from '@styles/theme.css';

globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

globalStyle('html, body, #root', {
  margin: 0,
  minHeight: '100%',
});

globalStyle('html', {
  WebkitTextSizeAdjust: '100%',
});

globalStyle('body', {
  background: vars.color.pageBg,
  color: vars.color.textPrimary,
  fontFamily: vars.font.family,
  fontSize: vars.font.bodyMd,
  lineHeight: vars.font.lineHeightNormal,
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
  MozOsxFontSmoothing: 'grayscale',
});

globalStyle('button, input, select, textarea', {
  font: 'inherit',
});

globalStyle('button', {
  border: 0,
  background: 'transparent',
  color: 'inherit',
  padding: 0,
});

globalStyle('img', {
  display: 'block',
  maxWidth: '100%',
});

globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

globalStyle('h1, h2, h3, h4, h5, h6, p, ul, ol, dl, dd, figure, blockquote', {
  margin: 0,
});

globalStyle('ul, ol', {
  listStyle: 'none',
  padding: 0,
});

globalStyle('fieldset', {
  border: 0,
  margin: 0,
  minWidth: 0,
  padding: 0,
});

globalStyle('table', {
  borderCollapse: 'collapse',
  borderSpacing: 0,
});

globalStyle('th, td', {
  padding: 0,
});

globalStyle('input, textarea, select', {
  color: 'inherit',
});

globalStyle('input::placeholder, textarea::placeholder', {
  color: vars.color.textSecondary,
  opacity: 1,
});
