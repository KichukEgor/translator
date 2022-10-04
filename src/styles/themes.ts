import { DefaultTheme } from 'styled-components'

export interface ITheme extends DefaultTheme {
  id: string,
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
      contrastText: '#ffffff'
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
      black: '#222831',
      white: '#ffffff'
    },
    primary: {
      main: '#ffffff',
      contrastText: '#262525'
    },
    secondary: {
      main: '#ebebef',
      contrastText: '#2d2d2d'
    }
  }
}
