import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  :hover {
    cursor: pointer;
  }
}

textarea#story {
  -moz-appearance:none;
  outline:0 none transparent;
}

textarea:focus, input:focus{
  outline: 0;
}


body {
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  font-family: monospace;
  overflow-x: hidden;
  transition: .3s ease;
}
`
