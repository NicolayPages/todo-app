import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      lightGray: string;
      blackBlue: string;
      lightBlackBlue: string;
      dark: string;
      white: string;
      milk: string;
      gray: string;
      violet: string;
      lightViolet: string;
      danger: string;
      lightDanger: string;
      blue: string;
      transparentBlack: string;
      mist: string;
    };
    paddings: {
      layoutPadding: string;
      titlePadding: string;
      uiPadding: string;
    };
    border: {
      small: string;
      medium: string;
    };
    radius: {
      small: string;
      middle: string;
      big: string;
    };
    sizes: {
      uiHeight: string;
      uiElement: string;
      uiSmallElement: string;
      modal: string;
      uiBigElement: string;
    };
    breakpoints: {
      mobile: number;
      tablet: number;
    };
    gaps: {
      small: string;
      medium: string;
      big: string;
    };
    zIndex: {
      modal: number;
    };
  }
}
