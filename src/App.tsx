import React from 'react'
import styled from 'styled-components'
import Header from './components/Header'

const Container = styled.main`
  padding: 20px;
`

function App() {
  return (
    <Container>
      <Header/>
    </Container>
  )
}

export default App
