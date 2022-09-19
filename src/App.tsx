import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import { GlobalStyles } from './styles/global'
import { useTheme } from './context/ManageThemes/ManageThemes'

const Container = styled.main`
  max-width: 1080px;
  margin: 0 auto;
`

function App() {
  const { theme } = useTheme()
  console.log('theme', theme)

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
