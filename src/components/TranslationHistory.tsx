import React from 'react'
import { History } from '@mui/icons-material'
import styled from 'styled-components'
import CustomTable from './CustomTable'
import CustomModal from './CustomModal'
import useLocalStorage from '../hooks/useLocalStorage'
import { TPair } from '../api/types'

const Text = styled.div`
  margin-top: 50px;
  font-size: 18px;
  text-align: center;
`

const Message = () => <Text> History is clear </Text>

const TranslationHistory = () => {
  const [history] = useLocalStorage<TPair[]>('history', [])

  return (
    <CustomModal label="History" buttonIcon={<History />}>
      { history.length > 0
        ? <CustomTable list={history}/>
        : <Message />}
    </CustomModal>
  )
}

export default TranslationHistory
