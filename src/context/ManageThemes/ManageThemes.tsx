import { Context, createContext, FC, ReactNode, useContext, useMemo, useState } from 'react'
import { ThemeContext } from './types'
import { darkTheme, lightTheme } from '../../styles/themes'

export const ManageThemeContext: Context<ThemeContext> = createContext({
  theme: darkTheme,
  toggle: () => { }
})

export const useTheme = () => useContext(ManageThemeContext)

type TProps = {
  children: ReactNode
}

export const ThemeManager: FC<TProps> = ({ children }) => {
  const [theme, setTheme] = useState(darkTheme)

  const toggle = (): void => {
    setTheme(theme.id === 'light' ? darkTheme : lightTheme)
  }

  const memoizedValue = useMemo(
    () => ({ theme, toggle }),
    [theme.id]
  )

  return (
    <ManageThemeContext.Provider value={memoizedValue}>
      {children}
    </ManageThemeContext.Provider>
  )
}
