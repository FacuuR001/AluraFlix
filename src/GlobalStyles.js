import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  margin: 0;
  padding: 0;
  list-style: none;
}

html {
  font-size: 16px; /* 1rem = 10px */
}
`

export default GlobalStyle;