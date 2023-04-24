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
    overflow: overlay;
    height: 100%;
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

  body::-webkit-scrollbar {
    width: 0.8vw;
    overflow:overlay;
  }

  body::-webkit-scrollbar-thumb {
    background: hsla(0, 0%, 42%, 0.49);
    opacity: 0.5;
  }

  body::-webkit-scrollbar-thumb:hover {
    background: hsla(0, 0%, 42%, 0.69);
    opacity: 0.5;
  }
`;

export default GlobalStyle;
