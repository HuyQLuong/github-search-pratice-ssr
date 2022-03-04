import {createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0.5rem;
    padding: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme } )  => theme?.body ? theme.body : lightTheme.body} ;
    color: ${({ theme }) => theme?.text ? theme.text : lightTheme.body};
    transition: background 0.2s ease-in, color 0.2s ease-in;

  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

`

export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620'
};
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1'
};

export default GlobalStyles;
