import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background: ${({ theme }) => theme.colors.gray900};
    box-shadow: 0 4px 4px rgba(26, 26, 26, 0.55);
      border: 1px solid #000;
      background-color:  rgba(0, 0, 0);
    -webkit-font-smoothing: antialiased;
    color: ${({ theme }) => theme.colors.white};
  }
  body,
  input,
  select,
  textarea,
  button {
    font: 400 1rem 'Roboto', Helvetica, Arial, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
  ul,
  li {
    list-style: none;
  }
`
