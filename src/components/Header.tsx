import React from 'react'
import styled from 'styled-components'
import FavoriteTranslations from './FavoriteTranslations'
import TranslationHistory from './TranslationHistory'
import Switcher from './Switcher'

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
      <Switcher />
    </Buttons>
  </StyledHeader>
)

export default Header
