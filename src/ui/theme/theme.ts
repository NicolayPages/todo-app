import { DefaultTheme } from 'styled-components';

export const baseTheme: DefaultTheme = {
  colors: {
    lightGray: '#f4f5f9',
    blackBlue: '#42567A',
    lightBlackBlue: '#5a6e8c',
    dark: '#333',
    white: '#fff',
    milk: '#f3f3f3',
    gray: '#999',
    violet: '#5d3a9b',
    lightViolet: '#7352b3',
    danger: '#f01f1f',
    lightDanger: '#f70c0c',
    blue: '#1976D2',
    transparentBlack: 'rgba(0, 0, 0, 0.4)',
    mist: '#BDBDBD',
  },
  paddings: {
    layoutPadding: '1rem',
    titlePadding: '2rem',
    uiPadding: '0.5rem',
  },
  border: {
    small: '1px',
    medium: '2px',
  },
  radius: {
    small: '4px',
    middle: '8px',
    big: '14px',
  },
  sizes: {
    uiHeight: '44px',
    uiElement: '24px',
    uiBigElement: '34px',
    uiSmallElement: '18px',
    modal: '500px',
  },
  breakpoints: {
    mobile: 425,
    tablet: 768,
  },
  gaps: {
    small: '8px',
    medium: '15px',
    big: '25px',
  },
  zIndex: {
    modal: 100,
  },
};
