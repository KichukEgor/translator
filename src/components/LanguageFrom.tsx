import React from 'react'
import CustomSelect from './CustomSelect'
import { useLanguageContext } from '../context/LanguageState/LanguageState'

const LanguageFrom = () => {
  const { languageOptions, inputLanguage, setInputLanguage } = useLanguageContext()

  return (
    <CustomSelect
      defaultOption={inputLanguage}
      options={languageOptions}
      handleChange={setInputLanguage} />
  )
}

export default LanguageFrom
