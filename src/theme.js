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

  .react-tabs {
    -webkit-tap-highlight-color: transparent;
  }
  
  .react-tabs__tab-list {
    border-bottom: 1px solid #aaa;
    margin: 0 0 10px;
    padding: 0;
  }
  
  .react-tabs__tab {
    display: inline-block;
    border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 12px;
    cursor: pointer;
  }
  
  .react-tabs__tab--selected {
    background: #fff;
    border-color: #aaa;
    color: black;
    border-radius: 5px 5px 0 0;
  }
  
  .react-tabs__tab--disabled {
    color: GrayText;
    cursor: default;
  }
  
  .react-tabs__tab:focus {
    outline: none;
  }
  
  .react-tabs__tab:focus:after {
    content: '';
    position: absolute;
    height: 5px;
    left: -4px;
    right: -4px;
    bottom: -5px;
    background: #fff;
  }
  
  .react-tabs__tab-panel {
    display: none;
  }
  
  .react-tabs__tab-panel--selected {
    display: block;
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
