import React, { useEffect, useState } from 'react'
import useDebounce from '../hooks/useDebounce'
import { useLanguageContext } from '../context/LanguageState/LanguageState'
import ResizingAria from './ResizingAria'

function InputAria() {
  const [value, setValue] = useState('')
  const { setInputText } = useLanguageContext()
  const debouncedValue = useDebounce(value, 500)

  useEffect(() => {
    setInputText(value)
  }, [debouncedValue])

  return (
    <ResizingAria value={value} setValue={setValue} />
  )
}

export default InputAria
