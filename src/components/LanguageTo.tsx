import React from 'react'
import CustomSelect from './CustomSelect'
import { useLanguageContext } from '../context/LanguageState/LanguageState'

const LanguageTo = () => {
  const { languageOptions, setOutputLanguage, outputLanguage } = useLanguageContext()

  return (
    <CustomSelect
      defaultOption={outputLanguage}
      options={languageOptions}
      handleChange={setOutputLanguage} />
  )
}

export default LanguageTo
