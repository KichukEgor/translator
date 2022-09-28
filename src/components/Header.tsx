import styled from 'styled-components'
import { Switch, Tooltip } from '@mui/material'
import { useThemeContext } from '../context/ThemeState/ThemeState'

const StyledHeader = styled.header`
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
      <Tooltip title="Switch theme" arrow>
        <span>
          <Switch
            color="secondary"
            checked={isDark}
            onClick={() => toggle()}
          />
        </span>
      </Tooltip>
    </StyledHeader>
  )
}
export default Header
