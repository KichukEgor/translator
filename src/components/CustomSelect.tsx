import { FC } from 'react'
import styled from 'styled-components'
import { FormControl, InputLabel, MenuItem, Select, Skeleton } from '@mui/material'
import InputBase from '@mui/material/InputBase'
import { TLanguage } from '../api/types'

const StyledLabel = styled(InputLabel)`
 && {
   padding: 0 4px;
   border-radius: ${({ theme }) => theme.borderRadius};
   background: ${({ theme }) => theme.palette.primary.main};
   color: ${({ theme }) => theme.palette.primary.contrastText};
 }
`

const StyledInput = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    position: 'relative',
    padding: '10px 26px 10px 12px',
    fontSize: 16,
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: theme.borderRadius,
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    textTransform: 'capitalize',
    '&:focus': {
      borderRadius: theme.borderRadius,
      borderColor: '#80b0ee',
      boxShadow: '0 0 0 2px rgba(0,123,255,.25)'
    }
  }
}))

const StyledMenuItem = styled(MenuItem)`
  && {
    text-transform: capitalize;
  }
`

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
          <StyledMenuItem key={id} value={id}>{language}</StyledMenuItem>)}
      </Select>
    </FormControl>
  )
}

export default CustomSelect
