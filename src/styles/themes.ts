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
      main: '#726a95',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff'
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
      main: '#ffffff',
      contrastText: '#726a95'
    },
    secondary: {
      main: '#ffffff',
      contrastText: '#709fb0'
    }
  }
}
