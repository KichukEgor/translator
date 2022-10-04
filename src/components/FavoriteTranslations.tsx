import React from 'react'
import { Favorite } from '@mui/icons-material'
import styled from 'styled-components'
import CustomModal from './CustomModal'
import CustomTablePagination from './CustomTablePagination'
import useLocalStorage from '../hooks/useLocalStorage'
import { TPair } from '../api/types'

const Text = styled.div`
  margin-top: 50px;
  font-size: 18px;
  text-align: center;
`

const Message = () => <Text> Favorite translations not added </Text>

const FavoriteTranslations = () => {
  const [favorites] = useLocalStorage<TPair[]>('favorites', [])

  return (
    <CustomModal label="Favorites" buttonIcon={<Favorite />}>
      { favorites.length > 0
        ? <CustomTablePagination list={favorites}/>
        : <Message />}
    </CustomModal>
  )
}

export default FavoriteTranslations
