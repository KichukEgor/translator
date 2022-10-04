import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import styled, { ThemeProvider } from 'styled-components'
import Header from './components/Header'
import Content from './components/Content'
import { TranslationProvider } from './context/TranslationState/TranslationState'
import { useThemeContext } from './context/ThemeState/ThemeState'
import { LanguageProvider } from './context/LanguageState/LanguageState'
import { GlobalStyles } from './styles/global'

const Container = styled.main`
  max-width: 1080px;
  padding: 16px 20px;
  margin: 0 auto;
`

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  const { theme } = useThemeContext()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Container>
          <Header />
          <TranslationProvider>
            <Content />
          </TranslationProvider>
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
