import React from 'react'
import { Switch, Tooltip } from '@mui/material'
import { useThemeContext } from '../context/ThemeState/ThemeState'

const ThemeSwitcher = () => {
  const { theme, toggle } = useThemeContext()
  const isDark = theme.id === 'dark'

  return (
    <Tooltip title="Switch theme" arrow>
      <span>
        <Switch
          color="primary"
          checked={isDark}
          onClick={() => toggle()}
        />
      </span>
    </Tooltip>
  )
}

export default ThemeSwitcher
