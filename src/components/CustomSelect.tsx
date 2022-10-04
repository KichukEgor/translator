import { FC } from 'react'
import styled from 'styled-components'
import { FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { TLanguage } from '../api/types'

const StyledLabel = styled(InputLabel)`
 && {
   color: ${({ theme }) => theme.palette.primary.contrastText};
 }
`

const StyledInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: '10px'
  },
  '& .MuiInputBase-input': {
    borderRadius: theme.borderRadius,
    position: 'relative',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    '&:focus': {
      borderRadius: theme.borderRadius,
      borderColor: '#80b0ee',
      boxShadow: '0 0 0 2px rgba(0,123,255,.25)'
    }
  }
}))

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
      <StyledLabel id="select-label">Language</StyledLabel>
      <Select
        labelId="select-label"
        id="select"
        defaultValue={defaultOption}
        value={defaultOption}
        input={<StyledInput />}
        onChange={(e) => handleChange(e.target.value)}
      >
        {options.map(({ id, language }) =>
          <MenuItem key={id} value={id}>{language}</MenuItem>)}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
