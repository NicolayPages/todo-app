import { createGlobalStyle } from 'styled-components';

import '../fonts/index.css';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
    box-shadow: none;
    border: none;
  }

  *:focus {
    outline: none;
  }
  
  body {
    font-family: Pantom, sans-serif;
  }

  button, input {
    font-family: Pantom, sans-serif;
    background: none;
    
    &:hover {
      cursor: pointer;
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    transition: color .2s ease-in-out;
  }
`;
