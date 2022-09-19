import styled from 'styled-components'
import { Switch, Tooltip } from '@mui/material'
import { useTheme } from '../context/ManageThemes/ManageThemes'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Title = styled.h1`
  padding: 8px 20px;
  text-align: center;
`

const Header = () => {
  const { theme, toggle } = useTheme()
  const isDark = theme.id === 'dark'

  return (
    <StyledHeader>
      <Title>Translator</Title>
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
