import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { useThemeContext } from './context/ThemeState/ThemeState'
import { GlobalStyles } from './styles/global'

const Container = styled.main`
  max-width: 1080px;
  padding: 16px 20px;
  margin: 0 auto;
`

function App() {
  const { theme } = useThemeContext()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container className="App">
        <Header />
      </Container>
    </ThemeProvider>
  )
}

export default App
