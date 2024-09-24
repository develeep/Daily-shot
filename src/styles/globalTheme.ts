import { DefaultTheme } from 'styled-components';

const colors = {
  white: '#FEF7FF',
  black: '#4A4459',
  darkBlack: '#1D192B',
  lightBlack: '#625B71',
  primary: '#E8DEF8',
  primaryFixed: '#D0BCFF',
  error: '#F35B52',
  blue: '#381E72',
  darkBlue: '#22005D',
  lightBlue: '#8069BF',
};

export const ColorsType = typeof colors;

export const Theme: DefaultTheme = {
  colors: colors,
};
