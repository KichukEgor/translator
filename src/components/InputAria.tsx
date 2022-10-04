import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import { useTranslationContext } from '../context/TranslationState/TranslationState'
import ResizingAria from './ResizingAria'
import { useTranslateMutation } from '../api/api'
import AttentionMessage from './AttentionMessage'

function InputAria() {
  const [value, setValue] = useState('')
  const { setInputText } = useTranslationContext()
  const { data } = useTranslateMutation()
  console.log('InputData', data)
  const debouncedValue = useDebounce(value, 500)

  useEffect(() => {
    setInputText(value)
  }, [debouncedValue])

  return (
    <>
      <ResizingAria value={value} setValue={setValue} />
      { data?.data.source.language.didYouMean && AttentionMessage}
    </>
  )
}

export default InputAria
