import React from 'react'
import CustomSelect from './CustomSelect'
import { useTranslationContext } from '../context/TranslationState/TranslationState'

const LanguageFrom = () => {
  const { languageOptions, inputLanguage, setInputLanguage } = useTranslationContext()

  return (
    <CustomSelect
      defaultOption={inputLanguage}
      options={languageOptions}
      handleChange={setInputLanguage} />
  )
}

export default LanguageFrom
