import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    line-height: 1.5;
    scroll-behavior: smooth;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
