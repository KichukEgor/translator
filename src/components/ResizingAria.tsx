import React, { Dispatch, FC, SetStateAction, useEffect, useRef } from 'react'
import styled from 'styled-components'

const Textarea = styled.textarea`
  min-height: 80px;
  width: 100%;
  font-size: 24px;
  color: ${(props) => props.theme.palette.primary.contrastText};
  border: none;
  background: transparent;
  resize: none;
`

type TProps = {
  value: string
  setValue: Dispatch<SetStateAction<string>>
}

const ResizingAria:FC<TProps> = ({ value, setValue }) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)

  const resizeTextArea = () => {
    if (textAreaRef.current !== null) {
      textAreaRef.current.style.height = 'auto'
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`
    }
  }

  useEffect(resizeTextArea, [value])

  return (
    <Textarea
      ref={textAreaRef}
      placeholder="Enter text"
      onChange={(e) => setValue(e.target.value)}
      autoFocus
      rows={1}
    />
  )
}

export default ResizingAria
