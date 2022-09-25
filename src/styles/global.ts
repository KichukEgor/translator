import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${(props) => props.theme.palette.common.black};
  color: ${(props) => props.theme.palette.common.white};
  font-family: monospace;
  overflow-x: hidden;
  transition: .3s ease;
}
`