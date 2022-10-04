import React from 'react'
import styled from 'styled-components'
import { Switch, Tooltip } from '@mui/material'
import { useThemeContext } from '../context/ThemeState/ThemeState'
import FavoriteTranslations from './FavoriteTranslations'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Header = () => {
  const { theme, toggle } = useThemeContext()
  const isDark = theme.id === 'dark'

  return (
    <StyledHeader>
      <h1>Translator</h1>

      <Buttons>
        <FavoriteTranslations />
        <Tooltip title="Switch theme" arrow>
          <span>
            <Switch
              color="primary"
              checked={isDark}
              onClick={() => toggle()}
            />
          </span>
        </Tooltip>
      </Buttons>

    </StyledHeader>
  )
}
export default Header
