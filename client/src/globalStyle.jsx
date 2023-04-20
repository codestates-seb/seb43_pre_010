import { createGlobalStyle } from 'styled-components';

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

  code {
    background-color: hsl(0, 0%, 96.5%);
  }

  pre {
  background-color: hsl(0, 0%, 96.5%);
  padding: 12px;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 4px;
  }

`;

export default GlobalStyle;
