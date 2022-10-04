import React, { useEffect } from 'react'
import { Skeleton } from '@mui/material'
import styled from 'styled-components'
import { useTranslationContext } from '../context/TranslationState/TranslationState'
import { useTranslateMutation } from '../api/api'
import AddFavoritesButton from './AddFavoritesButton'

const Container = styled.div`
  height: 100%;
  padding: 20px;
  position: relative;
  font-size: 24px;
`

const AbsoluteRightBottom = styled.span`
  position: absolute;
  bottom: 2px;
  right: 4px;
`

const OutputAria = () => {
  const { inputLanguage, outputLanguage, inputText } = useTranslationContext()
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

  if (isLoading) {
    return <Container><Skeleton variant="rounded"/></Container>
  }

  return (
    <Container>
      {inputText ? data?.data.translation : ''}
      {data?.data.translation && (
        <AbsoluteRightBottom>
          <AddFavoritesButton translationPairs={data?.data.pairs} />
        </AbsoluteRightBottom>
      )}
    </Container>
  )
}

export default OutputAria
