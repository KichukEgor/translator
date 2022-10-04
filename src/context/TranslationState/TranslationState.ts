import { useEffect, useState } from 'react'
import constate from 'constate'
import { useLanguagesQuery } from '../../api/api'

const useTranslation = () => {
  const { data: languageOptions } = useLanguagesQuery()
  const [inputLanguage, setInputLanguage] = useState('')
  const [outputLanguage, setOutputLanguage] = useState('')
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    if (languageOptions?.length) {
      setInputLanguage(languageOptions[0].id)
      setOutputLanguage(languageOptions[1].id)
    }
  }, [languageOptions])

  return {
    languageOptions,
    inputLanguage,
    outputLanguage,
    inputText,
    setInputLanguage,
    setOutputLanguage,
    setInputText
  }
}

export const [TranslationProvider, useTranslationContext] = constate(useTranslation)
