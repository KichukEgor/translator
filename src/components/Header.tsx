import React from 'react'
import styled from 'styled-components'
import FavoriteTranslations from './FavoriteTranslations'
import TranslationHistory from './TranslationHistory'
import ThemeSwitcher from './ThemeSwitcher'

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

const Header = () => (
  <StyledHeader>
    <h1>Translator</h1>
    <Buttons>
      <TranslationHistory />
      <FavoriteTranslations />
      <ThemeSwitcher />
    </Buttons>
  </StyledHeader>
)

export default Header
