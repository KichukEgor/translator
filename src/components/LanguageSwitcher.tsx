import React from 'react'
import styled from 'styled-components'
import { IconButton } from '@mui/material'
import { SwapHorizOutlined } from '@mui/icons-material'
import { useTranslationContext } from '../context/TranslationState/TranslationState'

const Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledButton = styled(IconButton)`
  && {
    padding: 3px;
  }
`

const LanguageSwitcher = () => {
  const {
    inputLanguage,
    outputLanguage,
    setInputLanguage,
    setOutputLanguage
  } = useTranslationContext()

  const handleSwapLanguages = () => {
    setInputLanguage(outputLanguage)
    setOutputLanguage(inputLanguage)
  }

  return (
    <Container>
      <StyledButton color="primary" onClick={handleSwapLanguages}>
        <SwapHorizOutlined />
      </StyledButton>
    </Container>
  )
}

export default LanguageSwitcher
