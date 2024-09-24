import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#FFFBFF',
  black: '#332D41',
  darkBlack: '#1E192B',
  lightBlack: '#625B71',
  primary: '#EADDFF',
  primaryFixed: '#D0BCFF',
  error: '#F35B52',
};

export const ColorsType = typeof colors;

export const Theme: DefaultTheme = {
  colors: colors,
};
