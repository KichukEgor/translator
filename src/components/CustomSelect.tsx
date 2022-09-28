import { FC } from 'react'
import { FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material'
import { TLanguage } from '../api/types'

type TProps = {
  handleChange: any
  defaultOption: string
  options?: TLanguage[]
}

const CustomSelect:FC<TProps> = ({ options, handleChange, defaultOption }) => {
  if (!options?.length) {
    return <Skeleton height={56} />
  }

  return (
    <FormControl fullWidth>
      <InputLabel id="select-label">Language</InputLabel>
      <Select
        labelId="select-label"
        id="select"
        defaultValue={defaultOption}
        value={defaultOption}
        label="Language"
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map(({ id, language }) =>
          <MenuItem key={id} value={id}>{language}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
