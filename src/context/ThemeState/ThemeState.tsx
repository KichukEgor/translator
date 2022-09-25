import { useCallback, useMemo, useState } from 'react'
import constate from 'constate'
import { darkTheme, lightTheme } from '../../styles/themes'

const useTheme = () => {
  const [theme, setTheme] = useState(lightTheme)

  return {
    toggle: useCallback(
      () => setTheme(theme.id === 'light' ? darkTheme : lightTheme),
      [theme.id]
    ),
    theme: useMemo(() => theme, [theme.id])
  }
}

export const [ThemeProvider, useThemeContext] = constate(useTheme)
