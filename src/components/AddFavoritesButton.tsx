import React, { FC, useState } from 'react'
import { Checkbox, Tooltip } from '@mui/material'
import { FavoriteBorder, Favorite } from '@mui/icons-material'
import useLocalStorage from '../hooks/useLocalStorage'
import { TPair } from '../api/types'

type TProps = {
  translationPairs: TPair[]
}

const AddFavoritesButton:FC<TProps> = ({ translationPairs }) => {
  const [favorites, setFavorites] = useLocalStorage<TPair[]>('favorites', [])
  const [isAdded, setIsAdded] = useState(false)

  const handleAddToFavorites = () => {
    setFavorites((prev) => [...prev, ...translationPairs])
    setIsAdded(true)
  }

  const handleRemoveFavorite = () => {
    const shortedList = favorites.slice(0, -1)
    setFavorites(shortedList)
    setIsAdded(false)
  }

  const toggle = () => {
    if (isAdded) {
      handleRemoveFavorite()
    } else {
      handleAddToFavorites()
    }
  }

  return (
    <Tooltip title="Add to favorites">
      <Checkbox
        aria-label="checkbox"
        checked={isAdded}
        icon={<FavoriteBorder color="primary" />}
        checkedIcon={<Favorite color="primary" />}
        onClick={() => toggle()}
      />
    </Tooltip>
  )
}

export default AddFavoritesButton
