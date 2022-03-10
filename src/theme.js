import {createGlobalStyle } from 'styled-components'
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0.25rem;
    padding: 0.25rem;
    @media (min-width: 1000px) {
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

  .user-card {
    box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.05);
    background: ${({ theme } )  => theme?.background ? theme.background : lightTheme.background};
  }

`

export const lightTheme = {
  body: '#f1f1f1',
  text: '#121620',
  background: '#ffffff'
};
export const darkTheme = {
  body: '#121620',
  text: '#f1f1f1',
  background: '#000000'
};

export default GlobalStyles;
