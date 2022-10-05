import React, { useEffect } from 'react'
import { Skeleton } from '@mui/material'
import styled from 'styled-components'
import { useTranslationContext } from '../context/TranslationState/TranslationState'
import AddFavoritesButton from './AddFavoritesButton'
import useTranslationHistory from '../hooks/useTranslationHistory'

const Container = styled.div`
  height: 100%;
  min-height: 80px;
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
  useTranslationHistory(data)

  useEffect(() => {
    if (inputText.length) {
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
      {data?.data.translation && !!inputText.length ? (
        <>
          <div>{data?.data.translation}</div>
          <AbsoluteRightBottom>
            <AddFavoritesButton translationPairs={data?.data.pairs} />
          </AbsoluteRightBottom>
        </>
      ) : ''}
    </Container>
  )
}

export default OutputAria
