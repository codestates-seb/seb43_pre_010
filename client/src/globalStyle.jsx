import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    padding-top: 50px;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  ol, ul {
    list-style: none;
  }
`;

export default GlobalStyle;
