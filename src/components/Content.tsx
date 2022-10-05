import React from 'react'
import styled from 'styled-components'
import InputAria from './InputAria'
import OutputAria from './OutputAria'
import LanguageFrom from './LanguageFrom'
import LanguageTo from './LanguageTo'
import LanguageSwitcher from './LanguageSwitcher'

const Container = styled.section`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 10px;
  border-radius: 8px;
`

const LanguageSelects = styled.div`
  display: grid;
  grid-template-columns: 1fr 30px 1fr;
`

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  transition: .4s ease-in-out;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`

const GridItem = styled.div`
  padding: 20px;
  border: 1px solid ${({ theme }) => (theme.palette.secondary.contrastText)};
  border-radius: ${({ theme }) => (theme.borderRadius)};
`

const SecondaryGridItem = styled.div`
  padding: 20px;
  background: ${({ theme }) => (theme.palette.secondary.main)};
  border: 1px solid ${({ theme }) => (theme.palette.secondary.contrastText)};
  border-radius: ${({ theme }) => (theme.borderRadius)};
`

const LanguageMenu = () => (
  <LanguageSelects>
    <LanguageFrom />
    <LanguageSwitcher />
    <LanguageTo />
  </LanguageSelects>
)

const Content = () => (
  <Container>
    <LanguageMenu />
    <Wrapper>
      <GridItem><InputAria/></GridItem>
      <SecondaryGridItem><OutputAria/></SecondaryGridItem>
    </Wrapper>
  </Container>
)

export default Content
