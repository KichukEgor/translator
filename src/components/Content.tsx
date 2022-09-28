import React from 'react'
import styled from 'styled-components'
import InputAria from './InputAria'
import OutputAria from './OutputAria'
import LanguageFrom from './LanguageFrom'
import LanguageTo from './LanguageTo'

const Container = styled.section`
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px 1fr;
  grid-gap: 10px;
  border-radius: 8px;
`

const GridItem = styled.div`
  padding: 20px;
  border: 1px solid ${(props) => (props.theme.palette.secondary.contrastText)};
  border-radius: 4px;
`

const SecondaryGridItem = styled.div`
  padding: 20px;
  font-size: 24px;
  background: ${(props) => (props.theme.palette.secondary.main)};
  border: 1px solid ${(props) => (props.theme.palette.secondary.contrastText)};
  border-radius: 4px;
`

const Content = () => (
  <Container>
    <LanguageFrom />
    <LanguageTo />
    <GridItem><InputAria/></GridItem>
    <SecondaryGridItem><OutputAria/></SecondaryGridItem>
  </Container>
)

export default Content
