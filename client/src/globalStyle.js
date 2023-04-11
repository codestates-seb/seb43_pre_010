import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;  
    box-sizing: border-box;
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
