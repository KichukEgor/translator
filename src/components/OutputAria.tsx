import React, { useEffect } from 'react'
import { Skeleton } from '@mui/material'
import { useLanguageContext } from '../context/LanguageState/LanguageState'
import { useTranslateMutation } from '../api/api'

const OutputAria = () => {
  const { inputLanguage, outputLanguage, inputText } = useLanguageContext()
  const { isLoading, data, mutate } = useTranslateMutation()

  useEffect(() => {
    if (inputText) {
      mutate({
        sl: inputLanguage,
        tl: outputLanguage,
        text: inputText
      })
    }
  }, [inputLanguage, outputLanguage, inputText])

  if (isLoading || !data) {
    return <Skeleton variant="rounded"/>
  }

  return (
    <div>
      {inputText ? data?.data.translation : ''}
    </div>
  )
}

export default OutputAria
