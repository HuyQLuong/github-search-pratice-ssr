import {createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0.25rem;
    padding: 0.25rem;
    @media (min-width: 768px) {
      margin: 0.5rem;
      padding: 1rem;
    }
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme } )  => theme?.body ? theme.body : lightTheme.body} ;
    color: ${({ theme }) => theme?.text ? theme.text : lightTheme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
    fill:  ${({ theme }) => theme?.text ? theme.text : lightTheme.body};
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  svg {
    fill:  ${({ theme }) => theme?.text ? theme.text : lightTheme.body};
  }
  span {
    color: ${({ theme }) => theme?.text ? theme.text : lightTheme.body};
  }

  li a {
    color: ${({ theme }) => theme?.text ? theme.text : lightTheme.body};
    background: ${({ theme } )  => theme?.body ? theme.body : lightTheme.body};
    box-shadow: 1px 2px 5px ${({ theme } )  => theme?.body ? theme.body : lightTheme.body};
  }
  a {
    color: ${({ theme }) => theme?.text ? theme.text : lightTheme.body};
  }

  div {
    color: ${({ theme }) => theme?.text ? theme.text : lightTheme.text};
    background-color: ${({ theme } )  => theme?.background ? theme.body : lightTheme.body};
  }

  ul {
    color: ${({ theme }) => theme?.text ? theme.text : lightTheme.body};
    background-color: ${({ theme } )  => theme?.body ? theme.body : lightTheme.body};
  }

  .card {
    box-shadow: 1px 2px 5px ${({ theme } )  => theme?.shadow ? theme.shadow : lightTheme.shadow};
  }

`

export const lightTheme = {
  body: '#ffffff',
  text: '#121620',
  background: '#ffffff',
  shadow: 'rgb(0,0,0, 0.05)'
};
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
  background: '#000000',
  shadow: 'rgb(256,256,256, 0.1)'
};

export default GlobalStyles;
