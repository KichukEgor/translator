import React from 'react'
import CustomSelect from './CustomSelect'
import { useTranslationContext } from '../context/TranslationState/TranslationState'

const LanguageTo = () => {
  const { languageOptions, setOutputLanguage, outputLanguage } = useTranslationContext()

  return (
    <CustomSelect
      defaultOption={outputLanguage}
      options={languageOptions}
      handleChange={setOutputLanguage} />
  )
}

export default LanguageTo
