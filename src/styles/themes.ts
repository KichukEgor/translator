import { DefaultTheme } from 'styled-components'

export interface ITheme extends DefaultTheme {
  id: string
}

export const darkTheme: ITheme = {
  id: 'dark',
  borderRadius: '4px',
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff'
    },
    primary: {
      main: '#262525',
      contrastText: '#cec5c5'
    },
    secondary: {
      main: '#383848',
      contrastText: '#cec5c5'
    }
  }
}

export const lightTheme: ITheme = {
  id: 'light',
  borderRadius: '4px',

  palette: {
    common: {
      black: '#ffffff',
      white: '#222831'
    },
    primary: {
      main: '#262525',
      contrastText: '#cec5c5'
    },
    secondary: {
      main: '#d7d6d9',
      contrastText: '#cec5c5'
    }
  }
}
